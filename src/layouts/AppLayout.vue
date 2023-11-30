<template>
  <div class="container">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: { Header, Footer },
  name: "AppLayout",
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1240px) {
  .container {
    max-width: 1240px;
  }
}

main {
  background: url(../components/UI/icons/main-bg.png) no-repeat bottom center;
  background-size: cover;
}
</style>
