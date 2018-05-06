import praiseController from './praiseController';

const controller = {
    init(app, router) {
        app.use(router(_ => {
            _.get('/index/index', praiseController.praise())
            _.get('/index/update', praiseController.update())
        }))
    }
}

export default controller;