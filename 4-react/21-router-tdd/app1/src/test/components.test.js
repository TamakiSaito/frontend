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

// describe("<Movies />のレンダリングテスト", () => {
//   beforeEach(() => {
//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         json: () =>
//           Promise.resolve({
//             data: {
//               movies: [
//                 {
//                   id: 1,
//                   title: "Inception",
//                   year: 2010,
//                   rating: 8.8,
//                   genres: ["Action", "Sci-Fi"],
//                   runtime: 148,
//                   synopsis: "A thief who steals corporate secrets...",
//                   url: "https://example.com/inception",
//                   large_cover_image: "https://example.com/inception.jpg",
//                 },
//               ],
//             },
//           }),
//       })
//     );
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it("Snapshot test", async () => {
//     const { container } = render(<Movies />);
//     await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
//     expect(container).toMatchSnapshot();
//   });

//   it("映画データが正しく表示されること", async () => {
//     render(<Movies />);
  
//     // fetch が呼び出されるのを待つ
//     await waitFor(() => expect(global.fetch).toHaveBeenCalled());
  
//     // 映画データのタイトルが表示されることを確認
//     expect(
//       screen.getByText((content) => content.trim().includes("Inception"))
//     ).toBeInTheDocument();
  
//     expect(
//       screen.getByText((content) => content.trim().includes("(2010)"))
//     ).toBeInTheDocument();
  
//     // 映画データの評価が表示されることを確認
//     expect(
//       screen.getByText((content) => content.trim().includes("評価:"))
//     ).toBeInTheDocument();
  
//     expect(screen.getByText("8.8")).toBeInTheDocument();
  
//     // 映画データのジャンルが表示されることを確認
//     expect(
//       screen.getByText((content) => content.trim().includes("ジャンル: Action, Sci-Fi"))
//     ).toBeInTheDocument();
  
//     // 映画データのランタイムが表示されることを確認
//     expect(
//       screen.getByText((content) => content.trim().includes("ランタイム: 148分"))
//     ).toBeInTheDocument();
  
//     // 映画データのストーリーが表示されることを確認
//     expect(
//       screen.getByText((content) =>
//         content.trim().includes("ストーリー: A thief who steals corporate secrets...")
//       )
//     ).toBeInTheDocument();
//   });
// });

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve([
//         {
//           id: 1,
//           title: "Test News 1",
//           user: "user1",
//           url: "https://example.com/test-news-1",
//         },
//         {
//           id: 2,
//           title: "Test News 2",
//           user: "user2",
//           url: "https://example.com/test-news-2",
//         },
//       ]),
//   })
// );

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