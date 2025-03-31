import comp from "D:/InSUEP/docs/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"我的新页面\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"createdTime\":1742308871000,\"updatedTime\":1742882320000,\"contributors\":[{\"name\":\"EmptyDust\",\"username\":\"EmptyDust\",\"email\":\"1422492074@qq.com\",\"commits\":2,\"url\":\"https://github.com/EmptyDust\"}]},\"readingTime\":{\"minutes\":0.16,\"words\":48},\"filePathRelative\":\"guide/README.md\",\"localizedDate\":\"March 18, 2025\",\"excerpt\":\"<p>test</p>\\n<p>114514</p>\\n<p>1919810</p>\\n<h1>我的新页面</h1>\\n<p><img src=\\\"https://bu.dusays.com/2025/03/20/67dbbc5e48863.jpg\\\" alt=\\\"VuePress Logo\\\"></p>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
