// Your tests here
import { isPalindrome } from "../utils.js";

describe("isPalindrome", () => {
  // Test case 1: True palindromes should return true
  test("returns true for palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("level")).toBe(true);
    expect(isPalindrome("madam")).toBe(true);
  });

  // Test case 2: Non-palindromes should return false
  test("returns false for non-palindromes", () => {
    expect(isPalindrome("car")).toBe(false);
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
  });

  // Test case 3: Case insensitivity - mixed case words should work
  test("ignores case when checking palindromes", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
    expect(isPalindrome("Madam")).toBe(true);
    expect(isPalindrome("LevEl")).toBe(true);
  });

  // Test case 4: Empty string should return false
  test("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  // Bonus test case 5: Non-alphabetic characters should throw an error
  test("throws an error for inputs with non-alphabetic characters", () => {
    expect(() => isPalindrome("race2car")).toThrow();
    expect(() => isPalindrome("hello!")).toThrow();
    expect(() => isPalindrome("12321")).toThrow();
  });

  // Bonus test case 6: Non-string inputs should throw an error
  test("throws an error for non-string inputs", () => {
    expect(() => isPalindrome(123)).toThrow();
    expect(() => isPalindrome(null)).toThrow();
    expect(() => isPalindrome(undefined)).toThrow();
    expect(() => isPalindrome({})).toThrow();
    expect(() => isPalindrome([])).toThrow();
  });
});