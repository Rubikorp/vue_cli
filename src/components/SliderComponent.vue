<template>
  <div class="center">
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :zoom="true"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(slide, index) in slider" :key="index">
        <div class="swiper-zoom-container">
          <img :src="slide.img" class="img-swiper" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper/modules";

export default {
  name: "SliderComponent",
  props: {
    slider: Object,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    };
  },
};
</script>
<style scoped lang="scss">
@import "../assets/styles/basic";

.img-swiper {
  max-height: 799px;
  width: 100%;
  object-fit: cover;
  border-radius: 70px;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  overflow: hidden;
}
</style>
