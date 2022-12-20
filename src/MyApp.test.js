import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";
let wrapper;
describe("Test", () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test("renders learn react link", () => {
    console.log(wrapper.html());
    console.log(wrapper.find("p").text());
  });
  test("renders learn react link", () => {
    console.log(wrapper.html());
    console.log(wrapper.find("p").text());
    expect(wrapper.find("p").text()).toBe(
      "Edit src/App.js and save to reload."
    );
  });
});
