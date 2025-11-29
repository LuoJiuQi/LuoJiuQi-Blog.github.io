<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getPostById } from '../data/posts.js'

const route = useRoute()
const post = ref(null)

onMounted(() => {
  const postId = route.params.id
  post.value = getPostById(postId)
})
</script>

<template>
  <div class="post-detail">
    <div v-if="post" class="post-content">
      <!-- 文章头部 -->
      <div class="post-header">
        <div class="post-meta">
          <span class="post-date">{{ post.date }}</span>
          <span class="post-author">作者：{{ post.author }}</span>
        </div>
        <h1 class="post-title">{{ post.title }}</h1>
        <div class="post-divider"></div>
      </div>
      
      <!-- 文章内容 -->
      <div class="post-body" v-html="post.content"></div>
      
      <!-- 文章底部 -->
      <div class="post-footer">
        <div class="post-tags">
          <span class="tag">#Vue3</span>
          <span class="tag">#前端开发</span>
        </div>
        <div class="post-actions">
          <button class="action-btn">
            <span>❤️</span> 喜欢
          </button>
          <button class="action-btn">
            <span>💬</span> 评论
          </button>
          <button class="action-btn">
            <span>🔗</span> 分享
          </button>
        </div>
      </div>
      
      <!-- 返回首页按钮 -->
      <div class="back-home">
        <router-link to="/" class="back-link">
          ← 返回首页
        </router-link>
      </div>
    </div>
    
    <div v-else class="loading">
      <div class="loading-spinner"></div>
      <p>加载中...</p>
    </div>
  </div>
</template>

<style scoped>
.post-detail {
  max-width: 800px;
  margin: 0 auto;
}

.post-content {
  background-color: var(--card-background);
  padding: 3rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);
}

.post-header {
  margin-bottom: 2.5rem;
  text-align: center;
}

.post-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  color: var(--text-light);
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.025em;
  text-transform: uppercase;
}

.post-title {
  font-size: 2.75rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  line-height: 1.2;
  letter-spacing: -0.03em;
  font-weight: 700;
}

.post-divider {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  margin: 0 auto;
  border-radius: 2px;
}

.post-body {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 3rem;
}

/* 文章内容样式 */
.post-body h3 {
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
  color: var(--text-primary);
  font-weight: 600;
}

.post-body h4 {
  font-size: 1.25rem;
  margin: 1.5rem 0 0.75rem;
  color: var(--text-primary);
  font-weight: 600;
}

.post-body p {
  margin-bottom: 1.5rem;
  text-align: justify;
}

.post-body ul {
  margin: 1.5rem 0;
  padding-left: 1.5rem;
}

.post-body li {
  margin-bottom: 0.5rem;
  list-style-type: disc;
}

.post-body pre {
  background-color: var(--background-color);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  margin: 1.5rem 0;
  overflow-x: auto;
  border: 1px solid var(--border-color);
}

.post-body code {
  background-color: var(--background-color);
  padding: 0.2rem 0.4rem;
  border-radius: var(--radius-sm);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
  color: var(--accent-color);
}

.post-body pre code {
  background-color: transparent;
  padding: 0;
  color: var(--text-primary);
}

/* 文章底部 */
.post-footer {
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  margin-bottom: 2rem;
}

.post-tags {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.tag {
  background-color: var(--background-color);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: var(--transition);
  border: 1px solid var(--border-color);
}

.tag:hover {
  background-color: var(--primary-color);
  color: white;
}

.post-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--background-color);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.action-btn:hover {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.action-btn span {
  font-size: 1.1rem;
}

/* 返回首页按钮 */
.back-home {
  text-align: center;
  margin-top: 2rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  transition: var(--transition);
  border: 1px solid var(--border-color);
}

.back-link:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateX(-4px);
}

/* 加载状态 */
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  color: var(--text-secondary);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--border-color);
  border-top: 3px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .post-content {
    padding: 2rem 1.5rem;
  }
  
  .post-title {
    font-size: 2rem;
  }
  
  .post-body {
    font-size: 1rem;
  }
  
  .post-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .post-actions {
    flex-direction: column;
  }
  
  .action-btn {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .post-content {
    padding: 1.5rem 1rem;
  }
  
  .post-title {
    font-size: 1.75rem;
  }
  
  .post-header {
    margin-bottom: 2rem;
  }
}
</style>
