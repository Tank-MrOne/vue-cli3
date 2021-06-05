let path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: false,  		// 全部关闭（二选一）
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
    },
    // devServer:{
    //     proxy:{
    //         '/api':{
    //             target:"http://182.92.128.115",
    //             changeOrigin:true,
    //         }
    //     }
    // }
}