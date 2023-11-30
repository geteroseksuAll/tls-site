<template>
  <div class="mob-burger-menu">
    <div class="header-dialogue-button" @click="showDialogue">☰</div>
    <BurgerMenuMob v-model:show="dialogueVisible"></BurgerMenuMob>
  </div>
</template>

<script>
import BurgerMenuMob from "../InfoBlocks/BurgerMenuMob.vue";

export default {
  name: "HeaderMenuButton",
  data() {
    return {
      dialogueVisible: false,
    };
  },
  methods: {
    showDialogue() {
      this.dialogueVisible = true;
    },
  },
  components: { BurgerMenuMob },
};
</script>

<style lang="scss" scoped>
.mob-burger-menu {
  display: none;
}
@media screen and (max-width: 517px) {
  .mob-burger-menu {
    display: block;
  }
}
</style>
