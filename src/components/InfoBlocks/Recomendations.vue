<template>
  <div class="recomendations-block-content">
    <h2><span class="underline-text">Почему мы?</span></h2>
    <div class="recomendations-list">
      <div
        class="recomendation"
        v-for="recomendation in recomendations_list"
        :key="recomendation.id"
      >
        <div class="recomendation-list-content">
          <div class="recomendation-img">
            <img :src="recomendation.img" />
          </div>
          <h4 class="recomendation-bold">{{ recomendation.text1 }}</h4>
          <div class="recomendation-thin">{{ recomendation.text2 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecomendationsBlock",
  data: () => ({
    recomendations_list: [
      {
        id: 1,
        img: "icons/recomendations-1.png",
        text1: "Индивидуальная траектория обучения",
        text2:
          "Каждый обучающийся имеет возможность выбора специализации и формы обучения.",
      },
      {
        id: 2,
        img: "icons/recomendations-2.png",
        text1: "Индивидуальная траектория обучения",
        text2:
          "Комплекс профориентационных мероприятий на базе вузов и предприятий.Инновационные программы обучения.",
      },
      {
        id: 3,
        img: "icons/recomendations-3.png",
        text1: "Реализация знаний",
        text2:
          "Фундаментальное образование, связь теории и практики.Консультация и поддержка при поступлении.",
      },
      {
        id: 4,
        img: "icons/recomendations-4.png",
        text1: "Результаты",
        text2: "Проектное обучение.Развиваем soft skills.",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.recomendation-thin {
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 500;
  line-height: 1.222em;
  height: 124px;
}
.recomendation-list-content {
  width: 368px;
  text-align: center;
  box-shadow: -2px 4px 11px 2px rgba(30, 30, 30, 0.19);
  border-radius: 17px;
  background-color: #fff;
  padding: 59px 10px 20px 11px;
}
img {
  height: 80px;
}
.recomendation {
  width: 35%;
  margin-bottom: 55px;
}
.recomendations-block-content {
  text-align: left;
  h2 {
    color: #2e2e2e;
    font-weight: bold;
    font-size: 2em;
    margin-bottom: 50px;
  }
}
.recomendations-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
h2 .underline-text:after {
  bottom: -3px;
}
h4 {
  margin-top: 31px;
  margin-bottom: 11px;
  font-weight: bold;
}
.underline-text {
  position: relative;
  z-index: 1;
}
.underline-text:after {
  content: "";
  width: 102%;
  left: -1%;
  height: 15px;
  background-color: #f87a5e;
  position: absolute;
  display: block;
  z-index: -1;
  transform: skewX(20deg);
}
@media screen and (max-width: 1028px) {
  .recomendation {
    width: 70%;
    min-width: 300px;
  }
  .recomendation-list-content {
    width: auto;
  }
}
</style>
