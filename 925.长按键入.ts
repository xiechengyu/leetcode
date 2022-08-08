/*
 * @lc app=leetcode.cn id=925 lang=typescript
 *
 * [925] 长按键入
 * 
 * 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。

你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。

 

示例 1：

输入：name = "alex", typed = "aaleex"
输出：true
解释：'alex' 中的 'a' 和 'e' 被长按。
示例 2：

输入：name = "saeed", typed = "ssaaedd"
输出：false
解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
 
 */

// @lc code=start
function isLongPressedName(name: string, typed: string): boolean {
  let i1 = 0, i2 = 0
  while (i1 < name.length || i2 < typed.length) {
    if (name[i1] === typed[i2]) {
      i1++
      i2++
    } else {
      if (typed[i2] === name[i1 - 1]) i2++
      else return false
    }
  }
  return true
};
// @lc code=end

