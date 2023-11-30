<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div class="dialog__content" @click.stop>
      <div class="dialog-title">Вход</div>
      <div class="dialog-login">
        <div class="login-title">Логин</div>
        <input name="username" type="text" class="login-input" />
      </div>
      <div class="dialog-login">
        <div class="login-title">Пароль</div>
        <input name="password" type="password" class="login-input" />
      </div>
      <div class="dialog-button">
        <button type="submit" class="bttn">Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DialogMenu",
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
input {
  box-sizing: border-box;
  padding: 15px;
}
.dialog {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
button {
  width: 100%;
  padding: 10px 10px;
  background: #2855cb;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  transition: 0.3s ease;
}
button:hover {
  background: #2f4886;
}
.dialog-button {
  margin-top: 30px;
  text-align: center;
}
.login-title {
  margin: 20px 0 10px 0;
  font-weight: 600;
}
.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: auto;
  min-width: 250px;
  min-height: 250px;
  padding: 50px;
}
.login-input {
  width: 100%;
  height: 30px;
  border-radius: 10px;
}
.dialog-title {
  text-align: center;
  font-size: 30px;
}
</style>
