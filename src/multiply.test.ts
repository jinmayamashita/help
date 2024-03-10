import { describe, expect, test } from "bun:test";
import { multiply } from "./multiply";

describe("multiply", () => {
  test("multiplies two numbers correctly", () => {
    expect(multiply(5, 3)).toBe(15);
    expect(multiply(0, 3)).toBe(0);
    expect(multiply(-2, 3)).toBe(-6);
  });
});
