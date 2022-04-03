<script setup>
import wheteIcon from "@/assets/svgs/whete-ball.svg";
import grayIcon from "@/assets/svgs/gray-ball.svg";
import baigeIcon from "@/assets/svgs/baige-ball.svg";
</script>

<template>
  <div class="ball">
    <img :src="wheteIcon" alt="" />
    <img class="ball-img" :src="grayIcon" alt="" />
    <img :src="baigeIcon" alt="" />
  </div>
</template>

<style lang="scss">
.ball{
  margin: 20px 0; 
  &-img {
  margin: 0 5px;
}
}
</style>
