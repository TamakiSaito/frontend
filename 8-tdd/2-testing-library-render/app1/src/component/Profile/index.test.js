/*
  ・testフォルダ階層で -> Profile.spec.js or Profile.test.js でもOK
  ・同じフォルダ階層で -> index.spec.js or index.test.js でもOK
*/

import React from "react";
import { render } from '@testing-library/react'
import Profile from "./index";

// test("<Profile />のレンダリングテスト", () => {

describe("<Profile />のレンダリングテスト", () => {
  it("Snapshot test", () => {
    const utils = render(<Profile username="tmtm" name="Time Me" />)
    expect(utils.container).toMatchSnapshot()
  })
  it("My Profile, username: tmtm, name: Time Meが表示されていること", () => {
    const utils = render(<Profile username="tmtm" name="Time Me" />)
    utils.getByText("tmtm")
    utils.getByText("Time Me")
  })
})