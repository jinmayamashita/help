import { describe, expect, test } from "bun:test";
import { cutStringByLength } from "./cut";

describe("cutStringByLength", () => {
  test("should return the original string if length is greater than or equal to the string length", () => {
    const str = "Hello, World!";
    const length = 13;
    expect(cutStringByLength(str, length)).toBe(str);
  });

  test("should return a substring of the original string if length is less than the string length", () => {
    const str = "Hello, World!";
    const length = 5;
    expect(cutStringByLength(str, length)).toBe("Hello");
  });

  test("should return an empty string if length is 0", () => {
    const str = "Hello, World!";
    const length = 0;
    expect(cutStringByLength(str, length)).toBe("");
  });

  test("should return an empty string if the original string is empty", () => {
    const str = "";
    const length = 5;
    expect(cutStringByLength(str, length)).toBe("");
  });
});
