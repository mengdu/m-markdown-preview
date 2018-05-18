# m-markdown-preview

A markdown preview component for vue.

[Example](https://mengdu.github.io/m-markdown-preview/example/)

npm

```ls
npm install m-markdown-preview
```

use

```js
import MMarkdownPreview from 'm-markdown-preview'

Vue.use(MMarkdownPreview)
```

```html
<m-markdown-preview markdown="# wellcome here !" :options="{html: true}"></m-markdown-preview>
```

## MMarkdownPreview Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| markdown  | markdown文本   | string |  —  |    —     |
| hljs-class-name  | hljs块类名   | string |  —  |    —     |
| options  | mardkown-it 配置   | object |  —  |    —     |
| highlight  | 代码块回调 | function |  —  |    —     |


## other

[markdown-it](https://github.com/markdown-it/markdown-it)
