<template>
  <div class="content-wrapper main-page">
    <b-hero :content="homepage" />
    <b-posts-widget :posts="posts" />
  </div>
</template>

<script>
import BHero from '@/components/b-hero'
import BPostsWidget from '@/components/b-posts-widget'

export default {
  components: {
    BHero,
    BPostsWidget,
  },
  async asyncData({ $prismic, error }) {
    try {
      // Main Page content
      const homepage = (await $prismic.api.getSingle('homepage')).data

      // Latest blog posts (limited to 3)
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'post'),
        { orderings: '[my.post.date desc]' }
      )

      console.log(blogPosts.results)

      return {
        homepage,
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
