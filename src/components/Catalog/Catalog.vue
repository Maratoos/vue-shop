<template>
  <div class="container">
     <div class="catalog">
      <Route />
      <SideTop />
      <SideLeft />
     </div>
  </div>
</template>

<script>
import SideLeft from './SideLeft.vue'
import SideTop from './SideTop.vue'
import Route from './Route.vue'
export default {
  components: { Route, SideTop, SideLeft },
  setup() {

    return {}
  }
}

</script>

<style lang="scss">

</style>




