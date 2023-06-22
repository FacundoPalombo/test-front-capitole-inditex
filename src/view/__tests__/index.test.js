import ReactDOM from "react-dom";

jest.mock("react-dom", () => ({ render: jest.fn() }));
jest.mock("../components/App", () => () => "MyComponent");

import "../index";

describe("root render unit test", () => {
  afterAll(jest.clearAllMocks);

  it("should call react-dom correctly", () => {
    expect(ReactDOM.render).toHaveBeenCalledTimes(1);
  });
});
