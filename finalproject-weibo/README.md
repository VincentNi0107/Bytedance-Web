# 字节跳动前端课程大作业
## 项目运行
```bash
cd finalproject-weibo
npm install
npm run dev
```
项目运行在http://localhost:3000/
## 项目介绍

1. 复刻已有产品——微博网页版

    https://weibo.com/?category=1760

    https://weibo.com/ttarticle/p/show?id=2309354634302900994573

    ![origin_webo](C:\Users\11630\Web-bytedance\finalproject-weibo\readme_pic\origin_webo.gif)

2. 数据均存在本地，可以在断网的情况下可以正常运行、演示

3. 实现内容：
    - 首页 ✅

    - 二级页面 ✅

    - 首页可以导航到二级页面 ✅

    - 支持**SSR** ✅

      ![my_webo](C:\Users\11630\Web-bytedance\finalproject-weibo\readme_pic\my_webo.gif)

4. 项目中的关键点
    - Next.js(React Framework) ✅
    - SSR的基本概念和用法 ✅
    - 代码管理和组织 ✅
    - 组件的划分和管理 ✅
    - 异步操作的处理和状态管理
    - 项目的构建、打包优化、发布 ✅
    - 测试 ✅

## 实现细节

1. 使用**Next.js**框架进行组件化开发，工程目录如下

    ![catalog](C:\Users\11630\Web-bytedance\finalproject-weibo\readme_pic\catalog.png)

    主页在**index.js**中实现，二级页面在**secondpage.js**中实现

    ![pages](C:\Users\11630\Web-bytedance\finalproject-weibo\readme_pic\pages.png)

    两个页面均使用**components**中的组件，其中**Header**由两个组件公用

    ![image-20210514194800797](C:\Users\11630\AppData\Roaming\Typora\typora-user-images\image-20210514194800797.png)

2. 页面间跳转采用**Next.js**路由
```jsx
 <Link href="/secondpage"><a>{ title }</a></Link>
```
3. 所有的新闻数据均由后台**api**发送，**Next.js**自带**SSR**功能，使用`getServerSideProps`函数从api中进行数据拉取和渲染
```jsx
export const getServerSideProps = async () => {
  let res = await fetch(`http://localhost:3000/api/left`)
  let data = await res.json()

  let resp = await fetch(`http://localhost:3000/api/news`)
  let list = await resp.json()

  let reshottopic = await fetch(`http://localhost:3000/api/right`)
  let hottopic = await reshottopic.json()

  return { 
      props: { channels: data.data, list: list.data , hottopics: hottopic.data}
  }
}
```
**left.js **发送首页左侧选项栏，**news.js** 发送首页和二级页面的新闻列表，**right.js**发送首页右侧热搜栏，**article.js**发送新闻内容
![api](C:\Users\11630\Web-bytedance\finalproject-weibo\readme_pic\api.png)



   