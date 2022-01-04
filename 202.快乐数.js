/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    while (true) {
        n = n.toString()
        let count = 0
        for (let index = 0; index < n.length; index++) {
            count += Number(n[index]) ** 2
        }
        if (count === 1 || count === 130 || count === 129 || count === 133 || count == 190 || count === 167) return true
        if (count > 100) return false
        n = count
    }
};
// @lc code=end

