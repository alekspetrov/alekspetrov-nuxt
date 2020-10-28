<template>
  <div>
    <prismic-rich-text :field="slice.primary.text" />
  </div>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
