<template>
  <div class="container">
    <div class="news-block">
      <NewsBlock />
    </div>
    <div class="events-block" id="events">
      <EventsBlock />
    </div>
    <div class="programs-block">
      <ProgramsBlock />
    </div>
    <div class="about-block">
      <AboutBlock />
    </div>
    <div class="recomendation-block">
      <RecomendationBlock />
    </div>
    <div class="programs_list-block">
      <ProgramsListBlock />
    </div>
  </div>
</template>

<script>
import NewsBlock from "./InfoBlocks/News.vue";
import EventsBlock from "./InfoBlocks/UpcommingEvents.vue";
import ProgramsBlock from "./InfoBlocks/EduPrograms.vue";
import AboutBlock from "./InfoBlocks/AboutProject.vue";
import RecomendationBlock from "./InfoBlocks/Recomendations.vue";
import ProgramsListBlock from "./InfoBlocks/EduProgramsList.vue";
export default {
  name: "MainInfoBlock",
  data() {
    return {
      dialogVisible: false,
    };
  },
  setup() {
    return {};
  },
  components: {
    NewsBlock,
    EventsBlock,
    ProgramsBlock,
    AboutBlock,
    RecomendationBlock,
    ProgramsListBlock,
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 80px 20px 0px 20px;
  max-width: 1240px;
  margin: 0 auto;
}
</style>
