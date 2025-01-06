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
                id: 65829,
                title: "The Playroom",
                year: 2012,
                rating: 5.3,
                genres: ["Drama"],
                runtime: 83,
                synopsis: "",
                url: "https://yts.mx/torrent/download/DE8172D9D0303B2397EBA13BE6D0250F19023F24",
                large_cover_image: "https://yts.mx/assets/images/movies/the_playroom_2012/large-cover.jpg",
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
      render(<Movies />);

      // 状態更新を監視
      await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

      // 映画タイトルの表示確認
      expect(screen.getByText("Inception (2010)")).toBeInTheDocument();
    });

    it("映画データが表示される際に `movieRatingClass` が適切に適用される", async () => {
      render(<Movies />);

      // 状態更新を監視
      await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

      // 映画の評価に対応するクラスが適用されていることを確認
      const ratingElement = screen.getByText("8.8");
      expect(ratingElement).toHaveClass("soso");
    });
  });
});

// describe("<News />のレンダリングテスト", () => {
//   afterEach(() => {
//     jest.clearAllMocks(); // 各テスト後にモックをクリア
//   });

//   it("ニュースデータが正しく表示されること", async () => {
//     render(<News />);

//     // ニュースタイトルが表示されることを確認
//     await waitFor(() => {
//       expect(screen.getByText("Test News 1")).toBeInTheDocument();
//       expect(screen.getByText("Test News 2")).toBeInTheDocument();
//     });

//     // ニュースURLが正しく設定されているかを確認
//     expect(screen.getByText("Test News 1").closest("a")).toHaveAttribute(
//       "href",
//       "https://example.com/test-news-1"
//     );
//     expect(screen.getByText("Test News 2").closest("a")).toHaveAttribute(
//       "href",
//       "https://example.com/test-news-2"
//     );

//     // ニュースのIDが表示されることを確認
//     expect(screen.getByText(/\/ID: user1/)).toBeInTheDocument();
//     expect(screen.getByText(/\/ID: user2/)).toBeInTheDocument();
//   });
// });


// describe("Todosコンポーネント", () => {
  
//   test("todosが正しく表示されること", async () => {
//     render(<Todos />);

//     // APIからデータが取得されるまで待機
//     await waitFor(() => screen.getByText("Todos"));

//     // ここでscreen.debug()を使って、レンダリングされているDOMを確認
//     screen.debug(); // これで実際のレンダリング内容を確認できます

//     // APIから取得したデータが表示されるか確認
//     const todoItem = await screen.findByText(/#1/); // IDが1のTodo項目を探す
//     expect(todoItem).toBeInTheDocument();
//   });

//   test("新しいTodoを追加できること", async () => {
//     render(<Todos />);

//     // 新しいTodoを追加
//     const input = screen.getByPlaceholderText("New Todo");
//     const button = screen.getByText("SEND");

//     fireEvent.change(input, { target: { value: "New Todo" } });
//     fireEvent.click(button);

//     // 新しいTodoがリストに追加されることを確認
//     const newTodo = await screen.findByText("New Todo");
//     expect(newTodo).toBeInTheDocument();
//   });

//   test("Todoを削除できること", async () => {
//     render(<Todos />);

//     // 初期のTodo項目を取得
//     const todoItem = await screen.findByText(/#1/);

//     // 削除ボタンをクリックしてTodoを削除
//     const deleteButton = screen.getByText("❌");
//     fireEvent.click(deleteButton);

//     // Todoが削除されることを確認
//     expect(todoItem).not.toBeInTheDocument();
//   });
// });