<template>
  <div class="page">
    <div class="text-center">
      <span class="code">404</span>
      <h1 class="title text-huge">You got lost in space</h1>
      <p class="text">Seems like this page doesn't exist!</p>
      <a href="/" class="btn">Go to back</a>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.code {
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: 500;
}

.title {
  margin-bottom: var(--space-xl);
}

.text {
  color: var(--gray-600);
  font-size: var(--text-lg);
  margin-bottom: var(--space-lg);
}

.btn {
  display: inline-block;
  font-weight: 700;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  text-decoration: none;
}
</style>
