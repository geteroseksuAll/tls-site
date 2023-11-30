<template>
  <div class="feedback-container">
    <div class="feedback__content">
      <h2>Задать вопрос</h2>
      <div class="feedback_inputs">
        <p>
          Введите имя:
          <input type="text" name="name" />
        </p>
        <p>Номер телефона:</p>
        <input type="text" name="phone" />
        <p>Email:</p>
        <input type="text" name="email" />
        <p>Комментарий или вопрос:</p>
        <textarea
          name="message"
          id=""
          cols="60"
          rows="10"
          maxlength="2000"
        ></textarea>
        <div class="button-message">
          <button type="submit">Задать вопрос</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedbackPage",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.feedback-container {
  margin: 0 auto;
  width: 94%;
}

input {
  margin: 20px 0;
  width: 100%;
  padding: 12px 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background: #ededed;
}
textarea {
  background: #ededed;
  margin: 20px 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
}
button {
  text-align: center;
  border-radius: 10px;
  margin: 0 0 30px 0;
  padding: 20px 70px;
  height: auto;
  background: #2855cb;
  box-shadow: -2px 4px 11px 2px rgba(98, 11, 227, 0.19);
  color: #fff;
  font-weight: 600;
  font-size: 1.222em;
  transition: all ease 0.3s;
  border: none;
  cursor: pointer;
}
.button-message {
  text-align: center;
}
.feedback__content {
  margin: 0 auto;
  max-width: 1200px;
  text-align: left;
}
h2 {
  font-size: 2em;
  margin: 80px 0 50px 0;
}
</style>
