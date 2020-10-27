<template>
  <div class="content-wrapper">
    <h1>{{ $prismic.asText(content.headline) }}</h1>
    <p>{{ $prismic.asText(content.body) }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try {
      const content = (await $prismic.api.getSingle('whoami')).data

      return {
        content,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
