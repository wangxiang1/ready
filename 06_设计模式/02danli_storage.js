/*
 * @Author: wangxiang
 * @Date: 2020-12-15 09:54:46
 * @LastEditTime: 2020-12-15 10:22:35
 * @LastEditors: wangxiang
 * @Description: 实现Storage
 * @FilePath: \ready\06_设计模式\02danli_storage.js
 */

/**
 * 静态方法版
 */
class Storage {
  static getInstance() {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }

    return Storage.instance;
  }

  getItem(key) {
    return localStorage.getItem(key);
  }

  setItem(key, value) {
    return localStorage.setItem(key, value);
  }
}

/**
 * 闭包版
 */
function StorageBase() {}
StorageBase.prototype.getItem = function(key) {
  return localStorage.getItem(key);
};
StorageBase.prototype.setItem = function(key, value) {
  return localStorage.setItem(key, value);
};

const Storage1 = (function () {
  let instance = null

  return function () {
    if (!instance) {
      instance = new StorageBase();
    }
    return instance
  }
})();

const con1 = new Storage1()
const con2 = new Storage1()
con1.setItem('name', 'wangxiang')
console.log(con1.getItem('name'), con2.getItem('name'));