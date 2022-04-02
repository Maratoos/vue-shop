<script setup>
import { ref } from "@vue/reactivity";

const showMore = ref(false);

const handleClickShowMore = () => {
  showMore.value = !showMore.value;
};

const mores = [
  {
    composition: "Состав: 50% Шерсть, 50% Полиэстер",
  },
  {
    insulation: "Утеплитель: 90% Пух, 10% Перо",
  },
  {
    Lining: "Подкладка: 100% Полиэстер",
  },
  {
    id: 1,
    description: "- Не стирать",
  },
  {
    id: 2,
    description: "- Гладить при температуре утюга до 110°C",
  },
  {
    id: 3,
    description: "- Сухая чистка (химчистка)",
  },
  {
    id: 4,
    description: "- Барабанная сушка запрещена",
  },
];
</script>

<template>
  <div class="desc">
    <h4 class="desc-h4">Подробности</h4>
    <div @click="handleClickShowMore" class="subtitle">
      <p class="subtitle-p">Обмеры и описание</p>
      <svg
        :class="{ active: showMore === true }"
        class="subtitle-svg"
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
      <div v-if="showMore" class="desc-content">
        <div v-for="item in mores" :key="item.id" class="desc-description">
          <p>{{ item.composition }}</p>
          <p>{{ item.insulation }}</p>
          <p>{{ item.Lining }}</p>
        </div>
        <div class="desc-description-div">
          <span v-for="item in mores" :key="item.id">{{
            item.description
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.desc-h4 {
  margin-bottom: 20px;
}
.subtitle {
  position: relative;
  border-bottom: 0.3px solid #252525;
  margin-top: 40px;
}
.subtitle-p {
  cursor: pointer;
  margin-bottom: 10px;
}
.subtitle-svg {
  position: absolute;
  top: 0;
  right: 15px;
  transform: rotate(0);
}
.subtitle-svg.active {
  transform: rotate(180deg);
}
.desc-description-div {
  margin: 25px 0 20px 0;
  display: flex;
  flex-direction: column;
}
</style>
