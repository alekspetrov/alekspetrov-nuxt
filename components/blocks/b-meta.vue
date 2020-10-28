<template>
  <p class="meta">
    <time class="date" :datetime="date">{{ humanReadableDate }}</time>
    in
    <a href="#" class="link tag">{{ tag }}</a>
  </p>
</template>

<script>
export default {
  name: 'BMeta',
  props: ['date', 'tag'],
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
</style>
