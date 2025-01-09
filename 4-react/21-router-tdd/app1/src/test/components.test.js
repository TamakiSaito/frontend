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

// describe("<Todos />のテスト", () => {
//   beforeEach(() => {
//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         json: () => Promise.resolve([
//           { id: 1, title: "Todo 1", completed: false, userId: 1 },
//           { id: 2, title: "Todo 2", completed: true, userId: 1 }
//         ])
//       })
//     );
//   });

//   afterEach(() => {
//     jest.restoreAllMocks();
//   });

//   it("Todoリストが正しく表示されること", async () => {
//     await act(async () => {
//       render(<Todos />);
//     });

//     await waitFor(() => {
//       expect(screen.getByText("#1 / Todo 1")).toBeInTheDocument();
//       expect(screen.getByText("#2 / Todo 2")).toBeInTheDocument();
//     });
//   });

//   it("新しいTodoを追加できること", async () => {
//     await act(async () => {
//       render(<Todos />);
//     });

//     const input = screen.getByPlaceholderText("New Todo");
//     const sendButton = screen.getByText("SEND");

//     fireEvent.change(input, { target: { value: "New Todo" } });
//     fireEvent.click(sendButton);

//     expect(screen.getByText("#3 / New Todo")).toBeInTheDocument();
//   });

//   it("Todoを削除できること", async () => {
//     await act(async () => {
//       render(<Todos />);
//     });

//     await waitFor(() => {
//       expect(screen.getByText("#1 / Todo 1")).toBeInTheDocument();
//     });

//     const deleteButtons = screen.getAllByText("❌");
//     fireEvent.click(deleteButtons[0]);

//     expect(screen.queryByText("#1 / Todo 1")).not.toBeInTheDocument();
//   });

//   it("Todoの完了状態を切り替えられること", async () => {
//     await act(async () => {
//       render(<Todos />);
//     });

//     await waitFor(() => {
//       expect(screen.getByText("#1 / Todo 1")).toBeInTheDocument();
//     });

//     const todoTitle = screen.getByText("#1 / Todo 1");
//     fireEvent.click(todoTitle);

//     expect(screen.getByText("DONE ✅")).toBeInTheDocument();
//   });
// });