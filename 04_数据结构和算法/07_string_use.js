/*
 * @Author: wangxiang
 * @Date: 2021-01-06 15:04:11
 * @LastEditTime: 2021-01-12 17:51:03
 * @LastEditors: wangxiang
 * @Description: 字符串
 * @FilePath: \ready\04_数据结构和算法\07_string_use.js
 */
// 翻转字符串
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

console.log(reverseString("wangxiang"));

// 判断回文字符串1
// 思路：翻转后的字符串和原字符串对比
function isPalindrome(str) {
  const reversedStr = str
    .split("")
    .reverse()
    .join(""); // 先翻转
  return reversedStr === str;
}

console.log(isPalindrome("yessey"));

// 判断回文字符串2
// 思路：如果从中间位置“劈开”，那么两边的两个子串在内容上是完全对称的
function isPalindrome2(str) {
  const length = str.length;
  for (let i = 0; i < length / 2; i++) {
    if (str[i] !== str[length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome2("yewwey"));

// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
function validPalindrome(str) {
  let before = 0,
    after = str.length - 1;

  // 当左右指针满足对称使，一起向中间前进
  while (before < after && str[before] === str[after]) {
    before++;
    after--;
  }

  // 判断跳过左指针后是否回文
  if (isPalindrome(before + 1, after)) {
    return true;
  }

  // 判断跳过右指针以后是否回文
  if (isPalindrome(before, after - 1)) {
    return true;
  }

  return false;
}
