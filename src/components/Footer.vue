<template>
  <div class="footer">
    <div class="container" id="footer">
      <div class="footer-wrap">
        <div class="footer-info">
          <div class="footer-logo">
            <HeaderLogo />
          </div>
          <p class="footer-text">
            <span>Казань</span>
            <a class="tel" href="tel:+7 937 522 9181">+7 937 522 9181</a>
          </p>
        </div>
        <div class="footer-socials">
          <a href="https://www.instagram.com/technopolis_kai/"
            ><img src="./UI/icons/inst.png"
          /></a>
          <a href="https://vk.com/club202520532"
            ><img src="./UI/icons/vk.png"
          /></a>
        </div>
      </div>
      <p class="footer_sub">© 2023 ЦМИТ «Технополис»</p>
    </div>
  </div>
</template>

<script>
import { HeaderLogo } from "./UI";
export default {
  name: "FooterSection",
  components: { HeaderLogo },
};
</script>

<style lang="scss" scoped>
.tel:hover {
  color: #2f4886;
}
.footer_sub {
  display: block;
  margin: 0 auto;
  font-size: 0.778em;
  font-weight: 500;
  text-align: center;
}
p {
  margin-top: 20px;
  margin-bottom: 20px;
}
.footer-socials img:hover {
  scale: 1.2;
}
.footer-socials {
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;
}
img {
  cursor: pointer;
  margin-right: 20px;
}
.footer {
  color: #212529;
  padding-bottom: 70px;
}
.tel {
  outline: none;
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
}
.footer-text {
  text-align: left;
  font-weight: 500;
  font-size: 14px;
}
span {
  display: block;
  margin-bottom: 8px;
}
.footer-logo {
  margin-right: 40px;
}
.footer-info {
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 20px;
}
.footer-wrap {
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  position: relative;
  align-items: center;
  height: 125px;
}
.footer-wrap::before {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 1px;
  top: 0;
  background-color: #c2c2c2;
}
@media screen and (max-width: 500px) {
  .footer-logo {
    margin: 0;
  }
}
</style>
