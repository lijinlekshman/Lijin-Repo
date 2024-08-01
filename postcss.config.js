const autoprefixer = require("autoprefixer")

module.exports = {
    _plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
    get plugins() {
        return this._plugins
    },
    set plugins(value) {
        this._plugins = value
    },
}