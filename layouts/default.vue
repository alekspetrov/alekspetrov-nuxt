<template>
  <div class="shell" :class="{ 'dark-theme': darkTheme }">
    <shell-header @switch-theme="toggleTheme" />
    <shell-body>
      <Nuxt />
    </shell-body>
    <shell-footer />
  </div>
</template>

<script>
import ShellHeader from '@/components/shell/g-header'
import ShellFooter from '@/components/shell/g-footer'
import ShellBody from '@/components/shell/g-body'

export default {
  components: {
    ShellHeader,
    ShellFooter,
    ShellBody,
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
