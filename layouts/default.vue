<template>
  <div class="shell" :class="{ 'dark-theme': darkTheme }">
    <g-header @switch-theme="toggleTheme" />
    <g-body>
      <Nuxt />
    </g-body>
    <g-footer />
  </div>
</template>

<script>
import GHeader from '@/components/g-header'
import GFooter from '@/components/g-footer'
import GBody from '@/components/g-body'

export default {
  components: {
    GHeader,
    GFooter,
    GBody,
  },
  data() {
    return {
      darkTheme: false,
    }
  },
  mounted() {
    this.darkTheme = JSON.parse(localStorage.getItem('darkTheme'))
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme
    },
  },
}
</script>

<style lang="postcss" scoped>
.shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
}
</style>
