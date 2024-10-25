/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring (s) {
    let longestSubstring = "";
    let tempString = "";

    s.split('').forEach((char, i) => {
        if (tempString.includes(char)) {
            tempString = tempString.substring(tempString.indexOf(char) + 1);
        }
        tempString += char;
        longestSubstring = tempString.length >= longestSubstring.length ? tempString : longestSubstring;
    })

    return longestSubstring.length;
};