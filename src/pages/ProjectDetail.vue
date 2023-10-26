<template>
  <div class="bg-head"></div>
  <section class="project-section center">
    <div class="project">
      <h1 class="project__head">{{ getProjects.title }}</h1>
      <p class="project__dsc">{{ getProjects.dsc1 }}</p>
      <p class="project__dsc">{{ getProjects.dsc2 }}</p>
    </div>
  </section>
  <SliderComponent :slider="sliders" />
</template>

<script>
import SliderComponent from "@/components/SliderComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "ProjectDetail",
  components: {
    SliderComponent,
  },
  data() {
    return {
      sliders: [
        { img: require("../assets/img/project-detail/slider/slide1.png") },
        { img: require("../assets/img/project-detail/slider/slide1.png") },
        { img: require("../assets/img/project-detail/slider/slide1.png") },
        { img: require("../assets/img/project-detail/slider/slide1.png") },
        { img: require("../assets/img/project-detail/slider/slide1.png") },
      ],
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["getProjects"]),
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/basic";
.project-section {
  display: flex;
  justify-content: center;
}
.project {
  margin-top: 200px;
  margin-bottom: 100px;
  max-width: 658px;
  &__head {
    @include fontComponentHeader($fSHeadTwo);
  }
  &__dsc {
    @extend %dscFont;
  }
  &__dsc:last-child {
    margin-top: 25px;
  }
}
.bg-head {
  background: url("../assets/img/project-detail/bg-head.jpg") no-repeat;
  background-size: cover;
  height: 356px;
}
</style>
