<template>
<div class="home">
    <Header />
    <Background />
    <Description />
    <Swiper />
    <NewProduct />
</div>
</template>

<script>
import Header from '../Header/Header.vue'
import NewProduct from '../NewProducts/NewProduct.vue'
import Swiper from './Swiper.vue'
import Background from './Background.vue'
import Description from './Description.vue'
export default {
  components: { Header, NewProduct, Swiper, Background, Description }
}

</script>

<style>

</style>