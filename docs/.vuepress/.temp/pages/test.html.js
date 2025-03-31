import comp from "D:/InSUEP/docs/.vuepress/.temp/pages/test.html.vue"
const data = JSON.parse("{\"path\":\"/test.html\",\"title\":\"这不是一个首页\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"createdTime\":1742306701000,\"updatedTime\":1742308871000,\"contributors\":[{\"name\":\"EmptyDust\",\"username\":\"EmptyDust\",\"email\":\"1422492074@qq.com\",\"commits\":2,\"url\":\"https://github.com/EmptyDust\"}]},\"readingTime\":{\"minutes\":0.09,\"words\":26},\"filePathRelative\":\"test.md\",\"localizedDate\":\"March 18, 2025\",\"excerpt\":\"\\n<p>这不是首页。</p>\\n<p>这是一个链接： <a href=\\\"https://vuepress.vuejs.org/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">VuePress</a></p>\"}")
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
