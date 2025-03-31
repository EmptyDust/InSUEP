import comp from "D:/InSUEP/docs/.vuepress/.temp/pages/timeline/index.html.vue"
const data = JSON.parse("{\"path\":\"/timeline/\",\"title\":\"Timeline\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Timeline\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"type\",\"key\":\"timeline\"},\"layout\":\"Timeline\"},\"git\":{},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
