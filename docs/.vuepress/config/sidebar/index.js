//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title: '前端 Front-end',
            collapsable: true,
            children: [
                'front-end/promise'
            ]
        },
        {
            title: '随笔 Essay',
            collapsable: true,
            children: [
                'essay/200601'
            ]
        }

    ]
}