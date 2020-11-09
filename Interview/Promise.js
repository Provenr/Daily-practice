// Promise 对象是由关键字 new 及其构造函数来创建的。
// 该构造函数会把一个叫做“处理器函数”（executor function）的函数作为它的参数。
// 这个“处理器函数”接受两个函数——resolve 和 reject ——作为其参数。
// 当异步任务顺利完成且返回结果值时，会调用 resolve 函数；
// 而当异步任务失败且返回失败原因（通常是一个错误对象）时，会调用reject 函数。
function MyPromise(fn){

    this.state = 'pending';
    this.value = null;

    const self = this;

    // 将pending 状态 改为 onFulfilled
    const resolve = function(value) {
       if (self.state === 'pending') {
          self.state = "onFulfilled";
          self.value = value;
       }
       return self;
    }
    
    // 将pending 状态 改为 onRejected
    const reject = function(value) {
       if (self.state === 'pending') {
          self.state = "onRejected";
          self.value = value;
       }
       return self;
    }
    
    fn(resolve, reject)
}
//解决(fulfillment)和拒绝(rejection) 回调到当前 promise, 返回一个新的promise
MyPromise.prototype.then = function(onFulfilled, onRejected) {
    const self = this;

    // 验证 回调函数，传入的值不是函数
    // 这个一定要这么写目的为了让值传递
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (val) => val;

    // 这个一定要这么写，一定要抛出一个错throw err
    onRejected = typeof onRejected === "function" ? onRejected : (err) => {throw err};

    if (this.state === 'onFulfilled') {
       onFulfilled(self.value)
    }

    if (this.state === 'onRejected') {
       onRejected(self.value)
    }

    // return promise 对象
}

//拒绝(rejection) 回调到当前 promise, 返回一个新的promise
MyPromise.prototype.catch = function(onRejected) {
    const self = this;

    // 这个一定要这么写，一定要抛出一个错throw err
    onRejected = typeof onRejected === "function" ? onRejected : (err) => {throw err};

    if (this.state === 'onRejected') {
       onRejected(self.value)
    }

    // return promise 对象
}

//添加一个事件处理回调于当前promise对象, 无论当前promise的状态是完成(fulfilled)还是失败(rejected),会在当前promise运行完毕后被调用
MyPromise.prototype.finally = function() {
    
}

// promise.all 

//  1、接受一个【数组】 ，数组元素是 【promise】 对象
//  2、所有promise 都是 onFulfilled 才执行 then 回调， 结果顺序和数组的一致
//  3、其中一个 reject 就返回这个值



// Promise.race
//  1、接受一个【数组】 ，数组元素是 【promise】 对象
//  2、只返回最快的那一个 promise 的值
//  3. 有错误也会返回最快那一个 promise 的值
var promise = new MyPromise(function(resolve, reject) {
  if (1){
    resolve('success');
  } else {
    reject('failure');
  }
});

promise.then(function(value) {
  console.log(value)
}, function(error) {
   console.log(error)
})