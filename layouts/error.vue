<template>
  <div class="page">
    <div class="page-inner text-center">
      <span class="code">404</span>
      <h1 class="title text-huge">You got lost in space</h1>
      <p class="text">Sorry, this page doesn't exist!</p>
      <nuxt-link to="/" class="btn">Go back</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'clean',
}
</script>

<style lang="postcss" scoped>
.page {
  height: 100vh;
  display: flex;
  align-items: center;
  margin: auto;
}

.code {
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  color: var(--gray-400);
  font-weight: 500;
}

.title {
  margin-bottom: var(--space-xl);
  color: var(--black);
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
