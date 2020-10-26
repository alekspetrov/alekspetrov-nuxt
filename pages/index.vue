<template>
  <div class="grid-12">
    <div class="banner">
      <div>
        <h1 class="title text-huge">Aleksei Petrov</h1>
        <p class="text">
          Designer, Coder and Product Manager based in Europe. Currently working
          in Fintech for
          <strong><a href="https://libertex.com/">LiertexGroup</a></strong>
        </p>
        <a href="mailto:hello@alekspetrov.com" class="link-cta contact-me">
          <icon-mail />
          <span> Contact me </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import IconMail from '~/components/icons/icon-mail'

export default {
  components: {
    IconMail,
  },
  metaInfo: {
    title: 'Designer, Coder, Product Manager',
  },
}
</script>

<style lang="postcss" scoped>
.title {
  margin-bottom: var(--space-lg);
}

.text {
  color: var(--gray-900);
  font-size: var(--text-md);
  line-height: 2;
  margin-bottom: var(--space-2xl);
}

.contact-me {
  display: inline-flex;
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
