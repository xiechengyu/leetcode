/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

 

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
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

