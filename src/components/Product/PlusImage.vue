<script setup>
import imageIcon from "@/assets/pngs/image1.png";
import Ball from "./Ball.vue";
import favIcon from "@/assets/pngs/favIcon.png";

const items = [
  {
    img: "https://instagram.ffru7-1.fna.fbcdn.net/v/t51.2885-15/271332003_1259514674556870_579644425494082335_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.ffru7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=alBGTMoIB8EAX-yhrDp&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc0NDU0NTg1NzYyODM3Nzk3Mw%3D%3D.2-ccb7-4&oh=00_AT8oqKfMEnqb7I77M881DYky1_KZxjJogmpHnNmxSGcDWA&oe=62463DE7&_nc_sid=30a2ef",
    title: "Белая куртка",
    new: "new",
    price: 2900,
    size: "XXS XS S M L",
  },
  {
    img: "https://instagram.ffru7-1.fna.fbcdn.net/v/t51.2885-15/272184988_718909922847891_2010446396995250568_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.ffru7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=8zxlhQ3WJO8AX9xfknn&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc1NjAxNTQyMjA2NTM1NTA3Mg%3D%3D.2-ccb7-4&oh=00_AT8NaPSWewobxWE4UaiaKNgjGQcBq26hkVBjrzBJAQw07A&oe=624614D6&_nc_sid=30a2ef",
    title: "Синее пальто",
    price: 3150,
    size: "XXS XS S",
  },
  {
    img: "https://instagram.ffru7-1.fna.fbcdn.net/v/t51.2885-15/271332003_1259514674556870_579644425494082335_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.ffru7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=alBGTMoIB8EAX-yhrDp&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc0NDU0NTg1NzYyODM3Nzk3Mw%3D%3D.2-ccb7-4&oh=00_AT8oqKfMEnqb7I77M881DYky1_KZxjJogmpHnNmxSGcDWA&oe=62463DE7&_nc_sid=30a2ef",
    title: "Белая куртка",
    new: "new",
    price: 2900,
    size: "XXS XS S M L",
  },
  {
    img: "https://instagram.ffru7-1.fna.fbcdn.net/v/t51.2885-15/272184988_718909922847891_2010446396995250568_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.ffru7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=8zxlhQ3WJO8AX9xfknn&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc1NjAxNTQyMjA2NTM1NTA3Mg%3D%3D.2-ccb7-4&oh=00_AT8NaPSWewobxWE4UaiaKNgjGQcBq26hkVBjrzBJAQw07A&oe=624614D6&_nc_sid=30a2ef",
    title: "Синее пальто",
    price: 3150,
    size: "XXS XS S",
  },
];
</script>

<template>
  <div class="image">
    <h4 class="image-h4">Дополните образ</h4>
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

<style scoped>
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
  width: 275px;
  height: 300px;
}
</style>
