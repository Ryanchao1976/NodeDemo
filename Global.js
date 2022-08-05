process.on('exit', function (code) {

    // 以下代碼永遠不會執行
    setTimeout(function () {
        console.log("該代碼不會執行");
    }, 0);

    console.log('退出碼為:', code);
});

process.on('beforeExit', function (code) {
    console.log('beforeExit:', code);
});

console.log("程序執行結束");

console.log(__filename);

console.log(__dirname);

console.time("開始計時");

console.trace();

console.timeEnd("開始計時");


// 輸出當前目錄
console.log('當前目錄: ' + process.cwd());

// 輸出當前版本
console.log('當前版本: ' + process.version);

// 輸出內存使用情況
console.log(process.memoryUsage());


