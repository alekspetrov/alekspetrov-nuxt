<template>
  <div class="banner">
    <div>
      <h1 class="title text-huge">
        {{ $prismic.asText(content.headline) }}
      </h1>
      <prismic-rich-text :field="content.description" class="subtitle" />
      <div class="contact-links">
        <article v-for="(link, i) in content.links" :key="i">
          <a :href="link.link.url" class="link-cta contact-me">
            <component :is="link.icon[0].text"></component>
            <span>{{ link.title[0].text }}</span>
          </a>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import IconMail from '@/components/icons/icon-mail'
import IconTwitter from '@/components/icons/icon-twitter'

export default {
  components: {
    IconMail,
    IconTwitter,
  },
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      IconMail,
      IconTwitter,
    }
  },
}
</script>

<style lang="postcss">
.banner {
  margin-top: var(--space-6xl);
  padding-bottom: var(--space-2xl);
}

.title {
  margin-bottom: var(--space-lg);
}

.subtitle {
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
</style>
