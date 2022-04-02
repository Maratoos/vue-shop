<script setup>
import { ref } from "@vue/reactivity";


const email = ref('')
const password = ref('')
</script>

<template>
     <form>
       <h2>Регистрация</h2>
      <input v-model="email" type="email" required placeholder="Ваш e-mail*">
      <input v-model="password" type="password" required placeholder="Ваш пароль*">
    </form>
    <button>Зарегистрироваться</button>
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
form{
  h2{
    @include cartStyleFt;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 30px;
  }
  input{
    border: 0.5px solid #252525;
    box-sizing: border-box; 
    width: 400px;
    height: 50px;
    padding: 16px 0 15px 19px ;
    @include cartStyleFt;
    opacity: 0.8
      }
      input:last-child{
        margin-top: 20px;
        display: flex;
        margin-left: 400px;
      }
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

</style>