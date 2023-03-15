/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 */

// @lc code=start
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const arr: any[] = [],
    l = image[sr][sc];
  if (l === color) return image;
  arr.push({ sr, sc });
  image[sr][sc] = color;
  while (arr.length > 0) {
    const node = arr.shift();
    if (image[node.sr][node.sc - 1] === l) {
      image[node.sr][node.sc - 1] = color;
      arr.push({ sr: node.sr, sc: node.sc - 1 });
    }
    if (image[node.sr][node.sc + 1] === l) {
      image[node.sr][node.sc + 1] = color;
      arr.push({ sr: node.sr, sc: node.sc + 1 });
    }
    if (image[node.sr - 1] && image[node.sr - 1][node.sc] === l) {
      image[node.sr - 1][node.sc] = color;
      arr.push({ sr: node.sr - 1, sc: node.sc });
    }
    if (image[node.sr + 1] && image[node.sr + 1][node.sc] === l) {
      image[node.sr + 1][node.sc] = color;
      arr.push({ sr: node.sr + 1, sc: node.sc });
    }
  }
  return image;
}
// @lc code=end
