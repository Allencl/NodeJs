// events 模块 模拟JS 事件触发   


// 常规 示例
const events = require('events');          // 引入模块

let EventsEmitter = new events.EventEmitter;   //  监听函数

// 绑定 监听
EventsEmitter.on("click",(mes)=>{
    console.log("click事件："+ mes);
});


// 触发监听 
// EventsEmitter.emit("click","运行 node events.js");

