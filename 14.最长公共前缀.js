/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0]
    let s = ""
    let f = true
    let r = 0
    while (f) {
        if (!strs[0][r]) {
            f = false
            return s
        }
        let l = strs[0][r]
        for (let i = 0; i < strs.length - 1; i++) {
            if (!strs[i][r] || l !== strs[i + 1][r]) {
                f = false
                l = ""
                return s
            }
        }
        s += l
        r++
    }
    return s
};
// @lc code=end

