<template>
<div class="header__routes">
    <ul>
        <li v-for="item in routeItems" :key="item.id">
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
    const routeItems = [
        {
          id: 1,
          label: "NEW",
          path: "/new",
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

    return { routeItems }
 }
}
</script>

<style lang="scss" scoped>
.header__routes{
    padding: 34px 120px 0 0;
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
            color: #252525;
            }
        }
        li a:last-child{
            margin-right: none;
        }
        li a:hover{
            color: #E0BEA2;
        }
    }
</style>