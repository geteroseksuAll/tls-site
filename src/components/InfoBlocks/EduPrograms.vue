<template>
  <div class="programs-block-content">
    <div class="container">
      <div class="programs-header">
        <h2 id="edu">
          Образовательные <span class="underline-text">программы</span>
        </h2>
      </div>
      <div class="programs-list">
        <div
          v-for="program in this.programs_list"
          :key="program.id"
          class="program"
          :style="{ background: 'url(' + program.url + ') no-repeat' }"
          @click="scroll()"
        >
          <h3 class="program-category">{{ program.category }}</h3>
          <p class="program-text">{{ program.text }}</p>
        </div>
      </div>
      <div class="events-bttn">
        <button><p class="news-button-text">Подробнее</p></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramsBlock",
  data: () => ({
    ref: null,
    programs_list: [
      {
        id: 1,
        url: "icons/programs-1.png",
        category: "1-4 классы",
        text: "Учёба с удовольствием – проведём занятия в игровой форме и поможем найти новое хобби",
      },
      {
        id: 2,
        url: "icons/programs-2.png",
        category: "5-9 классы",
        text: "Оценки станут лучше – расскажем как подтянуть знания по предметам и подготовиться к олимпиаде",
      },
      {
        id: 3,
        url: "icons/programs-3.png",
        category: "10-11 классы",
        text: "Бюджетное место в вузе мечты – поможем повторить школьную программу и подготовиться к экзаменам",
      },
      {
        id: 4,
        url: "icons/programs-4.png",
        category: "Учителя",
        text: "Повышение квалификации – поможем получить новые знания, обновить план урока и вовлечь всех учеников в учебный процесс",
      },
      {
        id: 5,
        url: "icons/programs-5.png",
        category: "Обучение студентов",
        text: "Проводим обучение студентов для дальнейшего трудоустройства, подготовка к сессии",
      },
      {
        id: 6,
        url: "icons/programs-6.png",
        category: "Разработка программ",
        text: 'Индивидуальное и корпоративное обучения "под ключ" по желаниям заказчика',
      },
    ],
  }),
  methods: {
    scroll() {
      let elem = document.getElementById("edu_list");
      elem.scrollIntoView(true);
    },
  },
};
</script>

<style lang="scss" scoped>
.program-text {
  margin-left: 15px;
}
button {
  border-radius: 8px;
  padding: 15px 60px;
  background: #2855cb;
  box-shadow: -2px 4px 11px 2px rgba(98, 11, 227, 0.19);
  color: #fff;
  font-weight: 600;
  font-size: 1.222em;
  transition: all ease 0.3s;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #2f4886;
}
.events-bttn {
  display: flex;
  justify-content: center;
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
.programs-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
h3 {
  font-weight: bold;
  font-size: 1.333em;
  line-height: 1.611em;
  margin: 20px 0 26px 15px;
}
h2 {
  color: #2e2e2e;
  margin-bottom: 30px;
}
.program {
  width: 362px;
  border-radius: 9px;
  margin-right: 24px;
  height: 276px;
  color: #fff;
  margin-bottom: 26px;
  cursor: pointer;
}
.program:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

ul,
li {
  list-style-type: none;
}
.programs-block-content {
  margin: 0 auto 50px auto;
  text-align: left;
}
@media screen and (max-width: 804px) {
  .program {
    position: relative;
    height: 234px;
    width: auto;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center !important;
  }
}
</style>
