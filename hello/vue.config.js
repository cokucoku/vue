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
        }
    },
    devServer: {//设置API请求地址代理
        proxy: {
            '/api': {
                target: 'https://api.douban.com/v2/movie/top250?count=1',
                ws: true,
                changeOrigin: true
            }
        }
    }

}