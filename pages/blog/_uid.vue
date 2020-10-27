<template>
  <div class="page content-wrapper">
    <b-blog-header
      :title="$prismic.asText(document.title)"
      :description="$prismic.asText(document.description)"
    />
    <article class="article">
      <img :src="image" alt="" />
      <b-slices :slices="slices"></b-slices>
    </article>
  </div>
</template>

<script>
import BBlogHeader from '@/components/b-blog-header'
import BSlices from '@/components/b-slices'

export default {
  components: {
    BBlogHeader,
    BSlices,
  },
  async asyncData({ $prismic, params, error }) {
    try {
      const post = (await $prismic.api.getByUID('post', params.uid)).data

      return {
        document: post,
        slices: post.body,
        image: post.image.url,
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
