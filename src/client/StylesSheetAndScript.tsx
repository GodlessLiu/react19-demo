import script from "./index.js?url"

// 导出一个默认函数，名为StyleSheetAndScript
export default function StyleSheetAndScript() {
    // 返回一个包含两个link标签和一个script标签的JSX元素
    return <>
        <link rel="stylesheet" href="foo" precedence="default" />
        <link rel="stylesheet" href="bar" precedence="high" />
        <script async={true} src={script} />
        <script async={true} src={script} />
        <div>
            react19 中支持引入样式表和异步脚本，同时react可以检测到重复的脚本和样式表，避免重复加载
            <br />
            可以配合vite的静态资源处理功能 `import script from "./index.js?url"`来使用更佳
        </div>
    </>
}