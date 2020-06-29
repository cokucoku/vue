module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            //chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        about: {
            // page 的入口
            entry: 'src/about.js',
            // 模板来源
            template: 'public/about.html',
            // 在 dist/index.html 的输出
            filename: 'about.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'about Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            //chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        todo: {
            // page 的入口
            entry: 'src/todo.js',
            // 模板来源
            template: 'public/todo.html',
            // 在 dist/index.html 的输出
            filename: 'todo.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'todo Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            //chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        todo2: {
            // page 的入口
            entry: 'src/othertodo.js',
            // 模板来源
            template: 'public/othertodo.html',
            // 在 dist/index.html 的输出
            filename: 'othertodo.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'othertodo Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            //chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        route: {
            // page 的入口
            entry: 'src/route.js',
            // 模板来源
            template: 'public/route.html',
            // 在 dist/index.html 的输出
            filename: 'route.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'route Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            //chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        boots: {
            // page 的入口
            entry: 'src/boots.js',
            // 模板来源
            template: 'public/boots.html',
            // 在 dist/index.html 的输出
            filename: 'boots.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'boots Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            //chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        topmovie: {
            // page 的入口
            entry: 'src/topmovie.js',
            // 模板来源
            template: 'public/topmovie.html',
            // 在 dist/index.html 的输出
            filename: 'topmovie.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'topmovie Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            //chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        fetch: {
            // page 的入口
            entry: 'src/fetch.js',
            // 模板来源
            template: 'public/fetch.html',
            // 在 dist/index.html 的输出
            filename: 'fetch.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'fetch Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            //chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        mytodo: {
            // page 的入口
            entry: 'src/mytodo.js',
            // 模板来源
            template: 'public/mytodo.html',
            // 在 dist/index.html 的输出
            filename: 'mytodo.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'mytodo Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            //chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    devServer: { //设置API请求地址代理前后端不再同服务器时候，跨域
        proxy: {
            '/top250': {
                target: 'https://api.douban.com/v2/movie',
                ws: true,
                changeOrigin: true,

            },
            '/api': {//一定要命名为API名字，因为实际地址有api
                target: 'https://www.sojson.com',//好像我猜測這個一定404
                ws: true,
                changeOrigin: true,
            },
            '/201306': {
                target: 'https://www.zhangxinxu.com/study',//好像我猜測這個一定404
                ws: true,
                changeOrigin: true,
            },
            '/toutiao': {
                target: 'http://v.juhe.cn/',//好像我猜測這個一定404
                ws: true,
                changeOrigin: true,
            }
        }
    }

}