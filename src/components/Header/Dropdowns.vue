<template>
<div class="dropdown">
  <DropdownLang />
  <DropdownCurr />
</div>
</template>

<script setup>
import DropdownLang from './DropdownLang.vue'
import DropdownCurr from './DropdownCurr.vue'

</script>

<style lang="scss">
@mixin dropdownStyle {
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
}
.dropdown{
  position: absolute;
  top: 20px;
  right: 380px;
  display: flex;
  &__arrow{
    cursor: pointer;
    span{
    @include dropdownStyle;
    color: #FFFFFF;
    }
    svg{
      margin: 0 0 3px 9px
    }
  }
  li{
  @include dropdownStyle;
  color: #FFFFFF;
  cursor: pointer;
  border-top: 1px solid #E0BEA2;
  padding: 2px 0 0 0;
  }
  li.active{
    color: #E0BEA2;
  }
}
@media (max-width:576px) {
  .dropdown{
    top: -1px;
    right: 280px;
  }
}

</style>