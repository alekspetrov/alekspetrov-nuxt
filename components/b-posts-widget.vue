<template>
  <article v-if="posts.length !== 0" class="latest-post">
    <div class="block-title">Latest Posts</div>
    <b-post v-for="post in limitedPosts" :key="post.id" :post="post" />
  </article>
</template>

<script>
import BPost from '@/components/b-post'

export default {
  components: {
    BPost,
  },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
    limit: { type: Number, default: 3 },
  },
  computed: {
    limitedPosts() {
      return this.posts.slice(0, this.limit)
    },
  },
}
</script>

<style lang="postcss" scoped>
.block-title {
  text-transform: uppercase;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--gray-400);
  margin-bottom: var(--space-xl);
}

.latest-post {
  margin-top: var(--space-5xl);
}
</style>
