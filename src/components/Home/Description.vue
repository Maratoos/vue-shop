<template>
      <div class="home__desc">
        <h2>Новая коллекция</h2>
        <svg class="home__desc-first" width="120" height="1" viewBox="0 0 120 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="120" height="1" fill="white"/>
        </svg>
        <div class="home__desc-div">
        <router-link to="/catalog">
            <p>Смотреть Новинки</p>
        </router-link>
        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.88906 5L0 1.11094L1.11094 1.90735e-06L6.11094 5L1.11094 10L0 8.88907L3.88906 5Z" fill="white"/>
        </svg>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@mixin descStyle {
font-style: normal;
font-weight: 300;
color: #FFFFFF;
}
    .home__desc{
        text-align: center;
        margin: 393px 533px;
        h2{
            @include descStyle;
            font-size: 46px;
            line-height: 54px;
        }
        &-first{
            margin: 20px 0;
        }
        a p{
            @include descStyle;
            font-size: 16px;
            line-height: 19px;
            text-transform: uppercase;
        }
        &-div{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                margin-left: 7px;
            }
        }
    }
</style>