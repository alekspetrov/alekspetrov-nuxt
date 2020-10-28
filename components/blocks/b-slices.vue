<template>
  <div>
    <section v-for="(slice, i) in slices" :key="'slice-' + i">
      <component :is="`slice-${slice.slice_type}`" :slice="slice"></component>
    </section>
  </div>
</template>

<script>
const SliceText = () => import('@/components/slices/s-text.vue')

export default {
  components: {
    SliceText,
  },
  props: {
    slices: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      SliceText,
    }
  },
  mounted() {
    console.log(this.slices)
  },
}
</script>
