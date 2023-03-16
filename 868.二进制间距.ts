/*
 * @lc app=leetcode.cn id=868 lang=typescript
 *
 * [868] 二进制间距
 */

// @lc code=start
// function binaryGap(n: number): number {
//   const s = n.toString(2),
//     arr: number[] = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "1") arr.push(i);
//   }
//   if (arr.length < 2) return 0;
//   let max = 0;
//   for (let i = 1; i < arr.length; i++) {
//     max = Math.max(max, arr[i] - arr[i - 1]);
//   }
//   return max;
// }

function binaryGap(n: number): number {
  const s = n.toString(2),
    arr: number[] = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      const last = arr.shift();
      if (last || last === 0) max = Math.max(max, i - last);
      arr.push(i);
    }
  }
  return max;
}
// @lc code=end
