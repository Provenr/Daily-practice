/**
 * 发布订阅模式
 */
class PubSub {
    constructor() {
        // 事件缓存列表
        this.subscribers = {};
    }

    // 订阅
    subscribe(type, callback) {
        // 同一事件放到一个数组队列
        let listeners = (this.subscribers[type] = this.subscribers[type] || []);
        listeners.push(callback);
        //return this;
    }
    // 推送
    publish(type, ...args) {
        let listeners = this.subscribers[type];
        if (!listeners || listeners.length === 0) return;
        listeners.forEach(fn => {
            console.log(this);
            fn.apply(this, args)
        });
        //return this;
    }

    // 取消订阅
    unsubscribe(type, callback) {
        let listeners = this.subscribers[type];
        if (!listeners) return;
        // 如果没有传入具体函数，就取消type对应的所有订阅
        if (!callback) {
            listeners && (listeners.length = 0);
        } else {
            this.subscribers[type] = listeners.filter(fn => fn !== callback);
        }
        //return this;
    }  
}