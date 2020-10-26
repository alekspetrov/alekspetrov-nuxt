<template>
  <div class="content-wrapper main-page">
    <div class="banner">
      <div>
        <h1 class="title text-huge">
          {{ $prismic.asText(homepage.headline) }}
        </h1>
        <prismic-rich-text :field="homepage.description" class="text" />
        <div class="contact-links">
          <article v-for="(link, i) in links" :key="i">
            <a :href="link.link.url" class="link-cta contact-me">
              <component :is="link.icon[0].text"></component>
              <span>{{ link.title[0].text }}</span>
            </a>
          </article>
        </div>
      </div>
    </div>
    <div v-if="posts.length !== 0" class="latest-post">
      <div class="block-title">Latest Posts</div>
      <b-post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import IconMail from '@/components/icons/icon-mail'
import IconTwitter from '@/components/icons/icon-twitter'
import BPost from '@/components/b-post'

export default {
  components: {
    IconMail,
    IconTwitter,
    BPost,
  },
  head() {
    return {
      title: 'Designer, Coder, Product Manager',
    }
  },
  data() {
    return {
      IconMail,
      IconTwitter,
    }
  },
  async asyncData({ $prismic, error }) {
    try {
      const homepage = (await $prismic.api.getSingle('homepage')).data

      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'post'),
        { orderings: '[my.post.date desc]' }
      )

      return {
        homepage,
        posts: blogPosts.results,
        links: homepage.links,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style lang="postcss" scoped>
.banner {
  margin-top: var(--space-6xl);
  padding-bottom: var(--space-2xl);
  border-bottom: 1px solid var(--gray-200);
}

.title {
  margin-bottom: var(--space-lg);
}

.text {
  color: var(--gray-900);
  font-size: var(--text-md);
  line-height: 2;
  margin-bottom: var(--space-2xl);
}

.contact-links {
  display: flex;
}

.contact-links > *:not(:last-child) {
  margin-right: var(--space-lg);
}

.contact-me {
  display: flex;
  align-items: center;

  &:hover {
    color: var(--black);
  }
}

.contact-me svg {
  transition: transform 0.26s;
  margin-right: var(--space-sm);
}

.contact-me:hover svg {
  transform: rotate(-12deg);
}

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
