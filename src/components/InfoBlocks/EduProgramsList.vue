<template>
  <div class="programs-subblock-content">
    <div class="container">
      <div class="programs_list-header">
        <h2 id="edu_list">
          <span class="underline-text">Программы</span> обучения
        </h2>
      </div>
      <div class="programs_list-content">
        <div class="titles-list">
          <div class="title" v-for="title in titles_list" :key="title.id">
            <div
              class="title-title"
              :class="{ active: title.title == this.selected }"
              @click="this.selected = title.title"
            >
              {{ title.title }}
            </div>
          </div>
          <div class="title-img-wrap">
            <div
              class="title-img-block"
              v-for="title in titles_list"
              :key="title.id"
            >
              <img
                class="title_img"
                :class="{ visible: this.selected == title.title }"
                :src="title.img"
              />
            </div>
          </div>
          <div
            class="title-text-wrap"
            v-for="title in titles_list"
            :key="title.id"
          >
            <ul class="title-text">
              <li
                class="list_item"
                :class="{ visible: this.selected == title.title }"
              >
                <div class="list-text-head"></div>
                <p v-html="title.text1" class="list-text"></p>
              </li>
              <li
                class="list_item"
                :class="{ visible: this.selected == title.title }"
              >
                <div class="list-text-head"></div>
                <p v-html="title.text2" class="list-text"></p>
              </li>

              <li
                class="list_item"
                :class="{ visible: this.selected == title.title }"
              >
                <div class="list-text-head"></div>
                <p v-html="title.text3" class="list-text"></p>
              </li>

              <li
                class="list_item"
                :class="{ visible: this.selected == title.title }"
              >
                <div class="list-text-head"></div>
                <p v-html="title.text4" class="list-text"></p>
              </li>

              <li
                class="list_item"
                :class="{ visible: this.selected == title.title }"
              >
                <div class="list-text-head"></div>
                <p v-html="title.text5" class="list-text"></p>
              </li>

              <li
                class="list_item"
                :class="{ visible: this.selected == title.title }"
              >
                <div class="list-text-head"></div>
                <p v-html="title.text6" class="list-text"></p>
              </li>
              <li
                class="list_item"
                :class="{ visible: this.selected == title.title }"
              >
                <div class="list-text-head"></div>
                <p v-html="title.text7" class="list-text"></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramsListBlock",
  data: () => ({
    selected: "Информационные технологии",
    titles_list: [
      {
        id: 1,
        title: "Информационные технологии",
        img: "/icons/programsList-1.png",
        text1: "- Scratch <br> - Основы IT технологий",
        text2:
          "- Алгоритмизация и основы устройства ПК <br> - Основы программирования",
        text3:
          "- Профильное программирование <br> - Основные языки программирования",
        text4: "- Разработка игр",
        text5: "- Разработка приложений <br> * Подготовка к ОГЭ",
        text6: "- Разработка сайтов <br> - Веб-моделирование",
        text7:
          "- Специализированная подготовка к ЕГЭ <br>- Стратегия поступления в вуз",
      },
      {
        id: 2,
        title: "Химический",
        img: "/icons/programsList-2.png",
        text1: "- «Детская» химия <br> - Химия в истории Человечества",
        text2: "- Химия в нашей жизни <br> - Химия и экология",
        text3:
          "- Безопасная работа в химической лаборатории <br> - Химия и будущая профессия",
        text4: "- Химия и художественное творчество <br> - Бытовая химия",
        text5: "- Химия и питание <br> * Подготовка к ОГЭ",
        text6:
          "- Химия в строительстве <br> - Химия в сельском хозяйстве <br> - Химия в медицине",
        text7:
          "- Специализированная подготовка к ЕГЭ <br>- Стратегия поступления в вуз",
      },
      {
        id: 3,
        title: "Инженерный",
        img: "/icons/programsList-3.png",
        text1:
          "- Основы электроники часть 1 <br> - Основы математической физики, теория чисел",
        text2: "- Основы электроники часть 2<br> - Логика и ТРИЗ",
        text3: "- Прототипирование <br> - Интернет вещей",
        text4: "- Робототехника (продвинутый уровень, симбиоз дисциплин)",
        text5:
          "- Основы математического моделирования <br>- Основы сопромата <br> * Подготовка к ОГЭ",
        text6:
          "- Математическое моделирование по отраслям <br> - Теория механизмов и машин",
        text7:
          "- Специализированная подготовка к ЕГЭ <br>- Стратегия поступления в вуз",
      },
      {
        id: 4,
        title: "Социология и политология",
        img: "/icons/programsList-4.png",
        text1: "- Основы социологии <br> - Основы права",
        text2: "- Менеджмент <br> - Психология",
        text3:
          "- Социологические исследования <br> - Обработка социологических данных <br>- PESTLE анализ",
        text4: "- Политические институты <br>- Политический процесс",
        text5:
          "- Социальные сети <br>- Анализ социальных сетей, безопасность в соц.сетях <br> * Подготовка к ОГЭ",
        text6:
          "- Современная социология и политология <br> - Техническая этика",
        text7:
          "- Специализированная подготовка к ЕГЭ <br>- Стратегия поступления в вуз",
      },
      {
        id: 5,
        title: "Экономика и предпринимательство",
        img: "/icons/programsList-5.png",
        text1:
          "- Деньги и их происхождение, личные финансы <br> - Основы права",
        text2: "- Менеджмент, тайм-менеджмент <br> - Психология потребителей",
        text3: "- Предпринимательство <br>- Инвестиции <br>- PESTLE анализ",
        text4:
          "- SMM продвижение <br>- Личный бренд<br>- Проект от CusDev до продаж",
        text5:
          "- Математическое моделирование - Дата-сторителлинг в экономике (о чем говорят цифры) <br> * Подготовка к ОГЭ",
        text6:
          "- Специализированная подготовка к ОГЭ <br> - Стратегия поступления в СУЗ",
        text7:
          "- Специализированная подготовка к ЕГЭ <br>- Стратегия поступления в ВУЗ",
      },
      {
        id: 6,
        title: "Юридический",
        img: "/icons/programsList-6.png",
        text1: "- Личные финансы <br> - Основы права",
        text2: "- Менеджмент <br> - Психология",
        text3:
          "- Формальные правила <br> - Обычаи делового оборота <br>- PESTLE анализ",
        text4: "- Гражданское право <br>- Адвокатура<br>- Прокуратура",
        text5:
          "- Уголовное право <br>- Состязательный процесс <br> * Подготовка к ОГЭ",
        text6: "- Специальные разделы права <br> - Прецедентное право",
        text7:
          "- Специализированная подготовка к ЕГЭ <br>- Стратегия поступления в вуз",
      },
    ],
  }),
  methods: {},
};
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
}
.title-text-wrap {
  text-align: left;
}
.list-text-head {
  display: block;
  width: 17px;
  height: 17px;
  background-color: #2f4886;
  margin-top: 18px;
  margin-bottom: 16px;
  border-radius: 50%;
}
.list_item {
  display: none;
}
.list-text {
  margin: 20px 0 20px 0;
  width: 263px;
}
.title-text {
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
}
.title-img-wrap {
  position: relative;
  margin-bottom: 31px;
}
.title-img-wrap ::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1.2rem;
  background-color: rgba(47, 72, 134, 0.78);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.title-title {
  color: #2e2e2e;
  font-weight: bold;
  cursor: pointer;
}
.titles-list {
  margin: 50px 0 30px 0;
}
.programs_list-header {
  text-align: left;
}
.title-img-block {
  position: relative;
  margin-bottom: 31px;
}
.title {
  position: relative;
  font-weight: bold;
  line-height: 1.222em;
  transition: all ease 0.3s;
  margin-right: 40px;
  margin-bottom: 20px;
  :hover {
    transition: all ease 0.3s;
    color: #0676a4;
  }
  .active {
    color: #2f4886;
  }
}
@keyframes opacityChange {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.list-item {
  display: none;
  opacity: 0;
  transition: all ease 0.3s;
}
.title_img {
  margin-top: 40px;
  border-radius: 1.2rem;
  width: 100%;
  vertical-align: bottom;
  display: none;
  opacity: 0;
  transition: all ease 0.3s;
}
.title-img-block ::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1.2rem;
  background-color: rgba(47, 72, 134, 0.78);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.visible {
  animation: opacityChange 0.3s ease;
  display: block;
  opacity: 1;
}
.active::after {
  content: "";
  display: block;
  width: 100%;
  height: 12px;
  background-color: #2f4886;
  position: absolute;
  animation: 0.3s ease;
}
.titles-list {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
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
</style>
