import comp from "D:/InSUEP/docs/.vuepress/.temp/pages/HalfCooked/学习指南/index.html.vue"
const data = JSON.parse("{\"path\":\"/HalfCooked/%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97/\",\"title\":\"学习指南\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"学习指南\",\"article\":false,\"feed\":false,\"sitemap\":false},\"git\":{},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
