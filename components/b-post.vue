<template>
  <article class="post">
    <h3 class="title">
      <nuxt-link :href="post.path" class="link" :to="link">{{
        $prismic.asText(post.data.title)
      }}</nuxt-link>
    </h3>
    <p class="description">
      {{ getFirstParagraph(post) }}
    </p>
    <b-meta :date="post.data.date" tag="Development" />
  </article>
</template>

<script>
import LinkResolver from '@/plugins/link-resolver'
import BMeta from '@/components/b-meta'

export default {
  components: {
    BMeta,
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
  methods: {
    getFirstParagraph(post) {
      const textLimit = 300
      const slices = post.data.body
      let firstParagraph = ''
      let haveFirstParagraph = false

      slices.map((slice) => {
        if (!haveFirstParagraph && slice.slice_type === 'paragraph') {
          slice.primary.text.forEach((block) => {
            if (block.type === 'paragraph' && !haveFirstParagraph) {
              firstParagraph += block.text
              haveFirstParagraph = true
            }
          })
        }
      })

      const limitedText = firstParagraph.substr(0, textLimit)

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...'
      } else {
        return firstParagraph
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.post:not(:last-child) {
  margin-bottom: var(--space-xl);
  padding-bottom: var(--space-xl);
  border-bottom: var(--gray-200) 1px solid;
}

.title {
  margin-bottom: var(--space-sm);
  font-size: var(--text-lg);
}

.description {
  color: var(--gray-900);
  font-size: var(--text-sm);
  line-height: 1.75;
  margin-bottom: var(--space-lg);
}
</style>
