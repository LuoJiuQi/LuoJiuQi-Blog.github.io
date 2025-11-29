<script setup>
</script>

<template>
  <div class="about">
    <div class="about-header">
      <h2 class="page-title">关于我</h2>
      <div class="about-avatar">
        <div class="avatar">
          <span>👨‍💻</span>
        </div>
      </div>
    </div>
    
    <div class="about-content">
      <p class="about-intro">欢迎来到我的个人博客！</p>
      
      <div class="about-section">
        <h3>我的简介</h3>
        <p>我是一名热爱技术的开发者，专注于前端开发和用户体验设计。拥有多年的Web开发经验，擅长使用Vue、React等现代前端框架构建高质量的Web应用。</p>
      </div>
      
      <div class="about-section">
        <h3>技术栈</h3>
        <div class="tech-stack">
          <div class="tech-item">Vue 3</div>
          <div class="tech-item">React</div>
          <div class="tech-item">JavaScript</div>
          <div class="tech-item">TypeScript</div>
          <div class="tech-item">CSS3</div>
          <div class="tech-item">HTML5</div>
          <div class="tech-item">Vite</div>
          <div class="tech-item">Webpack</div>
        </div>
      </div>
      
      <div class="about-section">
        <h3>兴趣爱好</h3>
        <p>除了编程，我还喜欢阅读、旅行、摄影和音乐。我相信技术和艺术是相辅相成的，它们都能让我们的生活变得更加美好。</p>
      </div>
      
      <div class="about-section">
        <h3>联系方式</h3>
        <div class="contact-info">
          <a href="#" class="contact-link">
            <span>📧</span> 邮箱
          </a>
          <a href="#" class="contact-link">
            <span>🐙</span> GitHub
          </a>
          <a href="#" class="contact-link">
            <span>🔗</span> 个人网站
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  width: 100%;
  margin: 0;
  user-select: none; /* 防止文本被选择，避免出现输入光标 */
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-weight: 700;
  letter-spacing: -0.03em;
  position: relative;
  padding-bottom: 1rem;
}

.page-title::after {
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

.about-avatar {
  margin-bottom: 2rem;
}

.avatar {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 3rem;
  box-shadow: var(--shadow-lg);
  transition: var(--transition);
}

.avatar:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04));
}

.about-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.about-intro {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 2.5rem;
}

.about-section {
  background-color: var(--card-background);
  padding: 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  margin-bottom: 2rem;
  transition: var(--transition);
}

.about-section:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.about-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.about-section h3::before {
  content: '';
  width: 4px;
  height: 24px;
  background: linear-gradient(180deg, var(--primary-color), var(--secondary-color));
  border-radius: 2px;
}

.about-section p {
  margin-bottom: 1.5rem;
  text-align: justify;
}

.tech-stack {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.tech-item {
  background-color: var(--background-color);
  color: var(--primary-color);
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
  transition: var(--transition);
  border: 1px solid var(--border-color);
}

.tech-item:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.contact-info {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--background-color);
  color: var(--text-primary);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  border: 1px solid var(--border-color);
}

.contact-link:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.contact-link span {
  font-size: 1.1rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .about-content {
    font-size: 1rem;
  }
  
  .about-section {
    padding: 1.5rem;
  }
  
  .tech-stack {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0.75rem;
  }
  
  .contact-info {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.75rem;
  }
  
  .avatar {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }
  
  .about-section {
    padding: 1.25rem 1rem;
  }
  
  .about-section h3 {
    font-size: 1.25rem;
  }
  
  .tech-stack {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
