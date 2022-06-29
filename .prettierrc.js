// module.exports = require('@umijs/fabric').prettier;
// 通过引用路径可以找到@umijs/fabric下的prettier配置，配置如下
"use strict";
/** @format */
module.exports = {
    singleQuote: true, // 单引号
    trailingComma: 'all', // 对象{}的最后一个属性是否加,
    printWidth: 100, // 每行超过100个字符换行
    proseWrap: 'never', // 不强制换行
    endOfLine: 'lf', // 以lf为换行符，常见的还有cr，cflf
    overrides: [
        {
            files: '.prettierrc',
            options: {
                parser: 'json',
            },
        },
        {
            files: 'document.ejs',
            options: {
                parser: 'html',
            },
        },
    ],
};

// // 常见的prettier配置还有
// "semi": false, // 是否有分号
// "bracketSpacing": true, // 在对象中{a: 1},是否答应空格如果是{ a: 1 }
// "arrowParens": "always" // 设置箭头函数中的参数是否包裹()