<template>
        <div class="checkout__personal">
          <form>
            <div>
            <input type="text" placeholder="Ваше имя*">
            <input type="text" placeholder="Ваша фамилия*">
            </div>
            <div>
            <input type="email" placeholder="Ваш e-mail*">
            <input type="text" placeholder="Ваш телефон*">
            </div>
          </form>
      </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@mixin cartStyleFt {
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
color: #252525;
}
    .checkout__personal{
        form{
        margin: 20px 530px 0 0;
        input{
        font-family: 'Raleway';
        margin: 0 20px 20px 0;
        border: 0.5px solid #252525;
        box-sizing: border-box; 
        width: 400px;
        height: 50px;
        padding: 16px 0 15px 19px ;
        @include cartStyleFt;
        opacity: 0.8
        }
        }
    }
</style>