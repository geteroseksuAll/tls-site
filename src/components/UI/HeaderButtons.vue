<template>
  <div class="header_buttons">
    <button class="bttn input_header_button" @click="showDialog">Вход</button>
    <DialogMenu v-model:show="dialogVisible"> </DialogMenu>
    <button class="bttn questions_header_button" @click="messagePagePath">
      Задать вопрос
    </button>
  </div>
</template>

<script>
import DialogMenu from "../InfoBlocks/DialogMenu.vue";
export default {
  name: "HeaderButtons",
  components: { DialogMenu },
  data: () => ({
    dialogVisible: false,
  }),
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    messagePagePath() {
      this.$router.push("./feedback");
    },
  },
};
</script>

<style lang="scss" scoped>
.bttn {
  cursor: pointer;
}
.input_header_button:hover {
  border-color: #2f4886;
  color: #2f4886;
}
.questions_header_button:hover {
  background-color: #2f4886;
}

.header_buttons {
  margin: 0;
  padding: 0;
}
.input_header_button {
  border-radius: 0.7rem;
  width: 5rem;
  margin-right: 30px;
  transition: all ease 0.3s;
  border: 2px solid #212529;
  background: #fff;
}
.questions_header_button {
  border: none;
  border-radius: 0.7rem;
  width: 7rem;
  margin-right: 1px;
  background: #2855cb;
  transition: all ease 0.3s;
  color: #fff;
}
.bttn {
  height: 40px;
  font-size: 0.778em;
  font-weight: 700;
}

@media screen and (max-width: 833px) {
  .input_header_button {
    width: 112px;
    margin-right: 0;
  }
  .header_buttons {
    width: 115px;
  }
}
@media screen and (max-width: 705px) {
  .header_buttons {
    margin: 0;
    padding: 0;
  }
  .header_buttons {
    width: auto;
    display: flex;
    justify-content: space-between;
  }
  .input_header_button {
    width: 5rem;
    margin-right: 30px;
  }
}
@media screen and (max-width: 517px) {
  .input_header_button {
    width: 60px;
    font-size: 12px;
    margin-right: 0;
  }
  .questions_header_button {
    font-size: 12px;
  }
}
</style>
