/*
  高阶函数： 1. 函数的参数是函数 2. 函数返回值是一个参数
*/

// before 函数

function say(who) {
  console.log(who + ' say: Hi, Tom')
}

Function.prototype.before = function (beforeFun) {
  return (...args) => {
    beforeFun();
    this(...args)
  }
}

Function.prototype.after = function (afterFun) {
  return (...args) => {
    this(...args)
    afterFun();

  }
}

let beforeSay = say.before(() => {
  console.log("请开始你的表演。。。")
})

let afterSay = say.after(() => {
  console.log("game over")
})


beforeSay('Jerry');

afterSay('Tom')