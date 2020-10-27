<template>
  <div class="shell" :class="{ 'dark-theme': darkTheme }">
    <g-body>
      <Nuxt />
    </g-body>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false,
    }
  },
  mounted() {
    this.darkTheme = JSON.parse(localStorage.getItem('darkTheme'))
  },
}
</script>

<style lang="postcss" scoped>
.shell {
  background-color: var(--white);
}
</style>
