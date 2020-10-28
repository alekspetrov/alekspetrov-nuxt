<template>
  <div class="content-wrapper main-page">
    <block-hero :content="content" />
    <widget-posts :posts="posts" />
  </div>
</template>

<script>
import BlockHero from '@/components/blocks/b-hero'
import WidgetPosts from '@/components/widgets/posts/w-list'

export default {
  components: {
    BlockHero,
    WidgetPosts,
  },
  async asyncData({ $prismic, error }) {
    try {
      // Main Page content
      const content = (await $prismic.api.getSingle('homepage')).data

      // Latest blog posts (limited to 3)
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'post'),
        { orderings: '[my.post.date desc]' }
      )

      return {
        content,
        posts: blogPosts.results,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return {
      title: 'Designer, Coder, Product Manager',
    }
  },
}
</script>
