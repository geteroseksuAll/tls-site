<template>
  <div class="mob-header-menu_list">
    <p class="header-link">Новости</p>
    <p class="header-link">О проекте</p>
    <p class="header-link">Образование</p>
    <p class="header-link">Обучение</p>
    <p class="header-link">Контакты</p>
  </div>
</template>

<script>
export default {
  name: "HeaderMenuMob",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.mob-header-menu_list {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 600px) {
  .mob-header-menu_list {
    p {
      margin-right: 10px;
      font-size: 14px;
    }
  }
}
</style>
