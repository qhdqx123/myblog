const sidebar = require('./config/sidebar/')
module.exports = {
    title: '小红的博客',
    description: '自己的博客',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Github', link: 'https://github.com/qhdqx123' },
        ],
        sidebarDepth: 2,
        sidebar
    }
}
