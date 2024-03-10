import { describe, expect, test } from "bun:test";
import { greeting } from "./greeting";

describe("greeting", () => {
  test("should return a greeting message with the provided name", () => {
    const name = "John";
    const result = greeting(name);
    expect(result).toBe("Hello, John!");
  });

  test("should return a default greeting message when no name is provided", () => {
    const result = greeting("");
    expect(result).toBe("Hello, Stranger!");
  });
});
