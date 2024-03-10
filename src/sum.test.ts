import { describe, expect, test } from "bun:test";
import { sum } from "./sum";

describe("sum", () => {
	test("sum of positive numbers", () => {
		expect(sum(1, 2)).toBe(3); // Should succeed
		expect(sum(5, 10)).toBe(15); // Should succeed
	});

	test("sum of negative numbers", () => {
		expect(sum(-1, -2)).toBe(-3); // Should succeed
		expect(sum(-5, -10)).toBe(-15); // Should succeed
	});

	test("sum of positive and negative numbers", () => {
		expect(sum(1, -2)).toBe(-1); // Should succeed
		expect(sum(-5, 10)).toBe(5); // Should succeed
	});

	test("sum of zero and a number", () => {
		expect(sum(0, 5)).toBe(5); // Should succeed
		expect(sum(0, -10)).toBe(-10); // Should succeed
	});

	test("sum of zero and zero", () => {
		expect(sum(0, 0)).toBe(0); // Should succeed
	});
});
