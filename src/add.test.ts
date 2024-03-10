import { describe, expect, test } from "bun:test";
import { add } from "./add";

describe("add", () => {
  test("add of positive numbers", () => {
    expect(add(1, 2)).toBe(3); // Should succeed
    expect(add(5, 10)).toBe(15); // Should succeed
  });

  test("add of negative numbers", () => {
    expect(add(-1, -2)).toBe(-3); // Should succeed
    expect(add(-5, -10)).toBe(-15); // Should succeed
  });

  test("add of positive and negative numbers", () => {
    expect(add(1, -2)).toBe(-1); // Should succeed
    expect(add(-5, 10)).toBe(5); // Should succeed
  });

  test("add of zero and a number", () => {
    expect(add(0, 5)).toBe(5); // Should succeed
    expect(add(0, -10)).toBe(-10); // Should succeed
  });

  test("add of zero and zero", () => {
    expect(add(0, 0)).toBe(0); // Should succeed
  });
});
