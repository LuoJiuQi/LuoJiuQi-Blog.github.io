<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const isOpen = ref(true)
const route = useRoute()
const router = useRouter()

// 切换导航栏展开/收缩状态
const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}

// 判断当前路由是否激活
const isActive = (path) => {
  return route.path === path
}

// 导航到指定路由
const navigateTo = (path) => {
  router.push(path)
}
</script>

<template>
  <div class="shell" :class="{ close: !isOpen }">
    <!-- 切换按钮 -->
    <button class="toggle-button" @click="toggleSidebar">
      <i :class="['toggle-icon', isOpen ? 'fa-chevron-left' : 'fa-chevron-right', 'fas']"></i>
    </button>
    
    <!-- 导航列表 -->
    <ul>
      <!-- Logo 区域 -->
      <li id="logo" class="nav-item">
        <a href="#" @click.prevent="navigateTo('/')">
          <div class="icon">
            <i class="fas fa-blog"></i>
          </div>
          <div class="text">洛九柒的博客</div>
        </a>
      </li>
      

      
      <!-- 关于我 -->
      <li class="nav-item" :class="{ active: isActive('/about') }">
        <a href="#" @click.prevent="navigateTo('/about')">
          <div class="icon">
            <i class="fas fa-user"></i>
          </div>
          <div class="text">关于我</div>
        </a>
      </li>
      
      <!-- 文章归档 -->
      <li class="nav-item" :class="{ active: isActive('/archive') }">
        <a href="#" @click.prevent="navigateTo('/archive')">
          <div class="icon">
            <i class="fas fa-archive"></i>
          </div>
          <div class="text">归档</div>
        </a>
      </li>
      
      <!-- 标签 -->
      <li class="nav-item" :class="{ active: isActive('/tags') }">
        <a href="#" @click.prevent="navigateTo('/tags')">
          <div class="icon">
            <i class="fas fa-tags"></i>
          </div>
          <div class="text">标签</div>
        </a>
      </li>
      
      <!-- 网页更新日志 -->
      <li class="nav-item" :class="{ active: isActive('/changelog') }">
        <a href="#" @click.prevent="navigateTo('/changelog')">
          <div class="icon">
            <i class="fas fa-history"></i>
          </div>
          <div class="text">更新日志</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* 左侧导航栏整体容器样式 */
.shell {
  position: fixed;
  width: 300px;
  height: 100%;
  background: rgba(255, 255, 255, 0.5); /* 半透明背景色，让背景图片可见 */
  z-index: 9999;
  transition: width var(--transition-speed);
  padding-left: 8px;
  padding-top: 50px;
  will-change: width;
  box-shadow: var(--shadow-md);
}

/* 收缩状态下的导航栏宽度 */
.shell.close {
  width: 88px;
}

/* 控制导航栏伸缩的按钮区域 */
.toggle-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 10000;
  background: none;
  border: none;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none; /* 移除默认焦点黑框 */
}

/* 自定义焦点样式，保持可访问性 */
.toggle-button:focus-visible .toggle-icon {
  box-shadow: 0 0 0 2px var(--primary-color);
  border-radius: 4px;
}

/* 切换图标样式 */
.toggle-icon {
  font-size: 20px;
  color: var(--primary-color);
  transition: all var(--transition-speed) ease;
}

/* 鼠标悬停时的效果 */
.toggle-button:hover .toggle-icon {
  transform: scale(1.2) rotate(5deg);
}

/* 点击时的效果 */
.toggle-button:active .toggle-icon {
  transform: scale(0.9);
}

/* 导航栏列表容器样式 */
.shell ul {
  position: relative;
  height: 100vh;
  overflow: hidden;
  list-style: none;
  padding: 0;
  margin: 0;
}

/* 每个导航项的外层 li 样式 */
.nav-item {
  position: relative;
  padding: 5px;
  list-style: none;
}

/* 当前激活导航项背景样式 */
.active {
  background: var(--background-light);
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}

/* 激活项的上圆角视觉修饰 */
.active::before {
  content: "";
  position: absolute;
  top: -30px;
  right: 0;
  width: 30px;
  height: 30px;
  border-bottom-right-radius: 25px;
  box-shadow: 5px 5px 0 5px var(--background-light);
  background: transparent;
}

/* 激活项的下圆角视觉修饰 */
.active::after {
  content: "";
  position: absolute;
  bottom: -30px;
  right: 0;
  width: 30px;
  height: 30px;
  border-top-right-radius: 25px;
  box-shadow: 5px -5px 0 5px var(--background-light);
  background: transparent;
}

/* logo 区域的外边距 */
#logo {
  margin: 0 0 20px 0;
}

/* 每个导航链接的容器 */
.nav-item a {
  position: relative;
  display: flex;
  white-space: nowrap;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

/* 图标容器样式 */
.icon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  padding-left: 10px;
  height: 70px;
  color: var(--primary-color);
  transition: var(--transition-speed);
}

/* 图标字体样式 */
.icon i {
  font-size: var(--icon-size);
  z-index: 999;
}

/* 文本区域样式 */
.text {
  position: relative;
  height: 70px;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #333;
  padding-left: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: var(--transition-speed);
  user-select: none; /* 防止文本被选择，避免出现输入光标 */
  cursor: pointer; /* 明确指示可点击 */
}

/* 鼠标悬停时改变颜色 */
.nav-item:hover a .icon,
.nav-item:hover a .text {
  color: var(--hover-color);
}

/* 激活状态图标的背景环 */
.active a .icon::before {
  content: "";
  position: absolute;
  inset: 5px;
  width: 60px;
  background: #fff;
  border-radius: 50%;
  transition: var(--transition-speed);
  border: 7px solid var(--primary-color);
  box-sizing: border-box;
}
</style>