<template>
  <div class="news-block-content">
    <div class="container">
      <h2 id="news"><span class="underline-text">Новости</span></h2>
      <div class="news_list">
        <div class="news" v-for="news in this.news_list" :key="news.id">
          <h4 class="news-title">
            {{ news.title }}
          </h4>
          <div class="news-img">
            <img :src="news.img" />
          </div>
          <div class="news-line"></div>
          <p class="news-text">
            {{ news.text }}
          </p>
          <div class="news-data">
            <h5>{{ news.data }}</h5>
          </div>
          <div class="news-bttn">
            <button><p class="news-button-text">Подробнее</p></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsBlock",
  data: () => ({
    news_list: [
      {
        id: 1,
        title: "Название 1",
        img: "/icons/news-1.jpeg",
        text: "Lorem ipsum dolor sillo quae distinctio, possimus odio iure sed a quos debitis itaque dolorum rerum quisquam vero. Eaque dicta debitis provident soluta",
        data: "10 ноября 2023",
      },
      {
        id: 2,
        title: "Название 2",
        img: "/icons/news-2.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti porro, illo quae distinctio, possimus odio iure sed a quos debitis itaque dolorum rerum quisquam vero. Eaque dicta debitis provident soluta",
        data: "10 ноября 2023",
      },
      {
        id: 3,
        title: "Название 3",
        img: "/icons/news-3.jpeg",
        text: "Lorem ipsum dolor sit amet consect ed a quos debitis itaque dolorum rerum quisquam vero. Eaque dicta debitis provident soluta",
        data: "10 ноября 2023",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}

.news-block-content {
  margin-bottom: 70px;
}
button:hover {
  background: #2f4886;
}
.news-button-text {
  font-weight: 600;
}
button {
  border-radius: 10px;
  width: 341px;
  height: 50px;
  background: #2855cb;
  box-shadow: -2px 4px 11px 2px rgba(98, 11, 227, 0.19);
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  transition: all ease 0.3s;
  border: none;
  cursor: pointer;
}
.news-bttn {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
h5 {
  margin-bottom: 0.5rem;
  line-height: 1.2;
  font-weight: 700;
}
.news-text {
  margin: 20px 4px 20px 0;
  height: 151px;
  overflow: hidden;
}
.news-line {
  margin: 30px auto 0 0;
  border-width: 1px;
  border-color: #454545;
  border-style: solid;
}
section {
  position: relative;
  display: block;
}
h2 {
  text-align: left;
  margin-top: 0;
  color: #2e2e2e;
}
.news_content {
  text-align: left;
  padding-top: 80px;
}

.news-img img {
  border-radius: 0.8rem;
  height: 219px;
  margin: 20px auto 0;
}
.news-title {
  word-wrap: break-word;
  position: relative;
  font-size: 1.333em;
  line-height: 1.611em;
  letter-spacing: 1px;
  font-weight: 400;
  margin: 20px 2px 0 0;
}
.news {
  width: 33%;
  text-align: left;
  padding: 20px 28px 0 0;
  position: relative;
  flex: 1;
}
.news_list {
  display: flex;
  margin-top: 22px;
  margin-left: 50px;
}
h2 .underline-text:after {
  bottom: -6px;
}
.underline-text {
  position: relative;
  z-index: 1;
}
.underline-text:after {
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
@media screen and (max-width: 1173px) {
  .news_list {
    max-width: 950px;
  }
}
@media screen and (min-width: 960px) and (max-width: 1089px) {
  button {
    padding: 0 50px;
  }
  .news_list {
    display: flex;
    flex-direction: row;
    max-width: 900px;
  }
  .news {
    max-width: 270px;
  }
  img {
    height: auto !important;
    max-width: 300px;
    min-width: 200px;
  }
}
@media screen and (max-width: 999px) {
  img {
    height: auto !important;
    max-width: 270px;
  }
  p {
    font-size: 16px;
  }
}
@media screen and (min-width: 826px) and (max-width: 960px) {
  .news {
    max-width: 220px;
  }
  img {
    height: auto !important;
    max-width: 240px;
  }
}
@media screen and (max-width: 916px) {
  img {
    height: auto !important;
    max-width: 240px;
  }
}
@media screen and (max-width: 826px) {
  .news-title {
    font-size: 30px;
  }
  .news-text {
    height: auto;
  }
  .news {
    width: 100% !important;
    text-align: center;
    padding: 20px 0 0 0;
  }
  .news_list {
    display: block;
    flex-direction: row;
    max-width: 900px;
    margin-left: 0;
  }

  img {
    height: auto !important;
    max-width: 500px;
  }
}
@media screen and (max-width: 581px) {
  img {
    height: auto !important;
    max-width: 350px;
  }
}
@media screen and (max-width: 461px) {
  img {
    height: auto !important;
    max-width: 300px;
  }
}
@media screen and (max-width: 400px) {
  img {
    height: auto !important;
    max-width: 230px;
  }
  .news-text {
    font-size: 14px;
  }
}
</style>
