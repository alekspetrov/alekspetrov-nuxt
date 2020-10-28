<template>
  <figure class="figure">
    <prismic-image class="image" :field="slice.primary.image"></prismic-image>
    <prismic-rich-text class="caption" :field="slice.primary.caption" />
  </figure>
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

<style lang="postcss" scoped>
.figure {
  margin-bottom: var(--space-xl);
}

.caption {
  color: var(--gray-400);
  font-size: var(--text-sm);
  font-family: var(--font-sans);
}

@media screen and (min-width: 760px) {
  .figure {
    & img {
      max-width: calc(100% + 16vw);
      margin-left: calc(16vw / 2 * -1);
    }
  }
}
</style>
