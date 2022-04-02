<template>
<HeaderMain />
    <div class="container">
      <div v-if="showForm">
        <SignUp />
        <h3 @click="showForm = false">Есть аккаунт?</h3>
      </div>
      <div v-else>
          <Login />
          <h3 @click="showForm = true">Нет аккаунта?</h3>
      </div>
    </div>
</template>

<script setup>
import SignUp from './SignUp.vue'
import Login from './Login.vue'
import HeaderMain from '../HeaderMain/HeaderMain.vue'
import { ref } from '@vue/reactivity'

const showForm = ref(true)

</script>

<style lang="scss" scoped>
h3{
    margin:20px 0 0 68%;
    width: 120px;
    font-style: normal;
    cursor: pointer;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: underline;
    color: #252525;
}
</style>