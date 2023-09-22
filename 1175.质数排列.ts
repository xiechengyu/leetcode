/*
 * @lc app=leetcode.cn id=1175 lang=typescript
 *
 * [1175] 质数排列
 * 
 * 请你帮忙给从 1 到 n 的数设计排列方案，使得所有的「质数」都应该被放在「质数索引」（索引从 1 开始）上；你需要返回可能的方案总数。

让我们一起来回顾一下「质数」：质数一定是大于 1 的，并且不能用两个小于它的正整数的乘积来表示。

由于答案可能会很大，所以请你返回答案 模 mod 10^9 + 7 之后的结果即可。

 

示例 1：

输入：n = 5
输出：12
解释：举个例子，[1,2,5,4,3] 是一个有效的排列，但 [5,2,3,4,1] 不是，因为在第二种情况里质数 5 被错误地放在索引为 1 的位置上。
示例 2：

输入：n = 100
输出：682289015
 
 */

// @lc code=start

const primeArr:number[] = []

const MOD = 10 ** 9 + 7;

function numPrimeArrangements(n: number): number {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) count++;
  }
  let res = 1;
  let m = n - count;
  while (count > 0) {
      res = res % MOD;
      res *= count;
      count--;
  }
  while (m > 0) {
      res = res % MOD;
      res *= m;
      m--;
  }
  return res;
}

function factorial(n: number): number {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res = (res * i) % MOD;
  }
  return res;
}

function isPrime(n: number): boolean {
  if(primeArr.includes(n)) return true
  if (n <= 1) return false;
  if (n <= 3) {
    primeArr.push(n)
    return true;
  };
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  primeArr.push(n);
  return true;
}

// @lc code=end
