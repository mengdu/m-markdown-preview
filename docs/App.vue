<template>
  <div id="app">
    <fork-link :repo="repo" />
    <header>
      <img src="./assets/logo.png">
      <h1>m-markdown-preview</h1>
    </header>
    <div style="width: 800px; min-height: 100px; margin: 0 auto; padding: 15px;">
      <textarea class="form-control" v-model="markdown" style="max-width: 100%; min-width: 100%; width: 100%; min-height: 100px;"></textarea>
    </div>
    <main class="doc-block">
      <m-markdown-preview :markdown="markdown" :options="{html: true}" hljs-class-name="test"></m-markdown-preview>

      <readme></readme>
      <!-- <Doc/> -->
    </main>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutFooter from './components/footer'
import ForkLink from './components/fork-link'

// import Doc from './doc.md'
import Readme from '~/README.md'
import pkg from '~/package.json'

export default {
  name: 'App',
  components: {
    // Doc,
    LayoutFooter,
    ForkLink,
    Readme
  },
  data () {
    return {
      pkg,
      markdown: '# wellcome !'
    }
  },
  methods: {
    highlight (code, str, lang) {
      console.log(code, str, lang)
      return ''
    }
  },
  computed: {
    repo () {
      return pkg.repository.url.replace(/git\+/, '')
    }
  }
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #F6F6F6;
    font-size: 14px;
  }
  header {
    font-family: 'Cabin Sketch', 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 15px;
    background: #41B883;
    color: #fff;
  }
  main {
    margin: 0 auto;
    padding: 15px;
    max-width: 800px;
    margin-bottom: 100px;
    background: #fff;
  }
  blockquote {
    margin: 0;
    padding: 0.05em 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
    background: #f3f3f3;
  }
  a{
    color: #0366D6;
    text-decoration: none;
  }
  .hljs{
    background: #FAFAFA;
  }
  code {
    color: #ED4C6B;
    background-color: #F6F8FA;
    margin: 0 4px;
    display: inline-block;
    padding: 1px 5px;
    font-size: 12px;
    border-radius: 3px;
    line-height: 18px;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }
  .doc-block table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
    text-align: left;
  }
  .doc-block table td,
  .doc-block table th
  {
    border-bottom: 1px solid #d8d8d8;
    padding: 15px;
    max-width: 250px;
  }
  .form-control{
    display: inline-block;
    padding: 5px 12px;
    font-size: 14px;
    font-family: inherit;
    line-height: 1.42857143;
    height: 36px;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #c5c7ce;
    border-radius: 4px;
    vertical-align: middle;
    outline: none;
    box-sizing: border-box;
    box-shadow: 0 0 0 0 rgba(44,147,250,.18);
    transition: border,
    box-shadow .5s ease;
  }
  .form-control:active{
    border-color: #29a0f2;
  }

  .form-control:focus{
    border-color: #29A0F2;
    /* box-shadow: 0 0 0px 3px rgba(44, 147, 250, 0.18); */
  }
</style>
