const array = []
const str = Object.prototype.toString.call(array)
console.log(str)

// 返回 [object Array]

// 自定义 Provenr 类
class Provenr {
  // 重写实例的 toString 方法
  toString() {
    return '[object Provenr]'
  }
}
// 重写原型的 toString 方法
Provenr.prototype.toString = function() {
  return '[object Provenr]'
}

const provenr = new Provenr()
const str = Object.prototype.toString.call(provenr)
console.log(str)

// 即使重写实例和原型上的toString方法，结果仍然返回 [object Object]

//toStringTag
class Provenr {
  get [Symbol.toStringTag]() {
    return 'Provenr'
  }
}
console.log(Object.prototype.toString.call(new Provenr()));

// 返回 [object Provenr]