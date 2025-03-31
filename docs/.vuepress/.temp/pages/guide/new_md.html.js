import comp from "D:/InSUEP/docs/.vuepress/.temp/pages/guide/new_md.html.vue"
const data = JSON.parse("{\"path\":\"/guide/new_md.html\",\"title\":\"我的新页面\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"createdTime\":1742308871000,\"updatedTime\":1742882320000,\"contributors\":[{\"name\":\"EmptyDust\",\"username\":\"EmptyDust\",\"email\":\"1422492074@qq.com\",\"commits\":2,\"url\":\"https://github.com/EmptyDust\"}]},\"readingTime\":{\"minutes\":0.15,\"words\":45},\"filePathRelative\":\"guide/new_md.md\",\"localizedDate\":\"March 18, 2025\",\"excerpt\":\"\\n<p><img src=\\\"https://bu.dusays.com/2025/03/20/67dbbc5e48863.jpg\\\" alt=\\\"VuePress Logo\\\"></p>\\n<h2>任务列表</h2>\"}")
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
