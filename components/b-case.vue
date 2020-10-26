<template>
  <div class="case">
    <header class="header">
      <h3 class="title">Dealing service dashboard</h3>
      <p class="description">Helps people done their job faster.</p>
    </header>
    <nuxt-image src="/case-dealing-panel.png" class="image" />
    <div class="text">Additional text or maybe slot</div>
  </div>
</template>

<style lang="postcss" scoped>
.case {
  padding: 15vh 0 15vh 0;
  color: var(--gray-600);
  text-align: center;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: 500;
}

.case:nth-child(even) {
  background-color: var(--gray-100);
}

.case(:first-child) {
  padding-top: 0;
}

.header {
  margin-bottom: var(--space-lg);
}

.title {
  margin-bottom: var(--space-sm);
  font-size: var(--text-xl);
}

.description {
  margin-bottom: var(--space-2xl);
}

.image {
  display: block;
  height: 600px;
  margin: 0 auto;
}

.text {
  margin-top: var(--space-2xl);
}
</style>
