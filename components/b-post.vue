<template>
  <article class="post">
    <h3 class="title">
      <a :href="post.path" class="link">{{ post.title }}</a>
    </h3>
    <p class="description">
      {{ post.description }}
    </p>
    <b-meta :date="post.date" :tag="post.tag" />
  </article>
</template>

<script>
import BMeta from '@/components/b-meta'

export default {
  props: ['post'],
  components: {
    BMeta,
  },
}
</script>

<style lang="postcss" scoped>
.post:not(:last-child) {
  margin-bottom: var(--space-xl);
  padding-bottom: var(--space-xl);
  border-bottom: var(--gray-200) 1px solid;
}

.title {
  margin-bottom: var(--space-md);
}

.description {
  color: var(--gray-900);
  font-size: var(--text-md);
  line-height: 1.75;
  margin-bottom: var(--space-lg);
}
</style>
