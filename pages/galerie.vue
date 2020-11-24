<template>
  <div>
    <Headergallery />
    <Galleryintro />
    <Gallerycontent1 />
    <Footersection />
    <Privacymodalsection />
    <Imprintmodalsection />
    <CookieControl locale="de" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>
