<template>
  <div class="checkout">
    <div class="text">
          <h3>Оформление заказа</h3>
          <h4>Персональные данные:</h4>
    </div>
    <div class="checkout__all">
      <div>
      <CheckoutInput />
      <Delivery />
      <Address />
      <Pay />
      <Bonus />
    </div>
      <Aside />
    </div>
  </div>
</template>

<script>
import Checkbox from './CheckboxDev.vue'
import Pay from './Pay.vue'
import Address from './Address.vue'
import CheckoutInput from './CheckoutInput.vue'
import Delivery from './Delivery.vue'
import Bonus from './Bonus.vue'
import Aside from './Aside.vue'
export default {
    components:{ Checkbox, CheckoutInput, Delivery, Address, Pay, Bonus, Aside }

}
</script>

<style lang="scss" scoped>
@mixin cartStyleFt {
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
color: #252525;
}
.checkout{
    &__all{
        display: flex;
    }
    .text{
        h4{
         @include cartStyleFt; 
         margin: 30px 1195px 0 0;  
         width: 191px;
        }
        h3{
            margin: 70px 1180px 0 0;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 23px;
        color: #252525;
    }
    }
}
</style>