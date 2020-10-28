<template>
  <header class="header">
    <h1 class="title text-large">
      {{ title }}
    </h1>
    <p class="subtitle">{{ description }}</p>
    <block-meta :date="date" :tag="tag" class="meta" />
  </header>
</template>

<script>
import BlockMeta from '@/components/blocks/b-meta'

export default {
  components: {
    BlockMeta,
  },
  props: {
    title: {
      type: String,
      default: 'Untitled',
    },
    description: {
      type: String,
      default: null,
    },
    date: {
      type: [Number, String],
      default: () => Date.now(),
    },
    tag: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="postcss" scoped>
.header {
  margin-bottom: var(--space-4xl);
}

.title {
  margin-top: var(--space-2xl);
  margin-bottom: var(--space-xl);
  line-height: 1.12;
}

.subtitle {
  font-size: var(--text-lg);
  font-family: var(--font-sans);
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: var(--space-xl);
  color: var(--gray-900);
}

.meta {
  margin-bottom: var(--space-xl);
}
</style>
