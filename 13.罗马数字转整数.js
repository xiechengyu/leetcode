/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map1 = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    const map2 = new Map([
        ['IV', 4],
        ['IX', 9],
        ['XL', 40],
        ['XC', 90],
        ['CD', 400],
        ['CM', 900],
    ]);
    let count = 0;
    for (const [key, value] of map2) {
        if (s.includes(key)) {
            s = s.replace(key, '');
            count += value;
        }
    }
    for (let i = 0; i < s.length; i++) {
        count += map1.get(s[i]);
    }
    return count
};
// @lc code=end

