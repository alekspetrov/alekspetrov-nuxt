<template>
  <p class="meta" :class="size">
    <time class="date" :datetime="date">{{ humanReadableDate }}</time>
    <template v-if="tag">
      in
      <a href="#" class="link tag">{{ tag }}</a>
    </template>
  </p>
</template>

<script>
export default {
  name: 'BMeta',
  props: ['date', 'tag', 'size'],
  computed: {
    humanReadableDate() {
      const date = new Date(this.date)
      const options = {
        day: 'numeric',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
      }
      return date.toLocaleDateString('en-US', options).replace(/^\S+\s/, '')
    },
  },
}
</script>

<style lang="postcss" scoped>
.meta {
  font-size: var(--text-sm);
  font-family: var(--font-sans);
}

.medium {
  font-size: var(--text-base);
}
</style>
