const Mocha = require('mocha');

const mocha = new Mocha({
    reporter: "mochawesome"
});

// 要测试的文件
mocha.addFile("./test/server.js");

mocha.run(function() {
    console.log("done");
    process.exit();
})