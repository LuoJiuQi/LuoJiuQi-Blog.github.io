<script setup>
import { ref, onMounted } from 'vue'
import PostList from '../components/PostList.vue'
import { getAllPosts } from '../data/posts.js'

const posts = ref([])

onMounted(() => {
  posts.value = getAllPosts()
})
</script>

<template>
  <div class="home">
    <!-- 英雄区域 -->
    <section class="hero-section">
      <div class="hero-content">
        <h2 class="hero-title">欢迎来到洛九柒的博客</h2>
        <p class="hero-subtitle">分享技术、生活与思考</p>
        <div class="hero-description">
          <p>这里记录着我的学习历程、技术实践和生活感悟。</p>
          <p>希望通过文字与你分享知识，交流想法，共同成长。</p>
        </div>
      </div>
    </section>

    <!-- 最新文章区域 -->
    <section class="latest-posts">
      <h2 class="section-title">最新文章</h2>
      <PostList :posts="posts" />
    </section>

    <!-- 博客特色区域 -->
    <section class="features-section">
      <h2 class="section-title">博客特色</h2>
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">
            <i class="fas fa-code"></i>
          </div>
          <h3 class="feature-title">技术分享</h3>
          <p class="feature-description">分享前端开发、后端技术、移动开发等相关内容</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <i class="fas fa-book"></i>
          </div>
          <h3 class="feature-title">学习笔记</h3>
          <p class="feature-description">记录学习过程中的知识点和心得体会</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <i class="fas fa-lightbulb"></i>
          </div>
          <h3 class="feature-title">思考感悟</h3>
          <p class="feature-description">分享对技术、生活、工作的思考和感悟</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  margin: 0;
  user-select: none; /* 防止文本被选择，避免出现输入光标 */
}

/* 英雄区域样式 */
.hero-section {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 3rem;
  box-shadow: var(--shadow-md);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
}

.hero-description p {
  margin-bottom: 1rem;
}

/* 最新文章区域样式 */
.latest-posts {
  margin-bottom: 3rem;
}

/* 博客特色区域样式 */
.features-section {
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-item {
  background: var(--card-background);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: var(--transition);
  border: 1px solid var(--border-color);
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.feature-icon {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.feature-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* 通用标题样式 */
.section-title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-primary);
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.03em;
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 2px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 3rem 1.5rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
  
  .feature-item {
    padding: 1.5rem;
  }
}
</style>
