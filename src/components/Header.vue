<template>
  <div class="header">
    <div class="container">
      <nav class="header-menu">
        <HeaderMenuButton class="header-menu-mob-bttn bttn" />
        <HeaderLogo />
        <HeaderMenu class="header-text-p" />
        <HeaderButtons />
      </nav>
      <HeaderMenuMob class="header-menu-mob" />
    </div>
  </div>
</template>

<script>
import {
  HeaderButtons,
  HeaderMenu,
  HeaderLogo,
  HeaderMenuMob,
  HeaderMenuButton,
} from "./UI";
export default {
  name: "HeaderSection",
  components: {
    HeaderButtons,
    HeaderMenu,
    HeaderLogo,
    HeaderMenuMob,
    HeaderMenuButton,
  },
  methods: {
    showDialogue() {
      this.dialogueVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1240px) {
  .container {
    min-width: 1200px;
  }
}
.header {
  min-height: 91px;
  background-color: #fff;
  display: -webkit-box;
  display: flex;
  align-items: center;
  color: #212529;
  box-shadow: -2px 4px 11px 2px rgba(0, 0, 0, 0.19);
  position: relative;
  z-index: 20;
}
.header-menu-mob-bttn {
  display: none;
  cursor: pointer;
}
.container {
  width: 94%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 705px) {
  .header-text-p {
    display: none;
  }
}
.header-menu-mob {
  display: none;
}
@media screen and (max-width: 705px) {
  .header {
    height: 120px;
  }
  .header-menu {
    margin-bottom: 20px;
  }
  .header-menu-mob {
    display: flex;
  }
}
@media screen and (max-width: 517px) {
  .header-menu-mob-bttn {
    display: block;
  }
  .header {
    height: 91px;
  }
  .bttn {
    cursor: pointer;
    text-align: left;
    font-size: 25px;
  }
  .header-menu-mob {
    display: none;
  }
}
</style>
