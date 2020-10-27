<template>
  <article v-if="posts.length !== 0" class="latest-post">
    <div class="block-title">Latest Posts</div>
    <b-post v-for="post in posts" :key="post.id" :post="post" />
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
      type: Object,
      default: () => ({}),
    },
  },
  onMounted() {
    console.log(this.posts)
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
