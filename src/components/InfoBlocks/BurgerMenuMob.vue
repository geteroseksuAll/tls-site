<template>
  <div class="burger-menu-mob" v-if="show">
    <div class="burger-menu">
      <a class="hide-button" @click.stop="hideDialog">×</a>
      <div class="burger-text-list">
        <div
          class="burger-text"
          v-for="text in texts"
          :key="text.id"
          @click.stop="hideDialog"
        >
          <a :href="text.a">{{ text.text }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BurgerMenuMob",
  data() {
    return {
      texts: [
        { text: "Новости", a: "#news" },
        { text: "О проекте", a: "#about" },
        { text: "Образование", a: "#edu" },
        { text: "Обучение", a: "#news" },
        { text: "Контакты", a: "#footer" },
      ],
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.burger-text {
  font-size: 36px;
  margin: 30px;
}
.hide-button {
  width: 100%;
  margin-left: 10px;
  font-size: 50px;
  color: #818181;
}
.burger-text-list {
  margin-top: 100px;
  color: #818181;
  text-align: center;
}
.burger-menu {
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  position: fixed;
  display: block;
  background: rgb(0, 0, 0, 0.9);
  height: 100%;
  width: 100%;
}
</style>
