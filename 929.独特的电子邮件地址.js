/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  emails = emails.map(item=>{
    const arr = item.split("@")
    arr[0] = arr[0].split("+")[0].replace(/\./g,"")
    return arr.join("@")
  })
  return new Set(emails).size
};
// @lc code=end

