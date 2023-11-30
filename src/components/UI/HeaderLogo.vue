<template>
  <div class="logo" @click="mainPagePath">TLS</div>
</template>

<script>
export default {
  name: "HeaderLogo",
  setup() {
    return {};
  },
  methods: {
    mainPagePath() {
      this.$router.push("./");
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  outline: none;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
.logo:hover {
  color: #2855cb;
}
@media screen and (max-width: 705px) {
  .logo {
    font-size: 34px;
    margin-right: 50px;
  }
}
@media screen and (max-width: 400px) {
  .logo {
    font-size: 34px;
    margin-right: 20px;
  }
}
@media screen and (max-width: 375px) {
  .logo {
    margin-right: 0;
    font-size: 30px;
  }
}
</style>
