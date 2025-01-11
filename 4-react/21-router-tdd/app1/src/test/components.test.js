import React from "react";
import { render, fireEvent, screen, waitFor, act } from "@testing-library/react";

import "@testing-library/jest-dom";
import Count from "../components/Count";
import Movies from "../components/Movies";
import News from "../components/News";
import Todos from "../components/Todos";

describe("<Count />のレンダリングテスト", () => {
  it("Snapshot test", () => {
    const utils = render(<Count />);
    expect(utils.container).toMatchSnapshot();
  });

  it("初期カウントが0で表示されること", () => {
    const { getByText } = render(<Count />);
    expect(getByText("Count 0")).toBeInTheDocument();
  });

  it("+ボタンをクリックするとカウントが1増えること", () => {
    const { getByText } = render(<Count />);
    fireEvent.click(getByText("+"));
    expect(getByText("Count 1")).toBeInTheDocument();
  });

  it("-ボタンをクリックするとカウントが1減ること", () => {
    const { getByText } = render(<Count />);
    fireEvent.click(getByText("-"));
    expect(getByText("Count -1")).toBeInTheDocument();
  });
});

describe("<Movies />の関数テスト", () => {
  describe("movieRatingClass 関数のテスト", () => {
    const movieRatingClass = (rating) =>
      rating >= 9 ? "good" : rating >= 7 ? "soso" : "bad";

    it("評価が9以上なら 'good' を返す", () => {
      expect(movieRatingClass(9)).toBe("good");
      expect(movieRatingClass(10)).toBe("good");
    });

    it("評価が7以上9未満なら 'soso' を返す", () => {
      expect(movieRatingClass(7)).toBe("soso");
      expect(movieRatingClass(8.9)).toBe("soso");
    });

    it("評価が7未満なら 'bad' を返す", () => {
      expect(movieRatingClass(6.9)).toBe("bad");
      expect(movieRatingClass(0)).toBe("bad");
    });
  });

  describe("useEffect の動作テスト", () => {
    beforeEach(() => {
      jest.spyOn(global, "fetch").mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          data: {
            movies: [
              {
                id: 1,
                title: "Inception",
                year: 2010,
                rating: 8.8,
                genres: ["Action", "Adventure", "Sci-Fi"],
                runtime: 148,
                synopsis: "A thief who steals corporate secrets...",
                url: "https://example.com/inception",
                large_cover_image: "https://example.com/inception.jpg",
              },
            ],
          },
        }),
      });
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("APIから映画データを取得し、表示する", async () => {
      await act(async () => {
        render(<Movies />);
      });

      await waitFor(() => {
        expect(screen.getByText("Inception (2010)")).toBeInTheDocument();
      });
    });

    it("映画データが表示される際に `movieRatingClass` が適切に適用される", async () => {
      await act(async () => {
        render(<Movies />);
      });

      await waitFor(() => {
        const ratingElement = screen.getByText("8.8");
        expect(ratingElement).toHaveClass("soso");
      });
    });
  });
});

describe("<News />のレンダリングテスト", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        {
          id: 42644834,
          title: "My Amazon TV Now Unmutes Itself During Prime Video Commercial Breaks",
          user: "MourYother",
          url: "https://old.reddit.com/r/mildlyinfuriating/comments/1hx5wkq/my_amazon_tv_now_unmutes_itself_during_prime/"
        },
        {
          id: 42620001,
          title: "Nvidia releases its own brand of world models",
          user: "bariscan",
          url: "https://techcrunch.com/2025/01/06/nvidia-releases-its-own-brand-of-world-models/"
        }
      ])
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("ニュースデータが正しく表示されること", async () => {
    await act(async () => {
      render(<News />);
    });

    await waitFor(() => {
      expect(screen.getByText("My Amazon TV Now Unmutes Itself During Prime Video Commercial Breaks")).toBeInTheDocument();
      expect(screen.getByText("Nvidia releases its own brand of world models")).toBeInTheDocument();
    });

    expect(screen.getByText("My Amazon TV Now Unmutes Itself During Prime Video Commercial Breaks").closest("a")).toHaveAttribute(
      "href",
      "https://old.reddit.com/r/mildlyinfuriating/comments/1hx5wkq/my_amazon_tv_now_unmutes_itself_during_prime/"
    );

    expect(screen.getByText(/\/ID: MourYother/)).toBeInTheDocument();
    expect(screen.getByText(/\/ID: bariscan/)).toBeInTheDocument();
  });
});

describe("<Todos />のテスト", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        { id: 1, userId: 1, title: "Test Todo 1", completed: false },
        { id: 2, userId: 1, title: "Test Todo 2", completed: true },
      ]),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("初期レンダリングとデータ取得のテスト", async () => {
    await act(async () => {
      render(<Todos />);
    });
  
    await waitFor(() => {
      expect(screen.getByText(/Test Todo 1/)).toBeInTheDocument();
      expect(screen.getByText(/Test Todo 2/)).toBeInTheDocument();
    }, { timeout: 5000 });
  });

  it("新しいTodoの追加テスト", async () => {
    await act(async () => {
      render(<Todos />);
    });

    const input = screen.getByPlaceholderText("New Todo");
    const sendButton = screen.getByText("SEND");

    fireEvent.change(input, { target: { value: "New Test Todo" } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.queryByText(/New Test Todo/)).toBeInTheDocument();
    });
  });

  it("Todoの削除テスト", async () => {
    await act(async () => {
      render(<Todos />);
    });
  
    await waitFor(() => {
      const deleteButtons = screen.queryAllByRole('button', { name: '❌' });
      expect(deleteButtons.length).toBeGreaterThan(0);
      fireEvent.click(deleteButtons[0]);
    });
  
    await waitFor(() => {
      expect(screen.queryByText(/Test Todo 1/)).not.toBeInTheDocument();
    });
  });

  it("Todoの完了状態の変更テスト", async () => {
    await act(async () => {
      render(<Todos />);
    });
  
    await waitFor(() => {
      const todoTitle = screen.queryByText(/Test Todo 1/);
      expect(todoTitle).toBeInTheDocument();
      fireEvent.click(todoTitle);
    });
  
    await waitFor(() => {
      const completedTodos = screen.queryAllByText("DONE ✅");
      expect(completedTodos.length).toBe(2); // 元々1つ完了済み + 新たに完了したもの
    });
  });
});