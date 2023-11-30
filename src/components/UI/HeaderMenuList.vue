<template>
  <div class="header-menu-list">
    <a href="#news">
      <p class="header-link">Новости</p>
    </a>
    <a href="#about">
      <p class="header-link">О проекте</p>
    </a>
    <a href="#edu">
      <p class="header-link">Образование</p>
    </a>
    <p class="header-link" @click="educationPagePath">Обучение</p>
    <a href="#footer">
      <p class="header-link">Контакты</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
  setup() {
    return {};
  },
  methods: {
    educationPagePath() {
      this.$router.push("./our-learning");
    },
  },
};
</script>

<style lang="scss" scoped>
.header-menu-list {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
p {
  color: rgb(33, 37, 41);
  font-size: 0.889em;
  line-height: 1.056em;
  transition: all ease 0.3s;
  cursor: pointer;
  font-weight: 600;
  outline: none;
}
p:hover {
  color: #2855cb;
}
@media screen and (max-width: 1028px) {
  p {
    font-size: 14px;
    padding-right: 10px;
  }
  .header-menu-list {
    width: auto;
  }
}
@media screen and (max-width: 705px) {
}
@media screen and (max-width: 903px) {
}
</style>
