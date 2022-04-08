<template>
      <div class="home__bg">
        <img :src="bg" alt="">
    </div>
</template>

<script>
import bg from '@/assets/pngs/bg.png'
export default {
setup() {


    return { bg }
}
}
</script>

<style lang="scss">
    .home__bg{
    img{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
      }
    }
    @media (max-width:576px) {
      .home__bg{
        img{
          
        }
      }
    }
</style>