/**
 * @description 队列
 * enqueue // 队尾 添加
 * dequeue // 队头 删除
 * head // 查看头部元素 不删除
 * tail // 查看队尾元素 不删除
 * size // 队列大小
 * clear // 清空队列
 * isEmpty // 判断队列是否为空
 * toString // 返回队列中所有的元素
 */
class Queue {
    constructor() {
        this.items = [];
        this.count = 0; //队列大小
    }

    // 入队 队尾添加
    enqueue(value) {
        this.count++;
        this.items.push(value);
    }

    // 出队 删除 队首 元素
    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    // 查看队头元素
    head() {
        return this.items[0]
    }

    // 查看队尾元素
    tail() {
        return this.items[this.count - 1];
    };

    // 队列大小
    size() {
        return this.items.length;
    }

    // 清空队列
    clear() {
        this.items = [];
    };

    // 空队列检测
    isEmpty() {
        return this.items.length === 0
    }

    // 返回队列中所有的元素
    toString() {
        return this.items.toString()
    }
}


/**
 * 约瑟夫环
 * @param arr
 * @returns {*}
 */
function delRing(arr) {
    let queue = new Queue();
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        queue.enqueue(arr[i]);
    }
    while (queue.size() !== 1) {
        let dequeueItem = queue.dequeue();
        index++;
        if (index % 3 !== 0) {
            queue.enqueue(dequeueItem);
        }

    }
    return queue.head();
}
// 约瑟夫环实践
function passGame(nameList, number) {
    // 创建一个队列
    const queue = new Queue()

    // 将所有人放入到队列中
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }

    // 当只有一个人的时候终止游戏
    while (queue.size() > 1) {
        for (let i = 0; i < number - 1; i++) {
            //  把队列的第一个人放入到队尾
            queue.enqueue(queue.dequeue())
        }
        // 直接从队列中删除number对应的这个人，
        queue.dequeue()
    }

    return {
        name: queue.head(),                        //    最终获胜的人
        num: nameList.indexOf(queue.head()) + 1    //    最终获胜人在原来队伍中的第几个
    }
}

const stus = ['胡一菲', '曾小贤', '吕子乔', '陈美嘉', '关谷神奇', '唐悠悠', '陆展博', '林宛瑜', '张伟', '诸葛大力', '咖喱酱', '赵海棠']

const result = passGame(['胡一菲', '曾小贤', '吕子乔'], 3)
console.log(result)


/**
 * 斐波拉契数
 * @param n
 * @returns {*}
 */
function fibonacciToQueen(n) {
    let queue = new Queue();
    let index = 0;
    queue.enqueue(1);
    queue.enqueue(1);
    while (index < n-2) {
        let head_item = queue.dequeue();
        let tail_item = queue.tail();

        let tmp_item = head_item + tail_item;
        queue.enqueue(tmp_item);
        index++;
    }
    queue.dequeue();
    return queue.head();
}
