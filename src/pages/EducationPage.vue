<template>
  <div class="education__content">
    <div class="texts_list">
      <div class="text" v-for="text in text_list" :key="text.id">
        <h1 class="text-title">{{ text.title }}</h1>
        <p class="text-text">{{ text.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationPage",
  data() {
    return {
      text_list: [
        {
          id: 1,
          title: "Обучение в нашем центре",
          text: "Наши занятия и мастер-классы помимо главного здания проходят в Школах и Лицеях . На этих занятиях дети знакомятся с чем то новым , обучаются современным направлениям в области электроники программирования и 3D",
        },
        {
          id: 2,
          title: "Школы-партнеры ",
          text: "Наши занятия и мастер-классы помимо главного здания проходят в Школах и Лицеях . На этих занятиях дети знакомятся с чем то новым , обучаются современным направлениям в области электроники программирования и 3D",
        },
        {
          id: 3,
          title: "Мастер классы в лагерях",
          text: "Наши занятия и мастер-классы помимо главного здания проходят в Школах и Лицеях . На этих занятиях дети знакомятся с чем то новым , обучаются современным направлениям в области электроники программирования и 3D",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.education__content {
  max-width: 1200px;
  margin: 50px auto;
}
.texts_list {
  max-width: 60%;
}
h1 {
  margin: 20px 0;
}
</style>
