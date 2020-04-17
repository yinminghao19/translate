exports.translate = function(valInfo, lacc){
    return new Promise((resolve, reject) => {
        var request = require('request');
        valInfo = encodeURIComponent(valInfo);
        request.get({
            url:'http://translate.google.cn/translate_a/single?client=gtx&dt=t&dj=1&ie=UTF-8&sl=auto&tl=' + lacc + '&q='+ valInfo,
            headers: {
                "Accept": "application/json;charset=UTF-8",
                "Content-Type": "application/json;charset=UTF-8",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
            }
        },function(error, response, body) {
            if(response.statusCode === 200){
                resolve(JSON.parse(response.body).sentences[0].trans);
            } else {
                reject('登录失败！');
            }
        });
    });
}