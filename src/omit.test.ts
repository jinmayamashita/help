import { describe, expect, test } from "bun:test";
import { omit } from "./omit";

describe("omit", () => {
	test("Object with undefined values should have those keys omitted", () => {
		const input = { key1: "value1", key2: undefined, key3: "value3" };
		const expected = { key1: "value1", key3: "value3" };
		const result = omit(input);
		expect(result).toEqual(expected);
	});

	test("Object with a mix of values should have undefined and defined keys preserved", () => {
		const input = { a: 1, b: undefined, c: null, d: "value" };
		const expected = { a: 1, c: null, d: "value" };
		const result = omit(input);
		expect(result).toEqual(expected);
	});

	test("Object with only undefined values should be converted to an empty object", () => {
		const input = { x: undefined, y: undefined, z: undefined };
		const expected = {};
		const result = omit(input);
		expect(result).toEqual(expected);
	});
});
