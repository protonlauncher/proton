const merge = require('webpack-merge');

module.exports = merge.smart(require('./webpack.render.config'), {
    mode: 'production'
});