/*
 * @Author: wangxiang
 * @Date: 2020-12-17 11:42:52
 * @LastEditTime: 2020-12-17 14:19:52
 * @LastEditors: wangxiang
 * @Description: 代理模式
 * @FilePath: \ready\06_设计模式\05daili_proxy.js
 */

// 普通信息
const baseInfo = ["age", "career"];
// 私密信息
const privateInfo = ["avatar", "phone"];

// 规定礼物的数据结构由type和value组成
const present = {
  type: "巧克力",
  value: 60
};

// 未知妹子
const girl = {
  // 姓名
  name: "小美",
  // 自我介绍
  aboutMe: "...",
  // 年龄
  age: 24,
  // 职业
  career: "teacher",
  // 假头像
  fakeAvatar: "xxxx",
  // 真实头像
  avatar: "xxxx",
  // 手机号
  phone: 123456,
  // 礼物数组
  presents: [present],
  // 拒收50块以下的礼物
  bottomValue: 50,
  // 记录最近一次收到的礼物
  lastPresent: present
};

const user = {
  name: "user1",
  isValidated: true,
  idVIP: false
};

// 中介登场
const userProxy = new Proxy(girl, {
  get: function(girl, key) {
    if (baseInfo.indexOf(key) !== -1 && !user.isValidated) {
      console.log("您还没有完成验证哦");
      return;
    }

    if (user.isValidated && privateInfo.indexOf(key) > -1 && !user.isVIP) {
      console.log("只有VIP才可以查看该信息哦");
      return;
    }

    return girl[key];
  },
  set: function(girl, key, val) {
    // 最近一次送来的礼物会尝试赋值给lastPresent字段
    if (key === "lastPresent") {
      if (val.value < girl.bottomValue) {
        console.log("sorry，您的礼物被拒收了");
        return;
      }
      // 如果没有拒收，则赋值成功，同时并入presents数组
      girl.lastPresent = val;
      girl.presents = [...girl.presents, val];
    }

    return true;
  }
});

console.log(userProxy.name);

userProxy.lastPresent = {
  name: "奶油蛋糕",
  value: 100
};

console.log(userProxy.lastPresent);
console.log(userProxy.presents);
