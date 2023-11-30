<template>
  <div class="events-block-content">
    <div class="container">
      <div class="events-header">
        <h2>Ближайшие <span class="underline-text">события</span></h2>
      </div>
      <div class="events-list">
        <div class="event" v-for="event in this.events_list" :key="event.id">
          <div class="event-title">{{ event.title }}</div>
          <div class="event-data">
            <h4>{{ event.data }}</h4>
          </div>
          <div class="event-image">
            <img class="event-img" :src="event.img" />
          </div>

          <div class="event-bttn">
            <button><p class="events-button-text">Подробнее</p></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventsBlock",
  data: () => ({
    events_list: [
      {
        id: 1,
        title: "Мастер класс по Arduino",
        img: "https://www.clipartmax.com/png/full/117-1179524_icon-arduino-arduino-logo.png",
        data: "10 ноября 2023",
      },
      {
        id: 2,
        title: "Мастер класс по 3DBlender",
        img: "https://i.pinimg.com/originals/7a/9c/76/7a9c7615d60e69b14db4711efeca98ed.png",
        data: "10 ноября 2023",
      },
      {
        id: 3,
        title: "Мастер класс по Python",
        img: "https://www.pngmart.com/files/23/Python-Logo-PNG-Picture.png",
        data: "10 ноября 2023",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.event-title {
  overflow: hidden;
}
button {
  margin-top: 20px;
  border-radius: 10px;
  width: 317px;
  height: 40px;
  background: #2855cb;
  box-shadow: -2px 4px 11px 2px rgba(98, 11, 227, 0.19);
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  transition: all ease 0.3s;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #2f4886;
}
.event-bttn {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.event-title {
  word-wrap: break-word;
  position: relative;
  font-size: 1.333em;
  line-height: 1.611em;
  letter-spacing: 1px;
  font-weight: 400;
  margin: 20px 2px 20px 0;
}
.event-data {
  text-align: center;
  margin-bottom: 20px;
}
.events-block-content {
  text-align: left;
  margin-bottom: 70px;
}

.event-image {
  text-align: center;
  margin-bottom: 20px;
}
h2 .underline-text:after {
  bottom: -5px;
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
.event-img {
  width: 200px;
  height: 200px;
}
.event {
  min-width: 300px;
}
.events-list {
  justify-content: center;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
h2 {
  margin-bottom: 0px;
  color: #2e2e2e;
}
h4 {
  margin-bottom: 0.5rem;
  line-height: 1.2;
  font-weight: 700;
}
</style>
