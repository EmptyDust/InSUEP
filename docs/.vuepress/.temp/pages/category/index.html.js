import comp from "D:/InSUEP/docs/.vuepress/.temp/pages/category/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/\",\"title\":\"Category\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Category\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"category\",\"key\":\"category\"},\"layout\":\"BlogCategory\"},\"git\":{},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
