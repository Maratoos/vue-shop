<template>
<div class="dropdown">
  <ul>
    <div @click="handleShowDropdownFirst" class="dropdown__arrow">
    <span>{{langItems[activeItemFirst]}}</span>
      <svg width="10" height="7" viewBox="0 0 10 7" fill="#252525" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z" />
</svg>
    </div>
   <div v-if="showDropdownFirst">
      <li
      :class="{active: activeItemFirst === index}"
       @click="handleActiveItemFirst(index)"
      v-for="(langItem,index) in langItems"
      :key="langItem">{{langItem}}</li>
   </div>
  </ul>
  <ul>
    <div @click="handleShowDropdownSecond" class="dropdown__arrow">
    <span>{{currItems[activeItemSecond]}}</span>
      <svg width="10" height="7" viewBox="0 0 10 7" fill="#252525" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z" />
</svg>
    </div>
   <div  v-if="showDropdownSecond">
      <li
      :class="{active: activeItemSecond === index}"
      @click="handleActiveItemSecond(index)"
       v-for="(currItem, index) in currItems"
      :key="currItem">{{currItem}}</li>
   </div>
  </ul>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
setup() {
  const showDropdownFirst = ref(false)
  const showDropdownSecond = ref(false)
  const activeItemFirst = ref(0)
  const activeItemSecond = ref(0)

    const langItems = ['RU','UA', 'EN']
    const currItems = ['UAH','USD', 'EUR']

    const handleShowDropdownFirst = () => {
      showDropdownFirst.value = !showDropdownFirst.value
    }
    const handleShowDropdownSecond = () => {
      showDropdownSecond.value = !showDropdownSecond.value
    }
    const handleActiveItemFirst = (index) => {
      activeItemFirst.value = index;
    }
    const handleActiveItemSecond = (index) => {
      activeItemSecond.value = index;
    }


    return{langItems,  currItems, showDropdownFirst, showDropdownSecond, handleShowDropdownFirst, handleShowDropdownSecond, activeItemFirst,
     handleActiveItemFirst, activeItemSecond, handleActiveItemSecond}
}
}
</script>

<style lang="scss" scoped>
@mixin dropdownStyle {
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
}
.dropdown{
  padding: 34px 75px 0 0;
  position: absolute;
  top: 0;
  right: 350px;
  display: flex;
  &__arrow{
    cursor: pointer;
    span{
    @include dropdownStyle;
    color: #252525;
    }
    svg{
      margin: 0 0 3px 9px
    }
  }
  li{
  @include dropdownStyle;
  color: #252525;
  cursor: pointer;
  border-top: 1px solid #E0BEA2;
  padding: 2px 0 0 0;
  }
  li.active{
    color: #252525;
  }
}

</style>