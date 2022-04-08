<template>
      <div class="header__menu">
        <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="34" height="4" fill="white"/>
<rect y="10" width="26" height="4" fill="white"/>
<rect y="20" width="18" height="4" fill="white"/>
</svg>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .header__menu{
        display: flex;
        justify-content: start;
        padding-top: 33px;
        svg{
            cursor: pointer;
        }
    }
    @media (max-width:576px) {
        .header__menu{
            margin-top: -25px;
            svg{
                width: 34px;
                height: 24px;
            }
        }
    }
    
</style>