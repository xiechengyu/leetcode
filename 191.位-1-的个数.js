/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0
    n = n.toString(2)
    for (let index = 0; index < n.length; index++) {
        if(n[index]==="1") res ++
    }
    return res
};
// @lc code=end

