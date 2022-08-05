# Node Demo Project

## EventEmitter

## Module
* 一個 Node.js 文件就是一個模塊，這個文件可能是JavaScript 代碼、JSON 或者編譯過的C/C++ 擴展
* exports 是模塊公開的接口
  * 如果要對外暴露屬性或方法，就用 exports 就行，要暴露對象(類似class，包含了很多屬性和方法)，就用 module.exports
  * 不建議同時使用 exports 和 module.exports
* require 用於從外部獲取一個模塊的接口
  * require 方法中的文件查找策略
    * 文件模塊
    * 原生模塊


## Node.js 全局對象
* __filename 
  * 表示當前正在執行的腳本的文件名。它將輸出文件所在位置的絕對路徑，且和命令行參數所指定的文件名不一定相同。 如果在模塊中，返回的值是模塊文件的路徑
* __dirname
  * 當前執行腳本所在的目錄
* setTimeout(cb, ms)
  * 在指定的毫秒(ms)數後執行指定函數(cb)
  * 只執行一次指定函數
  * 返回一個代表定時器的句柄值
* clearTimeout(t)
  * 用於停止一個之前通過 setTimeout() 創建的定時器
* setInterval(cb, ms)
  * 會不停地調用函數，直到 clearInterval() 被調用或窗口被關閉
* console
  * console.log/info/error/warn([data][, ...])
  * console.dir(obj[, options])
    * 用來對一個對象進行檢查（inspect），並以易於閱讀和打印的格式顯示
  * console.time(label)
    * 輸出時間，表示計時開始
  * console.timeEnd(label)
    * 結束時間，表示計時結束
  * console.trace(message[, ...])
  * console.assert(value[, message][, ...])
    * 只有當第一個參數為false，才會輸出第二個參數，否則不會有任何結果
  * process
    * 描述當前Node.js 進程狀態的對象，提供了一個與*操作系統*的簡單接口

## child_process
* child_process.exec 使用子進程執行命令，緩存子進程的輸出，並將子進程的輸出以回調函數參數的形式返回
* child_process.spawn 使用指定的命令行參數創建新進程
* child_process.fork 是 spawn()的特殊形式，用於在子進程中運行的模塊，如 fork('./son.js') 相當於 spawn('node', ['./son.js']) 。與spawn方法不同的是，fork會在父進程與子進程之間，建立一個*通信管道*，用於進程之間的通信

## Node.js 工具模塊
* Node.js OS 
* Node.js Path
  * path.resolve([from ...], to)
    * 將 to 參數解析為絕對路徑，給定的路徑的序列是從右往左被處理的，後面每個 path 被依次解析，直到構造完成一個絕對路徑
* Node.js Net
* Node.js DNS
* Node.js Domain(Deprecated)
  * domain模塊，把處理多個不同的IO的操作作為一個組。注冊事件和回調到domain，當發生一個錯誤事件或拋出一個錯誤時，domain對象會被通知，不會丟失上下文環境，也不導致程序錯誤立即退出，與process.on('uncaughtException')不同
    * 隱式綁定: 把在domain上下文中定義的變量，自動綁定到domain對象
    * 顯式綁定: 把不是在domain上下文中定義的變量，以代碼的方式綁定到domain對象

  