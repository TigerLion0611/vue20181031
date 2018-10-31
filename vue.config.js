module.exports = {
        devServer: {
            proxy: {
                '/ylbt': {
                    target: 'http://localhost:8989',
                    pathRewrite: {
                        '^/ylbt': '',     // rewrite path
                    },
                    ws: true,
                    changeOrigin: true
                }
            }
        }
}