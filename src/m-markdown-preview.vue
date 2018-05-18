<template>
  <div class="m-markdown-preview" v-html="html"></div>
</template>
<script>
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

export default {
  name: 'MMarkdownPreview',
  props: {
    markdown: String,
    hljsClassName: String,
    options: {
      type: Object,
      default () {
        return {}
      }
    },
    highlight: Function
  },
  watch: {
    markdown (val) {
      this.doRender()
    },
    options () {
      this.initRender()
    }
  },
  data () {
    return {
      html: '',
      mrender: null
    }
  },
  methods: {
    doRender () {
      this.html = this.mrender.render(this.markdown)
    },
    initRender () {
      let that = this
      let highlight = function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          let code = hljs.highlight(lang, str).value
          try {
            if (that.highlight && typeof that.highlight === 'function') {
              return that.highlight(code, str, lang)
            }
            return `<pre class="hljs${that.hljsClassName ? ' ' + that.hljsClassName + ' ' : ''}"><code>${code}</code></pre>`
          } catch (err) {
            console.log('hljs error:', err)
          }
        }
        return ''
      }
      this.mrender = new MarkdownIt({
        highlight,
        ...this.options
      })
      this.doRender()
    }
  },
  created () {
    this.initRender()
  }
}
</script>
