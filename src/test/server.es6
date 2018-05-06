import requestsuper from 'supertest';
import app from '../app.js';
//打开端口.端口测试 的时候要把项目关掉，否则会报冲突的错误

function request() {
    return requestsuper(app.listen())
}

describe('测试接口路由', function() {
    it('点赞', function(done) {
        request()
            .get('/index/update')
            .expect(200)
            // 如果使用.end()方法，失败的.expect()断言若将不会抛出
            // 它们会以一个error的形式返回断言到.end()的callback
            .end(function(err, res) {
                if(err) return done(err);
                done();
            })
    });
});