import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";
import Count from "../components/Count";
import Movies from "../components/Movies";

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

describe("<Movies />のレンダリングテスト", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            data: {
              movies: [
                {
                  id: 1,
                  title: "Inception",
                  year: 2010,
                  rating: 8.8,
                  gernes: ["Action", "Sci-Fi"],
                  runtime: 148,
                  synopsis: "A thief who steals corporate secrets...",
                  url: "https://example.com/inception",
                  large_cover_image: "https://example.com/inception.jpg",
                },
              ],
            },
          }),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Snapshot test", async () => {
    const { container } = render(<Movies />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    expect(container).toMatchSnapshot();
  });

  it("映画データが正しく表示されること", async () => {
    render(<Movies />);

    // fetchが呼び出されるのを待つ
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    // 映画データのタイトルが表示されることを確認
    expect(screen.getByText("Inception(2010)")).toBeInTheDocument();

    // 映画データの評価が表示されることを確認
    expect(screen.getByText("評価:")).toBeInTheDocument();
    expect(screen.getByText("8.8")).toBeInTheDocument();

    // 映画データのジャンルが表示されることを確認
    expect(screen.getByText("ジャンル:Action, Sci-Fi")).toBeInTheDocument();

    // 映画データのランタイムが表示されることを確認
    expect(screen.getByText("ランタイム:148分")).toBeInTheDocument();

    // 映画データのストーリーが表示されることを確認
    expect(
      screen.getByText("ストーリー:A thief who steals corporate secrets...")
    ).toBeInTheDocument();
  });
});