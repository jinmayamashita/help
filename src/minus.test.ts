import { describe, expect, test } from "bun:test";
import { minus } from "./minus";

describe("minus", () => {
	test("subtract of positive numbers", () => {
		expect(minus(5, 2)).toBe(3); // Should succeed
		expect(minus(10, 5)).toBe(5); // Should succeed
	});

	test("subtract of negative numbers", () => {
		expect(minus(-1, -2)).toBe(1); // Should succeed
		expect(minus(-5, -10)).toBe(5); // Should succeed
	});

	test("subtract of positive and negative numbers", () => {
		expect(minus(1, -2)).toBe(3); // Should succeed
		expect(minus(-5, 10)).toBe(-15); // Should succeed
	});

	test("subtract of zero and a number", () => {
		expect(minus(0, 5)).toBe(-5); // Should succeed
		expect(minus(0, -10)).toBe(10); // Should succeed
	});

	test("subtract of zero and zero", () => {
		expect(minus(0, 0)).toBe(0); // Should succeed
	});
});
