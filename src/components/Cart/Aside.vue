<template>
  <div class="aside">
    <div class="aside__route">
      <ul>
        <li v-for="item in routeItems" :key="item.id">
          <router-link :to="item.path">
            {{item.label}}
          </router-link>  
        </li>
      </ul>   
    </div>
    <div class="aside__total">
      <div class="aside__total-set">
      <ul>
        <li v-for="item in totalSetItems" :key="item">{{item}}:</li>
      </ul>
      </div>
      <div class="aside__total-pay">
      <ul>
        <li>По тарифам перевозчика</li>
        <li>-69 грн</li>
        <li>15250 грн</li>
      </ul>
      </div>
    </div>
    <div class="aside__button">
      <button>
        <span>ОФОРМИТЬ ЗАКАЗ</span>
      </button>
    </div>
    <div class="aside__agree">
      <p>Нажимая на кнопку «оплатить заказ», я принимаю условия публичной оферты и политики конфиденциальности</p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {

    const routeItems = 
    [
      {
        id:1,
        label:'УСЛОВИЯ ДОСТАВКИ',
        path:'/payment'
      },
      {
        id:2,
        label:'УСЛОВИЯ ОБМЕНА И ВОЗВРАТА',
        path:'/return'
      },
      {
        id:3,
        label:'УСЛОВИЯ ДОСТАВКИ',
        path:'/return'
      },
    ]
    const totalSetItems = ['ДОСТАВКА', 'БОНУСЫ', 'ИТОГО']

    return { routeItems, totalSetItems }
  }

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
.aside{
  margin:0 0 0 -570px;
  &__route{
    ul{
      li{
      margin-top: 20px;
      display: flex;
      justify-content: start;
      a{
      @include cartStyleFt;
      text-decoration-line: underline;
      }
    }
    }
  }
  &__total{
    margin-top: 30px;
    display: flex;
    &-set{
      ul{
        li{
          @include cartStyleFt;
          display: flex;
          justify-content: start;
          margin-bottom: 15px;
          &:last-child{
            margin-bottom: none;
          }
        }
      }  
    }
    &-pay{
      ul{
        li{
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          color: #252525;
          display: flex;
          justify-content: end;
          margin-bottom: 15px;
          &:last-child{
            margin-bottom: none;
          }
        }
      }  
    }
  }
  &__button{
    margin-left: 42px;
    button{
      cursor: pointer;
      background-color: #e0bea2;
      border: none;
      padding: 16px 92px;
      &:hover{
      background-color: #f1ddaa;
      }
      span{
      @include cartStyleFt;
      color: white;
      }
    }
  }
  &__agree{
    margin: 15px 0 0 22px;
    justify-content: start;
    width: 300px;
    height: 48px;
    p{
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      color: #252525;
    }
  }
}
</style>