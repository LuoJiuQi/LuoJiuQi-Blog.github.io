<script setup>
import { ref } from 'vue'

// 控制版本1.0.0的折叠状态，默认折叠
const isVersion1Open = ref(false)

// 切换折叠状态
const toggleVersion1 = () => {
  isVersion1Open.value = !isVersion1Open.value
}
</script>

<template>
  <div class="changelog-container">
    <div class="changelog-content">
      <div class="changelog-item">
        <div class="changelog-header" @click="toggleVersion1">
          <div class="changelog-title">
            <h2>版本 1.0.0</h2>
            <p class="date">2025-11-29</p>
          </div>
          <div class="toggle-icon">
            <!-- 使用CSS旋转实现图标变化 -->
            <i class="fas fa-chevron-down" :class="{ 'rotate': isVersion1Open }"></i>
          </div>
        </div>
        <!-- 使用 Vue 3 过渡，确保动画能正常工作 -->
        <div class="changelog-body-wrapper" :class="{ 'open': isVersion1Open }">
          <div class="changelog-body">
            <ul>
              <li>- 初始版本发布</li>
              <li>- 实现了博客的基本功能</li>
              <li>- 添加了侧边栏导航</li>
              <li>- 实现了文章列表和详情页</li>
              <li>- 添加了关于页面</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.changelog-container {
  width: 100%;
  padding: 0;
  margin: 0;
  user-select: none; /* 防止文本被选择，避免出现输入光标 */
}

.changelog-item {
  margin-bottom: 2rem;
  background: var(--card-background);
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all var(--transition);
  border: 1px solid var(--border-color);
}

.changelog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  background: var(--card-background);
  transition: all var(--transition);
  border-bottom: 1px solid var(--border-color);
}

.changelog-header:hover {
  background: var(--background-color);
}

.changelog-title {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.changelog-title h2 {
  margin: 0;
  color: var(--primary-color);
  font-size: 1.5rem;
}

.changelog-title .date {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.toggle-icon {
  font-size: 1.2rem;
  color: var(--primary-color);
  transition: all var(--transition);
}

.changelog-body-wrapper {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.4s ease;
}

.changelog-body-wrapper.open {
  max-height: 500px;
  opacity: 1;
  transition: max-height 0.4s ease, opacity 0.4s ease;
}

.changelog-body {
  padding: 1.5rem;
  background: var(--card-background);
}

.changelog-body ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0;
}

.changelog-body li {
  margin-bottom: 0.5rem;
  color: var(--text-dark);
  line-height: 1.6;
}

.changelog-body li:last-child {
  margin-bottom: 0;
}

/* 图标旋转动画，与展开收起动画同步 */
.toggle-icon i {
  transition: transform 0.4s ease;
  transform-origin: center;
}

.toggle-icon i.rotate {
  transform: rotate(180deg);
  transition: transform 0.4s ease 0.1s; /* 延迟0.1秒，与展开收起动画同步 */
}
</style>