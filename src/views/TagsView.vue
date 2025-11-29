<template>
  <div class="tags-container">
    <h2>标签</h2>
    <div class="tags-content">
      <p>标签功能正在开发中...</p>
    </div>
  </div>
</template>

<style scoped>
.tags-container {
  width: 100%;
  padding: 0;
  margin: 0;
  user-select: none; /* 防止文本被选择，避免出现输入光标 */
}

.tags-container h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
}

.tags-content {
  text-align: center;
  padding: 2rem;
  background: var(--background-light);
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
}
</style>