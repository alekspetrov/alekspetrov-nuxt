<template>
  <article class="page content-wrapper">
    <blog-header
      :title="$prismic.asText(document.title)"
      :description="$prismic.asText(document.description)"
    />
    <block-slices :slices="slices"></block-slices>
  </article>
</template>

<script>
import BlogHeader from '@/components/blocks/b-blog-header'
import BlockSlices from '@/components/blocks/b-slices'

export default {
  components: {
    BlogHeader,
    BlockSlices,
  },
  async asyncData({ $prismic, params, error }) {
    try {
      const post = (await $prismic.api.getByUID('post', params.uid)).data

      return {
        document: post,
        slices: post.body,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return {
      title: 'Blog',
    }
  },
}
</script>
