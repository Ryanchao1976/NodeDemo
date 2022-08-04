// 引入 events 模塊
var events = require('events');
// 創建 eventEmitter 對象
var eventEmitter = new events.EventEmitter();

// 創建事件處理程序
var connectHandler = function connected() {
    console.log('連接成功。');

    // 觸發 data_received 事件 
    eventEmitter.emit('data_received');
}

// 綁定 connection 事件處理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函數綁定 data_received 事件
eventEmitter.on('data_received', function () {
    console.log('數據接收成功。');
});

// 觸發 connection 事件 
eventEmitter.emit('connection');

console.log("程序執行完畢。");