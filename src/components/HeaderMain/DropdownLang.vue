<template>
  <ul>
    <div @click="handleShowDropdownFirst" class="dropdowns__arrow">
    <span>{{langItems[activeItemFirst]}}</span>
      <svg width="10" height="7" viewBox="0 0 10 7" fill="#252525" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z"/>
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
</template>

<script setup>
import { ref } from '@vue/reactivity'

  const showDropdownFirst = ref(false)
  const activeItemFirst = ref(0)

  const langItems = ['UA','RU', 'EN']

    const handleShowDropdownFirst = () => {
      showDropdownFirst.value = !showDropdownFirst.value
    }

    const handleActiveItemFirst = (index) => {
      activeItemFirst.value = index;
    }
</script>

<style>

</style>