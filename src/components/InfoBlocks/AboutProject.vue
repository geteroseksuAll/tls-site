<template>
  <div class="about-block-content">
    <div class="container">
      <div class="about-block-header">
        <h2 id="about">
          <span class="underline-text">О проекте</span> ЦМИТ «Технополис»
        </h2>
      </div>
      <div class="about-list">
        <div class="about" v-for="about in this.about_list" :key="about.id">
          <div class="about-image">
            <img :src="about.img" />
          </div>
          <h3 class="about-h4">{{ about.h3 }}</h3>
          <p class="about-text">
            <strong class="about-strong">{{ about.strong1 }}</strong
            ><br /><span>{{ about.text1 }}</span>
          </p>
          <p class="about-text">
            <strong class="about-strong">{{ about.strong2 }}</strong
            ><br /><span>{{ about.text2 }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutBlock",
  data: () => ({
    about_list: [
      {
        id: 1,
        img: "/icons/about-1.png",
        h3: "Профили",
        strong1: "– Инженерно-технологический",
        text1: "Инженерный, ИТ, химический",
        strong2: "– Социально-экономический",
        text2:
          "Экономика и предпринимательство, юридический, социология и политология",
      },
      {
        id: 2,
        img: "/icons/about-2.png",
        h3: "Педагоги",
        strong1: "– Кураторы программ",
        text1: "Доктора и кандидаты наук (опыт преподавания от 5 лет)",
        strong2: "– Педагоги доп. образования",
        text2: "Представители вузов и предприятий",
      },
      {
        id: 3,
        img: "/icons/about-3.png",
        h3: "Наш подход  ",
        strong1: "– Проектное обучение",
        text1:
          "Дети ставят перед собой конкретные цели, получая реальные навыки и знания в процессе их достижения",
        strong2: "– Развитие soft skills",
        text2:
          "Общаясь и выступая на конференциях, дети развивают в себе необходимые навыки",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.about-block-content {
  margin: 0 0 50px 0;
}
.about-strong {
  margin-bottom: 10px;
}
.about-text {
  height: 150px;
  margin-top: 30px;
}
.about-list {
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
}
.about {
  color: #2e2e2e;
  width: 329px;
  text-align: left;
}
.about-image {
  display: flex;
  height: 250px;
  align-items: center;
}
.about-block-header {
  text-align: left;
}
h2 {
  color: #2e2e2e;
}
h2 .underline-text:after {
  bottom: -3px;
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
@media screen and (max-width: 696px) {
  .about-list {
    justify-content: center;
  }
}
</style>
