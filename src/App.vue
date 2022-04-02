<template>
  <router-view/>
  <Footer />
</template>

<script>
import Footer from './components/Footer/Footer.vue'
export default {
  components:{ Footer }
  
}
</script>

<style lang="scss">
#app {
  font-family: 'Raleway';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.container{
  width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}
h1,h2,h3,h4,h5,h6,p{
  margin: 0;
}
</style>
