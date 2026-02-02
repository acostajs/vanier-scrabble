import { expect } from "jsr:@std/expect";
import { compareValue, isItIncluded, score, totalScore } from "./scrabble.ts";

Deno.test("Test isItIncluded", () => {
    expect(isItIncluded(["appliance"])).toBe(true);
    expect(isItIncluded(["banana"])).toBe(true);
    expect(isItIncluded(["quetzacoatl"])).toBe(false);
    expect(isItIncluded(["jose"])).toBe(false);
});

Deno.test("Test score", () => {
    expect(score("banana")).toBe(8);
    expect(score("appliance")).toBe(15);
    expect(score("test")).toBe(4);
    expect(score("drive")).toBe(9);
});

Deno.test("Test totalScore", () => {
    expect(totalScore(["appliance", "banana"])).toBe(23);
    expect(totalScore(["test", "drive"])).toBe(13);
});

Deno.test("Test compareValue", () => {
    expect(compareValue(["highest", "appliance", "banana"])).toBe("appliance");
    expect(compareValue(["highest", "test", "drive", "appliance"])).toBe(
        "appliance",
    );
});
