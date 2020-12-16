/*
 * @Author: wangxiang
 * @Date: 2020-11-10 14:22:52
 * @LastEditTime: 2020-11-10 16:19:50
 * @LastEditors: wangxiang
 * @Description: 二叉树编码实现
 * @FilePath: \ready\04_数据结构和算法\06_二叉树.js
 */
function TreeNode(val){
  this.val = val;
  this.left = this.right = null;
}

// 新建一个二叉树节点
const node = new TreeNode(1);

/**
 *  二叉树遍历
 * 按照顺序规则的不同，遍历方式有以下四种：
 * 1、先序遍历  根节点 -> 左子树 -> 右子树
 * 2、中序遍历  左子树 -> 根节点 -> 右子树
 * 3、后序遍历  左子树 -> 右子树 -> 根节点
 * 4、层次遍历
 * 按照实现方式不同，比遍历方式分为两种：
 * 1、递归遍历（先、中、后序遍历）
 * 2、迭代遍历（层次遍历）
 */
 const nodeA = new TreeNode('A');
 const nodeB = new TreeNode('B');
 const nodeC = new TreeNode('C');
 nodeB.left = new TreeNode('D');
 nodeB.right = new TreeNode('E');
 nodeC.left = new TreeNode('F');
 nodeC.right = new TreeNode('G');
 nodeA.left = nodeB;
 nodeA.right = nodeC;

/** 
 * 递归函数编写要点：
 * 1、递归式
 * 2、递归边界（什么时候停下来，编码对应一个return语句）
 **/

 //先序遍历
 function preorder(root) {
   // 递归边界，root 为空
   if(!root){
    return
   }

   // 输出当前遍历的结点值
   console.log('先序遍历 当前遍历的结点值是：', root.val)  

   // 遍历左子树
   preorder(root.left);
   // 遍历右子树
   preorder(root.right);
 }

//  preorder(nodeA);

 // 中序遍历
 function inorder(root) {
    // 递归边界，root 为空
    if(!root){
      return
    }
    inorder(root.left)
     // 输出当前遍历的结点值
     console.log('中序遍历 当前遍历的结点值是：', root.val)  
    inorder(root.right)
 }

 inorder(nodeA);

 // 后序遍历
 function postorder(root) {
   // 递归边界，root 为空
   if(!root){
    return
  }
  postorder(root.left);
  postorder(root.right);
  console.log('后序遍历 当前遍历的结点值是：', root.val);
 }
//  postorder(nodeA) 