/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.trim() === "") return true
    s = (s.match(/[0-9a-z]/ig) || []).map(i => i.toLocaleLowerCase())
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - i - 1]) return false
    }
    return true
};
// @lc code=end

