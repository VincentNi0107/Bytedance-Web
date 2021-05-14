const hottopics = [
    { title:'#艺人让家人搭理个人事业好吗#',read:'21334',discuss:'131144',imgsrc:'/hot/a.jpg'},
    { title:'#艺人让家人搭理个人事业好吗#',read:'2134',discuss:'11314',imgsrc:'/hot/a.jpg'},
    { title:'#艺人让家人搭理个人事业好吗#',read:'2134',discuss:'1314',imgsrc:'/hot/a.jpg'},
    { title:'#艺人让家人搭理个人事业好吗#',read:'2134',discuss:'1314',imgsrc:'/hot/a.jpg'},
    { title:'#艺人让家人搭理个人事业好吗#',read:'2134',discuss:'1314',imgsrc:'/hot/a.jpg'},
    
]
export default (req, res) => {
    res.status(200).json({ data: hottopics })
}
