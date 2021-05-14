const leftbar = [
    { tag: '热门', url: '/' },
    { tag: '头条', url: '/' },
    { tag: '视频', url: '/' },
    { tag: '榜单', url: '/' },
    { tag: '搞笑', url: '/' },
    { tag: '社会', url: '/' },
    { tag: '时尚', url: '/' },
    { tag: '电影', url: '/' },
    { tag: '美女', url: '/' },
    { tag: '体育', url: '/' },
    { tag: '动漫', url: '/' }
]

export default (req, res) => {
    res.status(200).json({ data: leftbar })
}
