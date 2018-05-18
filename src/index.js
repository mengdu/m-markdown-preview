import MMarkdownPreview from './m-markdown-preview'

MMarkdownPreview.install = function (Vue) {
  Vue.component(MMarkdownPreview.name, MMarkdownPreview)
}

export {
  MMarkdownPreview as default,
  MMarkdownPreview
}
