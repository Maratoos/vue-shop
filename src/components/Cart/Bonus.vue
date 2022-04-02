<template>
<div class="bonus">
    <p>Использование бонусного счёта:</p>
    <form>
        <input type="text" placeholder="Сумма списания бонусов*">
    </form>
</div>
</template>

<script>
export default {

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
.bonus{
    p{
    @include cartStyleFt;
    display: flex;
    justify-content: start;
    margin-left: 5px;
    }
    form{
        margin: 20px 530px 0 0;
        input{
        margin: 0 20px 20px 0;
        border: 0.5px solid #252525;
        box-sizing: border-box; 
        width: 820px;
        height: 50px;
        padding: 16px 0 15px 19px ;
        @include cartStyleFt;
        opacity: 0.8
        }
        }
}

</style>