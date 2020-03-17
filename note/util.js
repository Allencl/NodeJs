// util 模块 提供了 一些nodeJS 的公共方法

// 1 继承函数 util.inherits(Person,newFunc)
const util = require('util');
const events = require('events');

let Person = function(name){
    this.name = name;
}

let child = new Person('Allen');
util.inherits(Person,events.EventEmitter);

child.on("click",(mes)=>{
    console.log(mes);
});

// 运行 node util.js
// child.emit("click","运行 node util.js");