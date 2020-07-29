import { isString } from "../src/lang";

describe("lang package", () => {
  it("isString", () => {
    expect(isString(null)).toBe(false);

    expect(isString(undefined)).toBe(false);

    expect(isString({})).toBe(false);

    expect(isString(1)).toBe(false);

    expect(isString(true)).toBe(false);

    expect(isString(Symbol())).toBe(false);

    expect(isString("")).toBe(true);

    expect(isString("hello world")).toBe(true);
  });
});
