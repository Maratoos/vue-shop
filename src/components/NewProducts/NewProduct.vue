<template>
  <div class="input">
      <div class="input__text">
          <h1>Узнайте  первым о новинках</h1>
      </div>
      <div class="input__email">
          <input type="email" required placeholder="Ваш e-mail*" >
      </div>
      <button class="active">ПОДПИСАТЬСЯ</button>
      <p>Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
@mixin inputStyle{
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
}
.input {
    margin-top: 100px;
    &__text{
       h1{
        font-weight: 300;
        font-size: 36px;
        line-height: 42px;
        color: #252525;
        }
    }
    &__email {
        margin-top: 30px;
        input{
        @include inputStyle;
        font-weight: 200;
        text-align: center;
        color: rgba(37, 37, 37, 0.5);
        height: 60px;
        width: 599px;
        font-size: 20px;  
        background: #FFFFFF; 
        border: 0.5px solid #252525;
        opacity: 0.5;
        box-sizing: border-box;    
        border-radius: 1px;  
        padding: 15px; 
        margin: 12px;
        }
    }
    button {
        @include inputStyle;
        border: 0;
        font-weight: 300;
        color: #FFFFFF;
        width: 600px;
        height: 50px;
        background: #E0BEA2;
        cursor: pointer;
    }
    button:hover{
        background: #f1ddaa;
    }
    p{
        @include inputStyle;
        margin-top: 30px;
        font-weight: 200;
        color: #252525;
        margin-left: 30%;
        width: 40%;
    }
}
</style>