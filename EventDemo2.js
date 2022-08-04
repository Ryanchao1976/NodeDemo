var events = require('events');
var eventEmitter = new events.EventEmitter();

// 監聽器 #1
var listener1 = function listener1() {
    console.log('監聽器 listener1 執行。');
}

// 監聽器 #2
var listener2 = function listener2() {
    console.log('監聽器 listener2 執行。');
}

// 綁定 connection 事件，處理函數為 listener1 
eventEmitter.addListener('connection', listener1);

// 綁定 connection 事件，處理函數為 listener2
eventEmitter.on('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 個監聽器監聽連接事件。");

// 處理 connection 事件 
eventEmitter.emit('connection');

// 移除監綁定的 listener1 函數
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受監聽。");

// 觸發連接事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 個監聽器監聽連接事件。");

console.log("程序執行完畢。");
events = require('events');
var eventEmitter = new events.EventEmitter();

// 監聽器 #1
var listener1 = function listener1() {
    console.log('監聽器 listener1 執行。');
}

// 監聽器 #2
var listener2 = function listener2() {
    console.log('監聽器 listener2 執行。');
}

// 綁定 connection 事件，處理函數為 listener1 
eventEmitter.addListener('connection', listener1);

// 綁定 connection 事件，處理函數為 listener2
eventEmitter.on('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 個監聽器監聽連接事件。");

// 處理 connection 事件 
eventEmitter.emit('connection');

// 移除監綁定的 listener1 函數
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受監聽。");

// 觸發連接事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 個監聽器監聽連接事件。");

console.log("程序執行完畢。");