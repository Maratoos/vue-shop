<template>
<h3>Способ доставки:</h3>
  <div class="delivery">
    <div class="delivery__uk">
      <div class="inukr">
      <h5>По Украине:</h5>
      <div class="check">
          <Checkbox />
      </div>
      </div>
      <div class="method">
          <h4 v-for="item in ukDelivery" :key="item">{{item}}</h4>
      </div>
    </div>
    <div class="delivery__int">
            <div class="inint">
      <h5>Международная доставка:</h5>
      <div class="check">
          <Checkbox />
      </div>
      </div>
      <div class="method">
        <h4 v-for="item in intDelivery" :key="item">{{item}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from './CheckboxDev.vue'
export default {
components:{ Checkbox },
setup() {

    const ukDelivery = ['Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)', 'Новая Почта']
    const intDelivery = ['Украпочта / 1-3 недели / 30$', 'DHL / 3-7 дней / 60$']

    return{
    ukDelivery,
    intDelivery
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
.delivery{
    display: flex;
    margin-left: -20px;
    &__uk{
        display: flex;
        .inukr{
            h5{
            @include cartStyleFt;
            margin: 20px 0 20px 8px;
            }
            .check{
                margin-right: 95px;
            }
        }
        .method{
            h4{
                @include cartStyleFt;
                margin: 60px 0 0 -90px;
                width: 372px;
            }
            h4:last-child{
                margin: 40px 0 0 -220px;
            }
        }
    }
    &__int{
        display: flex;
        .inint{
            h5{
            @include cartStyleFt;
            margin: 20px 0 20px 15px;
            }
            .check{
                margin-right: 195px;
            } 
        }
        .method{
            h4{
                @include cartStyleFt;
                margin: 60px 0 0 -260px;
                width: 372px;
            }
            h4:last-child{
                margin: 60px 0 0 -290px;
            }
        }
    }
}

</style>