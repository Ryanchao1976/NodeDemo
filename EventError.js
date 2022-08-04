/**
 *  EventEmitter 定義了一個特殊的事件 error，它包含了錯誤的語義，我們在遇到 異常的時候通常會觸發 error 事件。    
    當 error 被觸發時，EventEmitter 規定如果沒有響 應的監聽器，Node.js 會把它當作異常，退出程序並輸出錯誤信息。
    我們一般要為會觸發 error 事件的對象設置監聽器，避免遇到錯誤後整個程序崩潰
 */

var events = require('events'); 

var emitter = new events.EventEmitter(); 

emitter.on('error', function(error){
    console.log("Caught error: " + error);
});


emitter.emit('error'); 


