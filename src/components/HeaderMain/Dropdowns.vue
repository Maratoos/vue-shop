<template>
<div class="dropdowns">
  <DropdownLang />
  <DropdownCurr />
</div>
</template>

<script setup>
import DropdownCurr from './DropdownCurr.vue'
import DropdownLang from './DropdownLang.vue'

</script>

<style lang="scss">
@mixin dropdownStyle {
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
}
.dropdowns{
  padding: 20px 75px 0 0;
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