<template>
<div class="header__routes">
    <ul>
        <li v-for="item in navItems" :key="item.id">
            <router-link :to="item.path">
                {{item.label}}
            </router-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
setup() {
    const navItems = [
        {
          id: 1,
          label: "NEW",
          path: "/catalog",
        },
        {
          id: 2,
          label: "КАТАЛОГ",
          path: "/catalog",
        },
        {
          id: 3,
          label: "О НАС",
          path: "/aboutus",
        }
        ]

    return { navItems }
 }
}
</script>

<style lang="scss">
.header__routes{
        margin: -40px 0 0 104px;
        ul{
        display: flex;
        }
        li{
            a{
            cursor: pointer;
            margin-right: 26px;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 21px;
            color: #FFFFFF;
            }
        }
        li a:last-child{
            margin-right: none;
        }
        li a:hover{
            color: #E0BEA2;
        }
    }
    @media (max-width:576px) {
        .header__routes{
            display: none;
        }
    }
</style>