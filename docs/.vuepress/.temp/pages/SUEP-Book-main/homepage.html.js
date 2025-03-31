import comp from "D:/InSUEP/docs/.vuepress/.temp/pages/SUEP-Book-main/homepage.html.vue"
const data = JSON.parse("{\"path\":\"/SUEP-Book-main/homepage.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"createdTime\":1742353328000,\"updatedTime\":1742353328000,\"contributors\":[{\"name\":\"EmptyDust\",\"username\":\"EmptyDust\",\"email\":\"1422492074@qq.com\",\"commits\":1,\"url\":\"https://github.com/EmptyDust\"}]},\"readingTime\":{\"minutes\":0.82,\"words\":246},\"filePathRelative\":\"SUEP-Book-main/homepage.md\",\"localizedDate\":\"March 19, 2025\",\"excerpt\":\"<p style=\\\"text-align: center;\\\">\\n     \\n    \\n</p>\\n<p style=\\\"text-align: center;\\\">致所有上海电力大学的学生（曾经、当前、未来）</p>\"}")
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
