<template>
  <div>
    <component
      :is="`slice-${slice.slice_type}`"
      v-for="(slice, i) in slices"
      :key="'slice-' + i"
      :slice="slice"
    ></component>
  </div>
</template>

<script>
const SliceText = () => import('@/components/slices/s-text.vue')
const SliceImage = () => import('@/components/slices/s-image.vue')

export default {
  components: {
    SliceText,
    SliceImage,
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
      SliceImage,
    }
  },
  mounted() {
    console.log(this.slices)
  },
}
</script>
