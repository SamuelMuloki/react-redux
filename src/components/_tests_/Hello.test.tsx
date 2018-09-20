import * as React from "react";
import * as enzyme  from "enzyme";

import Hello from "../Hello";

it("renders the correct text when no enthusiasm level is given", () => {
    const hello = enzyme.shallow(<Hello name = "Samuel" />)
    expect(hello.find(".greeting").text()).toEqual("Hello Samuel!")
})

it("renders the correct text with an explicit enthusiasm level of 1", () => {
    const hello = enzyme.shallow(<Hello name = "Samuel" enthusiasmLevel = {1} />)
    expect(hello.find(".greeting").text()).toEqual("Hello Samuel!")
})

it("renders the correct text with an explicit enthusiasm level of 5", () => {
    const hello = enzyme.shallow(<Hello name = "Samuel" enthusiasmLevel = {5} />)
    expect(hello.find(".greeting").text()).toEqual("Hello Samuel!!!!!")
})

xit("throws when enthiusiasm level is 0", () => {
    expect(() => {
        enzyme.shallow(<Hello name = "Samuel" enthusiasmLevel = {0} />)
    }).toThrow();
})

it("throws when the enthiusiasm level is negative", () => {
    expect(() => {
        enzyme.shallow(<Hello name = "Samuel" enthusiasmLevel = {-1} />)
    }).toThrow();
})
