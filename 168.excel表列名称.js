/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    const map = new Map([[0, "Z"], [1, "A"], [2, "B"], [3, "C"], [4, "D"], [5, "E"], [6, "F"], [7, "G"], [8, "H"], [9, "I"], [10, "J"], [11, "K"], [12, "L"], [13, "M"], [14, "N"], [15, "O"], [16, "P"], [17, "Q"], [18, "R"], [19, "S"], [20, "T"], [21, "U"], [22, "V"], [23, "W"], [24, "X"], [25, "Y"], [26, "Z"]])
    let res = []
    while (columnNumber > 26) {
        res.unshift(map.get(columnNumber % 26))
        columnNumber = Math.ceil(columnNumber / 26 - 1)
    }
    res.unshift(map.get(columnNumber))
    return res.join("")
};
// @lc code=end

