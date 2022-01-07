/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 可以被一步捕获的棋子数
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
