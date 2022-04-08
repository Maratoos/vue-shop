<script setup>
import SignUp from './SignUp.vue'
import Login from './Login.vue'
import HeaderMain from '../HeaderMain/HeaderMain.vue'
import User from './User.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { user } from '../../composables/useUser'

const router = useRouter()

const pushHome = () => {
  router.push('/')
}

const showForm = ref(true)

</script>

<template>
<HeaderMain />
    <div class="container">
      <div class="auth">
        <div v-if="showForm">
       <h2>Регистрация</h2>
        <SignUp @successSignup="pushHome" />
        <h3 @click="showForm = false">Есть аккаунт?</h3>
      </div>
      <div v-else>
       <h2>Авторизация</h2>
          <Login @successLogin="pushHome" />
          <h3 @click="showForm = true">Нет аккаунта?</h3>
      </div>
      <User v-if="user" />
      </div>
    </div>
</template>

<style lang="scss" scoped>
@mixin cartStyleFt {
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
color: #252525;
font-family: 'Raleway';
}
.auth{
  margin-top: 50px;
  h2{
    @include cartStyleFt;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 30px;
  }
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