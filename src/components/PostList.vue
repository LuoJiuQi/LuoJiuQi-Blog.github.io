<script setup>
const props = defineProps({
  posts: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="post-item">
      <router-link :to="`/post/${post.id}`" class="post-link">
        <div class="post-meta">
          <span class="post-date">{{ post.date }}</span>
          <span class="post-author">{{ post.author }}</span>
        </div>
        <h3 class="post-title">{{ post.title }}</h3>
        <p class="post-excerpt">{{ post.excerpt }}</p>
        <div class="read-more">
          阅读更多 →
        </div>
      </router-link>
    </div>
    
    <div v-if="posts.length === 0" class="no-posts">
      暂无文章
    </div>
  </div>
</template>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.post-item {
  background-color: var(--card-background);
  padding: 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
}

.post-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, var(--primary-color), var(--secondary-color));
  transform: scaleY(0);
  transition: var(--transition);
}

.post-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.post-item:hover::before {
  transform: scaleY(1);
}

.post-link {
  text-decoration: none;
  color: inherit;
  display: block;
  position: relative;
  z-index: 1;
}

.post-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-light);
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.025em;
  text-transform: uppercase;
}

.post-title {
  font-size: 1.875rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  transition: var(--transition);
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.025em;
}

.post-link:hover .post-title {
  color: var(--primary-color);
}

.post-excerpt {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.read-more {
  display: inline-block;
  color: var(--primary-color);
  font-weight: 500;
  font-size: 0.95rem;
  transition: var(--transition);
  text-decoration: none;
}

.post-link:hover .read-more {
  color: var(--primary-hover);
  transform: translateX(4px);
}

.no-posts {
  text-align: center;
  font-size: 1.125rem;
  color: var(--text-secondary);
  padding: 3rem;
  background-color: var(--card-background);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 2px dashed var(--border-color);
}
</style>
