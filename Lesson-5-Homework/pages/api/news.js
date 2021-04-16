export default (req, res) => {
  res.statusCode = 200;
  res.json({
    code: 200,
    data: [
      {
        newslink:"https://www.toutiao.com/a6951543527281066534/",
        newstitle: "联播+丨跟着总书记踏上红色热土 汲取奋进力量",
        medianame:"央视网新闻",
        commentnum:"18",
        newstime:"21分钟前",
        newstop:"置顶",
      },
      {
        newslink:"https://www.toutiao.com/a6951303467780538917/",
        newstitle: "新华全媒+|这组大数据告诉你，延安当年有多红｜4万多名知识分子奔赴延安！这里是抗战中的“光明之城”",
        medianame:"新华社",
        commentnum:"24",
        newstime:"55分钟前",
        newstop:"置顶",
      },
      {
        newslink:"https://www.ixigua.com/6950942825512960548",
        newstitle: "做红烧肉，切记别焯水和用水炖了，教你一招，肥而不腻，超下饭",
        medianame:"楠楠厨房记",
        commentnum:"551",
        newstime:"2小时前",
      },
    ],
  });
};
