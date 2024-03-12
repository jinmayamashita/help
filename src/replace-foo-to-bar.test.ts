import { describe, expect, test } from "bun:test";
import { replaceFooToBar } from "./replace-foo-to-bar";

describe("replaceFooToBar", () => {
  test("should replace all occurrences of 'foo' with 'bar' in the input string", () => {
    const input = "foo foo foo";
    const expected = "bar bar bar";
    expect(replaceFooToBar(input)).toBe(expected);
  });

  test("should not replace 'foo' if it is not a standalone word", () => {
    const input = "foobar";
    const expected = "foobar";
    expect(replaceFooToBar(input)).toBe(expected);
  });

  test("should return an empty string if the input string is empty", () => {
    const input = "";
    const expected = "";
    expect(replaceFooToBar(input)).toBe(expected);
  });
});
