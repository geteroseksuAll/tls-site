<template>
  <div>
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
  name: "AuthLayout",
};
</script>

<style lang="scss" scoped></style>
