const e=[{id:1,title:"Vue 3 入门指南",date:"2025-11-28",author:"张三",excerpt:"Vue 3 是一款流行的 JavaScript 框架，本文将带你快速入门 Vue 3 的核心概念和使用方法。",content:`
      <h3>什么是 Vue 3？</h3>
      <p>Vue 3 是一款用于构建用户界面的渐进式 JavaScript 框架。它的核心库只关注视图层，易于上手，同时也能与现代化的工具链以及各种支持类库结合使用，为复杂的单页应用提供驱动。</p>
      
      <h3>Vue 3 的核心特性</h3>
      <ul>
        <li>组合式 API：提供了更灵活的代码组织方式</li>
        <li>响应式系统：基于 Proxy 的响应式系统，性能更好</li>
        <li>虚拟 DOM：高效的 DOM 更新算法</li>
        <li>组件化：支持组件化开发，提高代码复用性</li>
      </ul>
      
      <h3>快速开始</h3>
      <p>使用 Vite 创建 Vue 3 项目：</p>
      <pre><code>npm create vite@latest my-vue-app -- --template vue</code></pre>
      
      <p>然后安装依赖并启动开发服务器：</p>
      <pre><code>cd my-vue-app
npm install
npm run dev</code></pre>
    `},{id:2,title:"JavaScript 异步编程最佳实践",date:"2025-11-25",author:"李四",excerpt:"异步编程是 JavaScript 开发中的重要概念，本文将介绍异步编程的最佳实践和常用模式。",content:`
      <h3>异步编程的重要性</h3>
      <p>JavaScript 是单线程语言，异步编程允许我们在执行耗时操作时不阻塞主线程，提高应用的响应性和性能。</p>
      
      <h3>常用异步模式</h3>
      <h4>1. Promise</h4>
      <p>Promise 是处理异步操作的标准方式，它提供了更清晰的代码结构和更好的错误处理机制。</p>
      <pre><code>fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));</code></pre>
      
      <h4>2. async/await</h4>
      <p>async/await 是基于 Promise 的语法糖，使异步代码看起来像同步代码，更易于理解和维护。</p>
      <pre><code>async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}</code></pre>
      
      <h3>最佳实践</h3>
      <ul>
        <li>总是处理 Promise 的错误</li>
        <li>避免嵌套 Promise，使用链式调用或 async/await</li>
        <li>合理使用 Promise.all 处理多个并行异步操作</li>
        <li>考虑使用 async/await 提高代码可读性</li>
      </ul>
    `},{id:3,title:"CSS Grid 布局完全指南",date:"2025-11-20",author:"王五",excerpt:"CSS Grid 是一种强大的二维布局系统，本文将详细介绍 CSS Grid 的各种属性和使用方法。",content:`
      <h3>CSS Grid 简介</h3>
      <p>CSS Grid 布局是 CSS 中最强大的布局系统。它是一个二维系统，这意味着它可以同时处理列和行，而 Flexbox 主要是一维系统。</p>
      
      <h3>基本概念</h3>
      <ul>
        <li>容器：应用了 display: grid 的元素</li>
        <li>项目：容器的直接子元素</li>
        <li>行：水平轨道</li>
        <li>列：垂直轨道</li>
        <li>间隙：行与列之间的空间</li>
      </ul>
      
      <h3>基本语法</h3>
      <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}</code></pre>
      
      <h3>常用属性</h3>
      <h4>容器属性</h4>
      <ul>
        <li>grid-template-columns：定义列的大小</li>
        <li>grid-template-rows：定义行的大小</li>
        <li>grid-gap/grid-row-gap/grid-column-gap：定义间隙</li>
        <li>grid-auto-flow：控制项目的排列顺序</li>
      </ul>
      
      <h4>项目属性</h4>
      <ul>
        <li>grid-column：指定项目的列位置</li>
        <li>grid-row：指定项目的行位置</li>
        <li>grid-area：指定项目的起始位置和大小</li>
      </ul>
    `}];function t(i){return e.find(r=>r.id===parseInt(i))}function l(){return e}export{t as a,l as g};
