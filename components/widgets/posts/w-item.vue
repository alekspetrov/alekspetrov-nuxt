<template>
  <article class="post">
    <h3 class="title">
      <nuxt-link :href="post.path" class="link" :to="link">
        {{ $prismic.asText(post.data.title) }}
      </nuxt-link>
    </h3>
    <p class="description">
      {{ $prismic.asText(post.data.description) }}
    </p>
    <block-meta :date="post.data.date" tag="Development" />
  </article>
</template>

<script>
import LinkResolver from '@/plugins/link-resolver'
import BlockMeta from '@/components/blocks/b-meta'

export default {
  components: {
    BlockMeta,
  },
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      link: '',
    }
  },
  created() {
    this.link = LinkResolver(this.post)
  },
}
</script>

<style lang="postcss" scoped>
.post:not(:last-child) {
  margin-bottom: var(--space-3xl);
}

.title {
  margin-bottom: var(--space-sm);
  font-size: var(--text-lg);
}

.description {
  color: var(--gray-900);
  font-size: var(--text-base);
  line-height: 1.75;
  margin-bottom: var(--space-lg);
}
</style>
