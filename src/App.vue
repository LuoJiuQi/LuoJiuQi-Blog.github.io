<script setup>
import Sidebar from './components/Sidebar.vue'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 根据当前路由动态生成页面标题
const pageTitle = computed(() => {
  const titleMap = {
    '/': '我的个人博客',
    '/about': '关于我',
    '/archive': '文章归档',
    '/tags': '标签',
    '/changelog': '更新日志'
  }
  return titleMap[route.path] || '我的个人博客'
})


</script>

<template>
  <div class="app">
    <!-- 左侧导航栏 -->
    <Sidebar />
    
    <!-- 主内容区 -->
    <div class="main-content">
      <header class="header">
        <h1 
          class="site-title" 
          :data-text="pageTitle"
        >
          {{ pageTitle }}
        </h1>
      </header>
      
      <main class="main">
        <router-view></router-view>
      </main>
      
      <footer class="footer">
        <p>&copy; {{ new Date().getFullYear() }} 我的个人博客</p>
      </footer>
    </div>
  </div>
</template>

<style>
/* Font Awesome 图标样式（通过CDN引入） */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

:root {
  /* 主色调变量 */
  --primary-color: #6e5af0;      /* 主色调（用于图标、边框） */
  --secondary-color: #8b5cf6;     /* 辅助色（用于渐变、强调） */
  --accent-color: #ec4899;        /* 强调色（用于特殊元素） */
  --hover-color: #ffa117;        /* 鼠标悬停时的高亮颜色 */
  
  /* 背景色变量 */
  --background-light: #e4e9f5;   /* 页面主背景色 */
  --background-color: #f8fafc;    /* 浅灰色背景（用于卡片内部） */
  --card-background: #ffffff;     /* 白色卡片背景 */
  
  /* 文本色变量 */
  --text-primary: #1e293b;        /* 深灰色文本（主要内容） */
  --text-secondary: #64748b;      /* 中灰色文本（次要内容） */
  --text-light: #94a3b8;          /* 浅灰色文本（辅助信息） */
  
  /* 边框和阴影变量 */
  --border-color: #e2e8f0;        /* 边框颜色 */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  /* 圆角变量 */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  /* 其他变量 */
  --icon-size: 30px;             /* 图标默认大小 */
  --transition-speed: 0.4s;      /* 动画过渡时间 */
  --transition: all var(--transition-speed) cubic-bezier(0.4, 0, 0.2, 1);
}

/* 重置所有元素的默认样式 */
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.7;
  color: var(--text-primary);
  background-image: url('/src/assets/images/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: auto;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

#app {
  display: block;
  min-height: 100vh;
}

.app {
  min-height: 100vh;
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  background: transparent;
}

/* 主内容区样式 */
.main-content {
  flex: 1; /* 使用flex布局让主内容区自动填充剩余空间 */
  margin-left: 300px; /* 默认避开展开导航栏 */
  transition: margin-left var(--transition-speed);
  will-change: margin-left;
  display: flex;
  flex-direction: column;
  background-color: rgba(228, 233, 245, 0.5); /* 半透明背景色，让背景图片可见 */
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

/* 导航收起后自动适配主内容区 */
.shell.close ~ .main-content {
  margin-left: 84px;
}

.header {
  background: rgba(255, 255, 255, 0.5); /* 0.5透明度的白色背景 */
  color: var(--text-primary);
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  box-shadow: var(--shadow-md);
  border-bottom: 1px solid var(--border-color);
  width: 100%;
}

.site-title {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0;
  background: linear-gradient(
    135deg, 
    var(--primary-color),    /* 主色 */
    var(--secondary-color),  /* 辅助色 */
    var(--accent-color),     /* 强调色 */
    var(--secondary-color),  /* 辅助色 */
    var(--primary-color)     /* 主色 */
  );
  background-size: 300% 100%;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  user-select: none; /* 防止文本被选择，避免出现输入光标 */
  cursor: pointer;
  transition: all var(--transition);
}

.site-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0;
  height: 3px;
  background: linear-gradient(
    90deg, 
    var(--primary-color),    /* 主色 */
    var(--secondary-color),  /* 辅助色 */
    var(--accent-color)      /* 强调色 */
  );
  background-size: 300% 100%;
  transition: width 0.3s ease-in-out;
  border-radius: 2px;
}

.site-title:hover {
  background-position: 100% 50%;
  transition: all var(--transition);
}

.site-title:hover::after {
  width: 100%;
  transition: width 0.3s ease-in-out;
}



.main {
  flex: 1;
  padding: 2rem;
  width: 100%;
  margin: 0;
}

.footer {
  background-color: var(--card-background);
  color: var(--text-primary);
  text-align: center;
  padding: 2rem;
  margin-top: auto;
  font-size: 0.9rem;
  color: var(--text-light);
  border-top: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  width: 100%;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-content {
    margin-left: 100px;
  }
  
  .shell.close ~ .main-content {
    margin-left: 84px;
  }
  
  .header {
    padding: 1.25rem 1rem;
  }
  
  .site-title {
    font-size: 1.5rem;
  }
  
  .main {
    padding: 2rem 1rem;
  }
  
  h2.page-title {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .main-content {
    margin-left: 84px;
  }
  
  .site-title {
    font-size: 1.3rem;
  }
  
  .main {
    padding: 1.5rem 1rem;
  }
}
</style>
