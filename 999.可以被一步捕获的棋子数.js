/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 可以被一步捕获的棋子数
 * 
 * 在一个 8 x 8 的棋盘上，有一个白色的车（Rook），用字符 'R' 表示。棋盘上还可能存在空方块，白色的象（Bishop）以及黑色的卒（pawn），分别用字符 '.'，'B' 和 'p' 表示。不难看出，大写字符表示的是白棋，小写字符表示的是黑棋。

车按国际象棋中的规则移动。东，西，南，北四个基本方向任选其一，然后一直向选定的方向移动，直到满足下列四个条件之一：

棋手选择主动停下来。
棋子因到达棋盘的边缘而停下。
棋子移动到某一方格来捕获位于该方格上敌方（黑色）的卒，停在该方格内。
车不能进入/越过已经放有其他友方棋子（白色的象）的方格，停在友方棋子前。
你现在可以控制车移动一次，请你统计有多少敌方的卒处于你的捕获范围内（即，可以被一步捕获的棋子数）。

 

示例 1：



输入：[[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
输出：3
解释：
在本例中，车能够捕获所有的卒。
示例 2：



输入：[[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
输出：0
解释：
象阻止了车捕获任何卒。
示例 3：



输入：[[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
输出：3
解释： 
车可以捕获位置 b5，d6 和 f5 的卒。
 


 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let map = new Map([["R", []], ["B", []], ["p", []]])
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] !== ".") map.get(board[i][j]).push([j, i])
    }
  }
  const params = [
    map.get("R")[0][0],
    map.get("R")[0][1],
    map.get("B"),
    map.get("p")
  ]
  return checkEast(...params) + checkNorth(...params) + checkSouth(...params) + checkWest(...params)
};

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} BList
 * @param {number[][]} pList
 * @return {number}
 */
var checkEast = function (x, y, BList, pList) {
  let step = 1
  while (x + step < 8) {
    const flagB = BList.some(item => {
      return (item[1] === y && item[0] === x + step)
    })
    if (flagB) return 0
    const flagp = pList.some(item => {
      return (item[1] === y && item[0] === x + step)
    })
    if (flagp) return 1
    step++
  }
  return 0
}

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} BList
 * @param {number[][]} pList
 * @return {number}
 */
var checkSouth = function (x, y, BList, pList) {
  let step = 1
  while (y + step < 8) {
    const flagB = BList.some(item => {
      return (item[1] === y + step && item[0] === x)
    })
    if (flagB) return 0
    const flagp = pList.some(item => {
      return (item[1] === y + step && item[0] === x)
    })
    if (flagp) return 1
    step++
  }
  return 0
}

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} BList
 * @param {number[][]} pList
 * @return {number}
 */
var checkWest = function (x, y, BList, pList) {
  let step = 1
  while (x - step >= 0) {
    const flagB = BList.some(item => {
      return (item[1] === y && item[0] === x - step)
    })
    if (flagB) return 0
    const flagp = pList.some(item => {
      return (item[1] === y && item[0] === x - step)
    })
    if (flagp) return 1
    step++
  }
  return 0
}

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} BList
 * @param {number[][]} pList
 * @return {number}
 */
var checkNorth = function (x, y, BList, pList) {
  let step = 1
  while (y - step >= 0) {
    const flagB = BList.some(item => {
      return (item[1] === y - step && item[0] === x)
    })
    if (flagB) return 0
    const flagp = pList.some(item => {
      return (item[1] === y - step && item[0] === x)
    })
    if (flagp) return 1
    step++
  }
  return 0
}
// @lc code=end
