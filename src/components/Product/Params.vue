<script setup>
import ParamItem from "./ParamItem.vue";
import paramIcon from "@/assets/pngs/ParamsImg.png";
</script>

<template>
  <div class="product-item">
    <div class="icon">
      <img :src="paramIcon" alt="" />
    </div>
    <ParamItem />
  </div>
</template>

<style>
.product-item {
  display: flex;
  height: 570px;
}
</style>
