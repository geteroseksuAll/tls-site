<template>
  <div class="content">
    <div class="container">
      <div class="content__top">
        <div class="content__head">
          <h1><span class="underline_text">«Технополис»</span></h1>
          <p class="content__underheader">
            Центр молодежного <br />инновационного творчества
          </p>
          <div class="content__head-bttns">
            <a href="#edu"
              ><button id="programs" class="blue-bttn">
                Программы обучения
              </button></a
            >
            <a href="" class="details">Подробнее >></a>
          </div>
        </div>
        <div class="content__tagline-wrap">
          <p class="content__tagline">
            Раскройте весь потенциал своего ребенка!
          </p>
        </div>
      </div>
      <div class="content-bottom">
        <p class="content__list-head">Мы сотрудничаем:</p>
        <ul class="content_list">
          <li class="content_list_footer">
            <a href="https://kai.ru"><img src="./UI/icons/content-1.png" /></a>
          </li>
          <li class="content_list_footer">
            <a href="https://www.kstu.ru"
              ><img src="./UI/icons/content-2.png"
            /></a>
          </li>
          <li class="content_list_footer">
            <a href="https://www.tisbi.ru/"
              ><img src="./UI/icons/content-3.png"
            /></a>
          </li>
          <li class="content_list_footer">
            <a href="https://rhc.aero/structure/kazanskiy-vertoletnyy-zavod"
              ><img src="./UI/icons/content-4.png"
            /></a>
          </li>
          <li class="content_list_footer">
            <a href="https://zavod-elecon.ru/"
              ><img src="./UI/icons/content-5.png"
            /></a>
          </li>
          <li class="content_list_footer">
            <a href="https://icl.ru/"><img src="./UI/icons/content-7.png" /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentBlock",
  methods: {
    typing() {
      var elem = document.querySelector(".content__tagline");
      elem.textContent = "";
      var text = "Раскройте весь потенциал своего ребенка!";
      var count = 0;
      var speed = 75;
      var length = text.length;
      function character(start, end, text) {
        return text.substring(start, end);
      }
      function type() {
        var char = character(count, count + 1, text);
        if (count == 8 || count == 23) {
          elem.append(char);
        } else elem.append(char);
        count++;
        if (count < length) setTimeout(type, speed);
        else return;
      }
      type();
    },
  },
  mounted: function () {
    this.typing();
  },
};
</script>

<style lang="scss" scoped>
.details:hover {
  color: #2f4886;
}
.blue-bttn:hover {
  background-color: #2f4886;
}
.content_list_footer :hover {
  scale: 1.1;
}
.content_list_footer {
  display: inline;
}
.content_list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
ul {
  margin-top: 40px;
  margin-bottom: 40px;
}
ul,
li {
  list-style-type: none;
}
@media screen and (max-width: 1240px) {
  .container {
    width: 94%;
  }
}
@keyframes printed-text {
  from {
    width: 0;
  }
}
a {
  color: #2855cb;
  text-decoration: none;
  font-weight: 700;
}
p {
  margin-top: 20px;
  margin-bottom: 20px;
}
.content__tagline-wrap {
  margin-top: 30px;
  font-size: 1.5em;
  color: #2e2e2e;
  width: 400px;
  line-height: 57px;
}
.blue-bttn {
  border-radius: 10px;
  margin-right: 27px;
  width: 304px;
  height: 71px;
  background: #2855cb;
  box-shadow: -2px 4px 11px 2px rgba(98, 11, 227, 0.19);
  color: #fff;
  font-weight: 600;
  font-size: 1.222em;
  transition: all ease 0.3s;
  border: none;
  cursor: pointer;
}
.content__tagline {
  font-weight: 600;
  font-size: 1.4em;
  background-color: #fff;
  box-shadow: -4px 0 0 #fff, 4px 0 0 #fff;
  display: inline;
  width: 100%;
}
.content__underheader {
  font-weight: 600;
  font-size: 2em;
}
.content__top {
  flex-wrap: wrap;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 139px;
}
.content {
  text-align: left;
  color: #2e2e2e;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  padding-top: 137px;
  padding-bottom: 112px;
  position: relative;
  background-image: url("./UI/grounds/content-bg.png");
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 20px;
}
.underline_text {
  position: relative;
  z-index: 1;
}
.underline_text:after {
  content: "";
  width: 102%;
  left: -1%;
  height: 18px;
  background-color: #f87a5e;
  position: absolute;
  display: block;
  z-index: -1;
  transform: skewX(20deg);
}
h1 .underline_text:after {
  bottom: 3px;
}
h1 {
  font-size: 4.611em;
  font-weight: 800;
  margin-bottom: 12px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
@media screen and (max-width: 661px) {
  h1 {
    font-size: 60px;
  }
  .content__underheader {
    font-size: 25px;
  }
  .content__tagline {
    font-size: 25px;
  }
  .container {
    padding: 0;
  }
}
@media screen and (max-width: 515px) {
  h1 {
    font-size: 45px;
  }
  .blue-bttn {
    font-size: 18px;
    height: auto;
    padding: 10px 0;
    width: 50%;
  }
}
</style>
