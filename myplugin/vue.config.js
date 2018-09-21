module.exports = {	
    devServer: { //设置API请求地址代理前后端不再同服务器时候，跨域
        proxy: {
            '/api': { //一定要命名为API名字，因为实际地址有api
                target: 'https://www.sojson.com', //好像我猜測這個一定404
                ws: true,
                changeOrigin: true,
            }
        }
    }
}