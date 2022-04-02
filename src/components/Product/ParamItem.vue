<script setup>
import Add from "./Add.vue";
import Desc from "./Desc.vue";
import Ball from "./Ball.vue";
</script>

<template>
  <div class="item">
    <h4 class="item-h4">Кремовое пальто</h4>
    <span class="item-price">3150 грн</span>
    <Ball />
    <p class="item-p">Цвет: Кофе с молоком меланж</p>
    <Add />
    <Desc />
  </div>
</template>

<style>
.item {
  padding: 0 50px;
  text-align: left;
}
.item-h4 {
  margin: 0 0 20px;
  font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 23px;
color: #252525;
}
.item-p {
  color: #e0bea2;
}
.item-price{
  font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #252525;
}
</style>
