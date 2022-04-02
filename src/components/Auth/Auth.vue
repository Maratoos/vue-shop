<template>
<HeaderMain />
    <div class="container">
      <div class="auth">
        <div v-if="showForm">
        <SignUp />
        <h3 @click="showForm = false">Есть аккаунт?</h3>
      </div>
      <div v-else>
          <Login />
          <h3 @click="showForm = true">Нет аккаунта?</h3>
      </div>
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
.auth{
  margin-top: 50px;
  h3{
    width: 120px;
    font-style: normal;
    cursor: pointer;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: underline;
    margin:30px 0 0 540px;
    color: #252525;
}
}
</style>