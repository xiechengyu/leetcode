/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] 找到小镇的法官
 * 
 * 小镇里有 n 个人，按从 1 到 n 的顺序编号。传言称，这些人中有一个暗地里是小镇法官。

如果小镇法官真的存在，那么：

小镇法官不会信任任何人。
每个人（除了小镇法官）都信任这位小镇法官。
只有一个人同时满足属性 1 和属性 2 。
给你一个数组 trust ，其中 trust[i] = [ai, bi] 表示编号为 ai 的人信任编号为 bi 的人。

如果小镇法官存在并且可以确定他的身份，请返回该法官的编号；否则，返回 -1 。

 

示例 1：

输入：n = 2, trust = [[1,2]]
输出：2
示例 2：

输入：n = 3, trust = [[1,3],[2,3]]
输出：3
示例 3：

输入：n = 3, trust = [[1,3],[2,3],[3,1]]
输出：-1
 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if (trust.length === 0) {
    if (n === 1) return 1
    else return -1
  }
  const map = new Map(), map2 = new Map(trust)
  let max = trust[0][1]
  for (let i = 0; i < trust.length; i++) {
    if (!map.has(trust[i][1])) {
      map.set(trust[i][1], [trust[i][0]])
    } else {
      map.get(trust[i][1]).push(trust[i][0])
    }
    if (map.get(trust[i][1]).length > map.get(max).length) max = trust[i][1]
  }
  if (map2.get(max)) return -1
  return map.get(max).length === n - 1 ? max : -1
};
// @lc code=end