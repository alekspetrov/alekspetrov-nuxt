<template>
  <prismic-rich-text :field="slice.primary.text" class="text" />
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss">
/* Should be global during render there is no tags inside prismic-rich-text */

/* purgecss start ignore */
.text {
  color: var(--gray-900);
  font-size: var(--text-md);
  line-height: 1.75;

  & strong {
    display: inline-block;
  }

  & p + p {
    margin-top: var(--space-xl);
  }

  & ul,
  & ol {
    margin-bottom: var(--space-xl);
  }

  & li {
    &:not(:last-child) {
      margin-bottom: var(--space-sm);
    }
  }

  & h3 {
    margin-top: var(--space-2xl);
    margin-bottom: var(--space-xl);
    font-weight: 500;
  }
}

/* purgecss stop ignore */
</style>
