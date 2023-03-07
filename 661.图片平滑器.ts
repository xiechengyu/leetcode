/*
 * @lc app=leetcode.cn id=661 lang=typescript
 *
 * [661] 图片平滑器
 */

// @lc code=start
function imageSmoother(img: number[][]): number[][] {
  const res:number[][] = [];
  let r = img.length,
    c = img[0].length;
  for (let i = 0; i < r; i++) {
    res.push([])
    for (let j = 0; j < c; j++) {
      let sum = img[i][j];
      let cnt = 1;
      if (i > 0) (sum += img[i - 1][j]), cnt++;
      if (i < r - 1) (sum += img[i + 1][j]), cnt++;
      if (j > 0) (sum += img[i][j - 1]), cnt++;
      if (j < c - 1) (sum += img[i][j + 1]), cnt++;
      if (i > 0 && j > 0) (sum += img[i - 1][j - 1]), cnt++;
      if (i > 0 && j < c - 1) (sum += img[i - 1][j + 1]), cnt++;
      if (i < r - 1 && j > 0) (sum += img[i + 1][j - 1]), cnt++;
      if (i < r - 1 && j < c - 1) (sum += img[i + 1][j + 1]), cnt++;
      res[i].push(Math.floor(sum / cnt))
    }
  }
  return res;
}
// @lc code=end
