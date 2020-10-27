<template>
  <div class="page content-wrapper">
    <header class="header">
      <h1 class="title text-large">
        {{ $prismic.asText(document.title) }}
      </h1>
      <p class="subtitle">{{ $prismic.asText(document.description) }}</p>
      <b-meta :date="document.date" tag="Design" class="meta" />
    </header>
    <article class="article">
      <img :src="image" alt="" />
      <p v-html="document.description[0].text"></p>
      <p v-html="document.description[0].text"></p>
    </article>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Blog',
    }
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
  margin-bottom: var(--space-xl);
  color: var(--gray-900);
}

.meta {
  margin-bottom: var(--space-xl);
}
</style>
