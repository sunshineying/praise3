import Koa from 'koa';
import router from 'koa-simple-router';
import co from 'co';
import render from 'koa-swig';
import serve from 'koa-static';
import babel_co from 'babel-core/register';  // 这两个需要引入，否则async编译出错
import babel_po from 'babel-polyfill';  // 
import controller from './controller/controller';
import CONFIG from './config/config';


const app = new Koa();

controller.init(app, router);

app.context.render = co.wrap(render({
    root: CONFIG.get('viewDir'),
    autoescape: true,
    cache: 'memory',
    ext: 'html'
}));


// 静态资源文件
app.use(serve(CONFIG.get('staticDir')));


app.listen(CONFIG.get('port'));

export default app;