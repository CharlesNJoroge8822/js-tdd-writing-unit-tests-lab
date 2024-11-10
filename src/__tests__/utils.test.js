import isPalindrome from "../utils";

describe ('isPalindrome', () => {

    it ("return true for 'racecar' ", () => {

        expect (isPalindrome ('racecar')).toBe(true);
    })

    it ("return false for 'car' ", () => {

        expect (isPalindrome ('car')).toBe(false);
    })

    it ("return true for 'Mom' ", () => {

        expect (isPalindrome ('Mom')).toBe(true);
    })

    it ("return false for an empty string ", () => {

        expect (isPalindrome ('')).toBe(false);
    });
});


