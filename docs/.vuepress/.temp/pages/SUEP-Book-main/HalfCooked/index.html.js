import comp from "D:/InSUEP/docs/.vuepress/.temp/pages/SUEP-Book-main/HalfCooked/index.html.vue"
const data = JSON.parse("{\"path\":\"/SUEP-Book-main/HalfCooked/\",\"title\":\"Half Cooked\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Half Cooked\",\"article\":false,\"feed\":false,\"sitemap\":false},\"git\":{},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
