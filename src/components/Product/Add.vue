<script setup>
import { ref } from "@vue/reactivity";

const showSize = ref(null);
const sizes = ["Размер XXXS", "Размер XXS", "Размер S", "Размер M", "Размер L"];
</script>

<template>
  <div class="add">
    <div class="add-content">
      <div class="add-input">
        <input
          @click="sizes[showSize]"
          type="type"
          placeholder="Выберите размер"
          class="choose"
        />
        <svg
          class="choose-svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 9.88903L12.8891 5.99997L14 7.11091L9 12.1109L4 7.11091L5.11094 5.99997L9 9.88903Z"
            fill="#E0BEA2"
          />
        </svg>
      </div>
      <div class="add-buttons">
        <button class="ad-basket">
          <router-link to="/cart">
            <span>В КОРЗИНУ</span>
          </router-link>
        </button>
        <button class="add-favorites">
          <svg
            class="favorites-svg"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.50061 1.14671C9.26233 -0.435007 11.9848 -0.382508 13.682 1.31771C15.3785 3.01868 15.437 5.72763 13.859 7.49459L7.49911 13.8635L1.14073 7.49459C-0.437237 5.72763 -0.377988 3.01418 1.31773 1.31771C3.01645 -0.380258 5.73365 -0.437257 7.50061 1.14671ZM12.62 2.37744C11.495 1.25096 9.68007 1.20521 8.50259 2.26269L7.50136 3.16118L6.49938 2.26344C5.31816 1.20446 3.50694 1.25096 2.37896 2.37894C1.26148 3.49642 1.20523 5.28514 2.23496 6.46711L7.49986 11.7403L12.7648 6.46786C13.7952 5.28514 13.739 3.49867 12.62 2.37744Z"
              fill="#E0BEA2"
            />
          </svg>

          <p>В ИЗБРАННОЕ</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.add {
  padding: 15px 0;
}
.add-content {
  position: relative;
}
.add-input input{
font-family: 'Raleway';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 19px;
color: #252525;
}
.choose {
  padding: 15px 335px 15px 20px;
}
.choose-svg {
  position: absolute;
  right: 20px;
  top: 15px;
}
.choose-svg:active {
  transform: rotate(180deg);
}
.add-buttons {
  padding: 20px 0;
}
.ad-basket {
  cursor: pointer;
  background-color: #e0bea2;
  border: none;
  padding: 15px 85px;
  margin-right: 20px;
}
.ad-basket:hover {
  background-color: #f1ddaa;
}
.ad-basket span {
  color: white;
}
.add-favorites {
  position: relative;
  cursor: pointer;
  background-color: #fff;
  padding: 15px 77px;
  border: 1px solid black;
}
.add-favorites:hover {
  background-color: #f5f5f5;
}
.favorites-svg {
  position: absolute;
  left: 45px;
}
</style>
