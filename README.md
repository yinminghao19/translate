# 自助翻译功能

## 接口：translate

## 参数：@需要翻译的单词 @想要翻译的的区域文字

### 例
var translate = require('googole-transale');
translate.translate('你好','ja-jp').then((r)=>{
    console.log(r);
});
