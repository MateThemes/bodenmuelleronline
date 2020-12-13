<template>
  <div>
    <Header />
    <Herosection />
    <Servicesection />
    <Aboutsection />
    <Productssection />
    <Portfoliosection />
    <Partnersection />
    <Contactsection />
    <Footersection />
    <Privacymodalsection />
    <Imprintmodalsection />
    <CookieControl locale="de" />
  </div>
</template>

<script>
    export default {
      layout: "default",
      mounted() {
        this.$nextTick(() => {
          this.$nuxt.$loading.start()

          setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
      }
    }
</script>
