/* eslint-disable prettier/prettier */
/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    }
    const first = numbers[0];
    const last = numbers[numbers.length - 1];
    const firstAndLast = [first].concat(last);
    return firstAndLast;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const intArray = numbers.map((num: string): number => {
        const intVal = parseInt(num, 10);
        return isNaN(intVal) ? 0 : intVal;
    });
    return intArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((str) => {
        const numericValue = parseInt(str.replace("$", ""), 10);
        return isNaN(numericValue) ? 0 : numericValue;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((message) => !message.endsWith("?"))
        .map((message) =>
            message.endsWith("!") ? message.toUpperCase() : message
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const fourWords = words.filter((word: string): boolean => word.length < 4);
    return fourWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors == null) {
        return true;
    }
    const allRGB = colors.every(
        (color: string): boolean =>
            color === "red" || color === "green" || color == "blue"
    );
    return allRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends == null || addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce((total, currentVal) => total + currentVal, 0);
    const adds = addends.join("+");
    return `${sum}=${adds}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // if (values == null || values.length === 0) {
    //     return [0];
    // }
    const index = values.findIndex((num: number): boolean => num < 0);
    const array = values.slice(0, index === -1 ? values.length : index);
    const sum = array.reduce(
        (total: number, currentVal: number) => total + currentVal,
        0
    );
    return index === -1
        ? array.concat(sum)
        : array
            .concat(values[index])
            .concat(sum)
            .concat(values.slice(index + 1));
}
