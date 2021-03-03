/*
 * @Author: wangxiang
 * @Date: 2021-01-05 18:11:39
 * @LastEditTime: 2021-01-06 14:54:32
 * @LastEditors: wangxiang
 * @Description: 数组应用
 * @FilePath: \ready\04_数据结构和算法\01_array_use.js
 */

//  给定一个整数数组 nums 和一个目标值 target，
// 请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 1、所有求和问题都可以转成求差问题 2、空间换时间
function twoSums(nums, target) {
  const diffs = {}; // 模拟map
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (diffs[target - element] !== undefined) {
      return [diffs[target - element], i];
    }
    diffs[element] = i;
  }
}

console.log(twoSums([2, 8, 11, 15, 7], 9));

// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
function merge(nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;

  while (i > -1 && j > -1) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }

  while (j > -1) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }

  return nums1;
}

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [4, 5, 6];
console.log(merge(nums1, 3, nums2, 3));

// 给你一个包含 n 个整数的数组 nums，
// 判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
function threeSums(nums) {
  // 排序
  nums = nums.sort((a, b) => a - b);

  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    let before = i + 1;
    let after = nums.length - 1;

    while (after > before) {
      if (nums[after] + nums[before] + element > 0) {
        after--;
      } else if (nums[after] + nums[before] + element < 0) {
        before++;
      } else {
        res.push([element, nums[before], nums[after]]);
        break
      }
    }
  }

  return res
}

console.log(threeSums([-1, 0, 1, 2, -1, -4]));
