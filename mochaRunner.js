const Mocha = require('mocha');

const mocha = new Mocha({
    reporter: "mochawesome"
});

// 要测试的文件
mocha.addFile("./build/test/server.js");

mocha.run(function() {
    console.log("接口测试完成");
    process.exit();
});