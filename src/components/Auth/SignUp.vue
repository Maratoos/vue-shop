<script setup>
import { ref } from "@vue/reactivity";
import { signup } from '../../composables/useSignup'

const email = ref('')
const password = ref('')

const successSignup = defineEmits(['successSignup'])

const handleSubmit = async () => {
  const { error } = await signup(email.value,password.value);

  if(!error.value) {
    successSignup('successSignup')
  } else {
    console.log(error.value);
  }
}
</script>

<template>
     <form @submit.prevent="handleSubmit">
      <input v-model="email" type="email" required placeholder="Ваш e-mail*">
      <input v-model="password" type="password" required placeholder="Ваш пароль*">
      <button>Зарегистрироваться</button>
    </form>
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
    
  input{
    border: 0.5px solid #252525;
    box-sizing: border-box; 
    width: 400px;
    height: 50px;
    padding: 16px 0 15px 19px ;
    @include cartStyleFt;
    opacity: 0.8;
    margin-right: 20px;
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