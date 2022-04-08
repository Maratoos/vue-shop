<template>
  <div class="swiper">
    <h3>Категории</h3>
    <div class="swiper__images">
        <router-link to="/product">
            <img v-for="swiperItem in swiperItems" :key="swiperItem"  :src="swiperItem.src" alt="">
        </router-link>
    </div>
  </div>
</template>

<script>
import jacket from '@/assets/pngs/jacket.png'
import sheshenam from '@/assets/pngs/sheshenam.png'
import furcoat from '@/assets/pngs/furcoat.png'
import parks from '@/assets/pngs/parks.png'
export default {
setup() {


    const swiperItems = [
        {
        src:jacket
        },
        {
        src:sheshenam
        },
        {
        src:furcoat
        },
        {
        src:parks
        },
    ]
   

    return { swiperItems,}
}
}
</script>

<style lang="scss">
.swiper{

    h3{
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 42px;     
    color: #252525;
    margin: 100px 0 50px 0;
    }
    &__images{
        img{
            margin-right: 15px;
        }
    }
}
</style>