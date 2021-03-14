/****** 栈的实现 ******/
function Stack(){
    var items = []; // 存储数组

    // 压栈
    this.push = function(item){
        items.push(item)
    }

    // 出栈
    this.pop = function(){
        return items.pop()
    }

    // 返回栈顶元素
    this.top = function(){
        return items[items.length - 1]
    }

    // 判断栈为空
    this.isEmpty= function () {
        return items.length == 0
    }

    // 栈的大小
    this.size = function (params) {
        return items.length
    }

    // 清空栈
    this.clear = function() {
        items = []
    }
    this.val = function() {
        return items;
    }
}



function MinStack() {
    let dataStack = new Stack(); // 普通栈
    let minStack = new Stack(); // 最小值栈

    // push的时候,两个栈都要操作
    this.push = function (item) {
        // 普通的栈
        dataStack.push(item);// data_stack是常规栈,常规操作即可
        // 专⻔门存储最⼩小值
        // 如果minStack为空,直接放⼊入,如果item⼩小于minStack栈顶元素,放⼊入其中
        // 这样做的⽬目的,是保证minStack的栈顶始终保存栈的最⼩小值
        if (minStack.isEmpty() || item < minStack.top()) {
            minStack.push(item);
        } else {
            // 如果item⼤大于等于栈顶元素,把min_stack的栈顶元素再放⼊入⼀一次
            // min_stack的元素个数要和data_stack 保持⼀一致
            minStack.push(minStack.top());
        }
    };


    // pop的时候,两个栈都pop
    this.pop = function () {
        dataStack.pop();
        minStack.pop();
    };
    // 直接取栈顶的元素
    this.min = function () {
        return minStack.top();
    };
    this.dataVal = function() {
        return dataStack.val();
    }
    this.minVal = function() {
        return minStack.val();
    }

}
var minstack = new MinStack();
minstack.push(3);
minstack.push(6);
minstack.push(8);
console.log(minstack.min());
console.log(minstack.minVal());

minstack.push(2);
console.log(minstack.min());

console.log(minstack.minVal());
