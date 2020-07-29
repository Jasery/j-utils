import { fitStr } from "../src/string";

describe("string package", () => {
  it("fitStr", () => {
    expect(fitStr(null as any, 0)).toBe(null);

    let testStr = "helloworldhelloworld";
    expect(fitStr(testStr, 10)).toBe("helloworld...");
  });
});
