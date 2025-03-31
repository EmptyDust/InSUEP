import comp from "D:/InSUEP/docs/.vuepress/.temp/pages/AdmissionGuide/index.html.vue"
const data = JSON.parse("{\"path\":\"/AdmissionGuide/\",\"title\":\"Admission Guide\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Admission Guide\",\"article\":false,\"feed\":false,\"sitemap\":false},\"git\":{},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
