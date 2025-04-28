// Your code here
/**
 * Checks if a string is a palindrome (reads the same forwards and backwards)
 * @param {string} str - The string to check
 * @returns {boolean} - True if the string is a palindrome, false otherwise
 * @throws {Error} - If the input is not a string or contains non-alphabetic characters
 */
export function isPalindrome(str) {
    // Check if input is a string
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
  
    // Return false for empty string
    if (str === '') {
      return false;
    }
  
    // Check if string contains only alphabetic characters
    if (!/^[A-Za-z]+$/.test(str)) {
      throw new Error('Input must contain only alphabetic characters');
    }
  
    // Convert to lowercase for case-insensitive comparison
    const lowerStr = str.toLowerCase();
    
    // Reverse the string and compare
    const reversedStr = lowerStr.split('').reverse().join('');
    
    // Return true if the string is the same forwards and backwards
    return lowerStr === reversedStr;
  }