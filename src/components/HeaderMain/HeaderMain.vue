<template>
  <div class="container">
    <Menu />
    <Nav />
    <Logo />
    <Dropdowns />
    <Icons />
  </div>
</template>

<script>
import Dropdowns from './Dropdowns.vue'
import Nav from './Nav.vue'
import Icons from './Icons.vue'
import Menu from './Menu.vue'
import Logo from './Logo.vue'
export default {
    components:{ Dropdowns, Nav, Icons, Menu, Logo },
 setup() {

    return {
    }
 }
}
</script>

<style lang="scss" scoped>

</style>