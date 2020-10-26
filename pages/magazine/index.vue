<template>
  <article class="grid-12">
    <header class="header">
      <h1 class="title text-huge">Magazine</h1>
    </header>
    <section class="content">
      <!--
      <b-post
        v-for="edge  $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
      -->
      <b-post
        :post="{
          path: '/',
          title: 'Post title',
          description: 'Description',
          date: '11/11/2020',
        }"
      />
    </section>
    <aside class="sidebar">
      <ul class="list tag-list">
        <li><a href="#" class="active">All</a></li>
        <li><a href="#">Design</a></li>
        <li><a href="#">Development</a></li>
        <li><a href="#">Product Management</a></li>
        <li><a href="#">Marketing</a></li>
        <li><a href="#">Teamleading</a></li>
      </ul>
    </aside>
  </article>
</template>

<script>
import BPost from '@/components/b-post'

export default {
  components: {
    BPost,
  },
  metaInfo: {
    title: 'Magazine',
  },
}
</script>

<style lang="postcss" scoped>
.header {
  grid-column: 1 / 12;
  margin-top: var(--space-2xl);
  margin-bottom: calc(var(--space-2xl) * 2);
}

.content {
  grid-column: 1 / 8;
}

.sidebar {
  grid-column: 10 / 12;
}

.tag-list {
  font-family: var(--font-sans);
  font-weight: 500;
  text-decoration: none;
}

.tag-list a {
  color: var(--gray-400);
  text-decoration: none;
}

.tag-list a:hover {
  color: var(--red);
}

.tag-list .active {
  color: var(--black);
}
</style>
