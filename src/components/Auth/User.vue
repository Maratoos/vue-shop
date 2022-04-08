<script setup>
import { useRouter } from 'vue-router'; 
import useLogout from '../../composables/useLogout'
import { user } from '../../composables/useUser'

const { error, logout } = useLogout()
const router = useRouter()

const handleLogout = async () => {
    await logout()

    if(!error.value) {
        router.push('/')
    } else{
        console.log(error.value);
    }
}
</script>

<template>
<div class="user">
    <p>Вы вошли в аккаунт с почтой {{user.email}}, хотите выйти?</p>
    <button @click="handleLogout">Выйти</button>
</div>
</template>

<style lang="scss">
@mixin cartStyleFt {
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
color: #252525;
font-family: 'Raleway';
}
.user{
    margin-top: 50px;
  p{
    @include cartStyleFt;
  }
    button{
      text-transform: uppercase;
      width: 400px;
      height: 50px;
      @include cartStyleFt;
      color: #FFFFFF;
      margin:20px 0 0 0;
      cursor: pointer;
      background-color: #e0bea2;
      border: none;
      &:hover{
      background-color: #f1ddaa;
    }
    }
}
</style>