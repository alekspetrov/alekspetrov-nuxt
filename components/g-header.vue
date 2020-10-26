<template>
  <header class="wrapper header">
    <nuxt-link to="/" class="logo">
      <icon-triangle />
    </nuxt-link>
    <nav class="nav">
      <nuxt-link class="nav__link" to="/whoami">Whoami</nuxt-link>
      <nuxt-link class="nav__link" to="/cases">Cases</nuxt-link>
      <nuxt-link class="nav__link" to="/magazine">Magazine</nuxt-link>
    </nav>
    <theme-switcher @onSwitch="$emit('switch-theme')" />
  </header>
</template>

<script>
import ThemeSwitcher from '@/components/theme-switcher'
import IconTriangle from '@/components/icons/icon-triangle'

export default {
  name: 'GHeader',
  components: {
    ThemeSwitcher,
    IconTriangle,
  },
}
</script>

<style lang="postcss" scoped>
.header {
  grid-row: 1;
  grid-column: 1 / 13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-sans);
  padding-top: var(--space-md);
  padding-bottom: var(--space-md);
}

.header img {
  display: block;
}

.logo {
  transition: transform 0.28s;
}

.logo:hover {
  transform: rotate(30deg);
}

.nav__link {
  display: inline-block;
  font-weight: 500;
  text-decoration: none;
}

.nav__link:not(:first-child) {
  margin-left: var(--space-lg);
}
</style>
