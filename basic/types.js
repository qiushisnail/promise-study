function isType(type) { // 变量私有化
  return (content) => {
    return Object.prototype.toString.call(content) === `[object ${type}]`
  }
}

let types = ['String', 'Number', 'Boolean', 'Null', 'Undefined']
let Utils = {}
types.forEach(type => {
  Utils['is' + type] = isType(type) // 参数预制 和 bind一样
})

let flag = Utils.isNull('null')

console.log(flag)