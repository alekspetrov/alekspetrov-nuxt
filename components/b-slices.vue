<template>
  <div>
    <section v-for="(slice, i) in slices" :key="'slice-' + i">
      <template v-if="slice.slice_type === 'paragraph'">
        <b-slice-text :slice="slice" />
      </template>
    </section>
  </div>
</template>

<script>
const BSliceText = () => import('../components/b-slice-text.vue')

export default {
  components: {
    BSliceText,
  },
  props: {
    slices: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
