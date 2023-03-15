/*
 * @lc app=leetcode.cn id=717 lang=typescript
 *
 * [717] 1 比特与 2 比特字符
 */

// @lc code=start
function isOneBitCharacter(bits: number[]): boolean {
  while (bits.length > 1) {
    if (bits[0] === 1) {
      bits.shift();
    }
    bits.shift();
  }
  return bits.length === 1
}
// @lc code=end
