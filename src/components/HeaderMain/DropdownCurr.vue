<template>
  <div class="stayhere">
    <ul>
    <div @click="handleShowDropdownSecond" class="dropdowns__arrow">
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

<script setup>
import { ref } from '@vue/reactivity'

  const showDropdownSecond = ref(false)
  const activeItemSecond = ref(0)

    const currItems = ['UAH','USD', 'EUR']

    const handleShowDropdownSecond = () => {
      showDropdownSecond.value = !showDropdownSecond.value
    }

    const handleActiveItemSecond = (index) => {
      activeItemSecond.value = index;
    }
</script>

<style>
.stayhere{
  
}
</style>