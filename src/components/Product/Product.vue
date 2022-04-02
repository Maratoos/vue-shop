<script setup>
import HeaderMain from "../HeaderMain/HeaderMain.vue";
import Params from "./Params.vue";
import Image from "./Image.vue";
import PlusImage from "./PlusImage.vue";
import Route from './Route.vue'
</script>

<template>
  <div class="product">
    <HeaderMain />
    <div class="container">
      <Route />
      <Params />
      <div>
        <Image />
      </div>
      <div>
        <PlusImage />
        <PlusImage />
      </div>
      <div>
        <Image />
      </div>
    </div>
  </div>
</template>

<style>
.container {
  width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}
</style>
