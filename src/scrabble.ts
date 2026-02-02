import { validWords } from "./words.ts";

function main(
    words: string[],
): void | null {
    if (words.length === 0) {
        console.log("Invalid Input.");
        return;
    }
    if (isItIncluded(words.slice(1)) === false) {
        console.log("Your words are not included in validWords");
        return;
    }
    const mode = words[0].toLowerCase();

    switch (mode) {
        case "total":
            console.log(totalScore(words.slice(1)));
            break;
        case "highest":
            console.log(compareValue(words.slice(1)));
            break;
        default:
            console.log("Invalid Input");
            break;
    }
}

export function isItIncluded(words: string[]): boolean {
    for (let word of words) {
        word = word.toUpperCase();
        if (!validWords.includes(word)) return false;
    }
    return true;
}

export function score(word: string): number {
    const onePoint = [
        "a",
        "e",
        "i",
        "o",
        "u",
        "l",
        "n",
        "r",
        "s",
        "t",
    ];
    const twoPoints = ["d", "g"];
    const threePoints = ["b", "c", "m", "p"];
    const fourPoints = ["f", "h", "v", "w", "y"];
    const fivePoints = ["k"];
    const eightPoints = ["j", "x"];
    const tenPoints = ["q", "z"];

    let score = 0;

    for (const letter of word.toLowerCase()) {
        if (onePoint.includes(letter)) score++;
        else if (twoPoints.includes(letter)) score = score + 2;
        else if (threePoints.includes(letter)) score = score + 3;
        else if (fourPoints.includes(letter)) score = score + 4;
        else if (fivePoints.includes(letter)) score = score + 5;
        else if (eightPoints.includes(letter)) score = score + 8;
        else if (tenPoints.includes(letter)) score = score + 10;
    }

    return score;
}

export function totalScore(words: string[]): number {
    let totalScore = 0;
    for (const word of words) {
        totalScore = totalScore + score(word);
    }
    return totalScore;
}

export function compareValue(words: string[]): string {
    if (words.length === 0) return "No Words to Compare";

    let highestScore = 0;
    let highest = words[0];
    for (let i = 0; i < words.length; i++) {
        const currentScore = score(words[i]);
        if (currentScore > highestScore) {
            highestScore = currentScore;
            highest = words[i];
        }
    }
    return highest;
}

if (Deno.args[0]) main(Deno.args);
else console.log("Invalid Input");
