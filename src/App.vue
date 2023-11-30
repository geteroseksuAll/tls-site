<template>
  <component :is="layout"> </component>
</template>

<script>
import AppLayout from "@/layouts/AppLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

export default {
  name: "App",
  components: { AppLayout, AuthLayout },
  computed: {
    layout() {
      return "AppLayout";
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
}

body {
  font-family: "Inter", sans-serif;
  letter-spacing: 0.05em;
  color: #2e2e2e;
  font-size: 18px;
}
</style>
