<template>
  <div>
    <section v-for="(slice, i) in slices" :key="'slice-' + i">
      <component :is="`b-slice-${slice.slice_type}`" :slice="slice"></component>
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
  data() {
    return {
      BSliceText,
    }
  },
  mounted() {
    console.log(this.slices)
  },
}
</script>
