<script setup>
import imageIcon from "@/assets/pngs/image1.png";
import Ball from "./Ball.vue";
import favIcon from "@/assets/pngs/favIcon.png";

const items = [
  {
    img: "https://fv20.failiem.lv/thumb_show.php?i=7kvhex8mw&view",
    title: "Белая куртка",
    new: "new",
    price: 2900,
    size: "XXS XS S M L",
  },
  {
    img: "https://fv20.failiem.lv/thumb_show.php?i=3vs9jwnr8&view",
    title: "Синее пальто",
    price: 3150,
    size: "XXS XS S",
  },
];
</script>

<template>
  <div class="image">
    <h4 class="image-h4">Весь образ</h4>
    <div class="image-content">
      <div v-for="item in items" :key="item" class="image-item">
        <img class="item-fav" :src="favIcon" alt="" />
        <img class="image-img" :src="item.img" alt="" />
        <div class="image-title">
          <span>{{ item.title }}</span>
          <p class="image-p">{{ item.new }}</p>
        </div>
        <p class="image-price">{{ item.price }} грн</p>
        <p class="image-size">{{ item.size }}</p>
        <Ball />
      </div>
    </div>
  </div>
</template>

<style>
.image {
  padding: 70px 0 0 0;
}
.image-content {
  display: flex;
}
.image-item {
  position: relative;
  margin-left: 15px;
}
.item-fav {
  position: absolute;
  top: 0;
  right: 0;
}
.image-item:first-child {
  margin: 0;
}
.image-title {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
.image-price {
  margin: 5px 0;
}
.image-p {
  font-weight: 700;
  color: #e0bea2;
  margin: 0 10px;
}
.image-h4 {
  margin: 30px 0;
  text-align: left;
  font-weight: 300;
}
.image-img {
  width: 370px;
  height: 400px;
}
</style>
