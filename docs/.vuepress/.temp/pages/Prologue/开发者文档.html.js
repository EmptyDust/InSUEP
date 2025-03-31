import comp from "D:/InSUEP/docs/.vuepress/.temp/pages/Prologue/开发者文档.html.vue"
const data = JSON.parse("{\"path\":\"/Prologue/%E5%BC%80%E5%8F%91%E8%80%85%E6%96%87%E6%A1%A3.html\",\"title\":\"开发者须知\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"readingTime\":{\"minutes\":1.21,\"words\":362},\"filePathRelative\":\"Prologue/开发者文档.md\",\"excerpt\":\"\\n<h2>commit 规范</h2>\\n<p>为保证 commit 的可追溯性和统一性，要求所有开发者 commit message 遵循同一套规约</p>\\n<p>前缀请遵循如下规则(套用软件开发过程)</p>\"}")
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
