<template>
  <HeaderMain />
  <div class="container">
    <CatalogSide />
  </div>
</template>

<script>
import HeaderMain from '../components/HeaderMain/HeaderMain.vue'
import CatalogSide from '../components/Catalog/CatalogSide.vue'
export default {
components:{ HeaderMain, CatalogSide }
}
</script>

<style>
.container{
  display: flex;
  justify-content: start;
  margin-left: 90px;
}
</style>