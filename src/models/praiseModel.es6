import rpA from 'request-promise';

class praiseModel{
    constructor(ctx) {
        this.ctx = ctx;
    }

    updateCount() {
        const options = {
            uri: 'http://localhost/task/praise.php',
            method: 'GET'
        };

        return new Promise((resolve, reject) => {
            rpA(options).then(function(result){
                const info = JSON.parse(result);
                if(info) {
                    resolve({data: info.result});
                } else {
                    reject({});
                }
                console.log(info);
            })
        })
    }
}

export default praiseModel;