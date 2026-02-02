# Scrabble

Vanier College study project for **Web Interface Programming 1**.

Scrabble is a command-line helper program for playing Scrabble, built with **Deno** and **TypeScript**. The program computes Scrabble word scores based on standard letter values and can either calculate the total score of multiple words or determine which word has the highest value.

This project focuses on command-line argument handling, clean program structure, and basic algorithm design using TypeScript in a CLI environment.

---

## Features

- Compute the **total Scrabble score** of a list of words
- Determine the **highest-value word** from a list
- Case-insensitive input handling
- Word validation using a predefined dictionary
- Clear CLI output using `console.log`

---

## Letter Values

Scrabble letter values used in this program:

| Letters               | Value |
|-----------------------|-------|
| a e i o u l n r s t   | 1     |
| d g                   | 2     |
| b c m p               | 3     |
| f h v w y             | 4     |
| k                     | 5     |
| j x                   | 8     |
| q z                   | 10    |

---

## Requirements

- [Deno](https://deno.land/) installed on your system
- TypeScript support (included with Deno)

---

## Usage

Run the program using `deno run` and pass command-line arguments.
Mode: 
- total: Calculates the total score of the words.
- highest: Calculates the highest scored word of the list of words.

```bash
deno run scrabble.ts <mode> <word1> <word2> ...

