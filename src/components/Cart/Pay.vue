<template>
<h3>Вы можете оплатить покупку одним из ниже перечисленных способов:</h3>
  <div class="pay">
    <div class="pay__real">
      <div class="realpay">
      <div class="check">
          <Checkbox />
      </div>
      </div>
      <div class="method">
          <h4 v-for="item in realpay" :key="item.id">{{item.label}}
            <a :href="item.path">
                <img :src="item.src" alt="">
            </a>
          </h4>
      </div>
    </div>
    <div class="pay__transfer">
    <div class="transferpay">
      <div class="check">
          <Checkbox />
      </div>
      </div>
      <div class="method">
        <h4 v-for="item in transferpay" :key="item.id">{{item.label}}
            <a :href="item.path">
                <img :src="item.src" alt="">
            </a>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import private24 from '@/assets/svgs/private24.svg'
import visa from '@/assets/svgs/visa.svg'
import mastercard from '@/assets/svgs/mastercard.svg'
import Checkbox from './CheckboxDev.vue'
export default {
components:{ Checkbox },
setup() {

    const realpay = [
        {
        id:1,
        label: 'Полная предоплата через Приват 24',
        src:private24,
        path:"https://next.privat24.ua/"
        },
        {
        id:2,
        label:'Наложенным платежом в отделении Новой Почты',
        src:'',
        path:''
        }]
    const transferpay = [
        {
        id:1,
        label: 'Денежным переводом Visa',
        src:visa,
        path:"https://cis.visa.com/ru_TJ/visa-in-kyrgyzstan.html"
        },
        {
        id: 2,
        label:'Денежным переводом MasterCard',
        src:mastercard,
        path:"http://cards.rsk.kg/ru/master-card/Mastercard_Standard_detskiy"
        }]

    return{
    realpay,
    transferpay,
    mastercard,
    visa,
    private24
    }
}
}
</script>

<style lang="scss" scoped>
@mixin cartStyleFt {
font-family: 'Raleway';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
color: #252525;
}
h3{
@include cartStyleFt;
display: flex;
justify-content: start;
margin-left: 8px;
}
.pay{
    display: flex;
    margin-left: -20px;
    &__real{
        display: flex;
        .realpay{
            .check{
                margin-right: 95px;
            }
        }
        .method{
            h4{
                @include cartStyleFt;
                margin: 15px 0 0 -120px;
                width: 372px;
            }
            h4:last-child{
                margin: 55px 0 0 -105px;
            }
        }
    }
    &__transfer{
        display: flex;
        .transferpay{
            .check{
                margin-right: 195px;
            } 
        }
        .method{
            h4{
                @include cartStyleFt;
                margin: 15px 0 0 -240px;
                width: 372px;
            }
            h4:last-child{
                margin: 60px 0 0 -225px;
            }
        }
    }
}

</style>