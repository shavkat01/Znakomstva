<template>
  <section class="hero min-h-screen">
    <div class="hero-slider h-full">
      <Swiper 
        :slides-per-view="setSliderPerView" 
        :space-between="0" 
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="[Autoplay]"
      >
        <SwiperSlide v-for="img in slider_images" :key="img">
          <img class="w-full h-screen object-cover" :src="img" alt="hero-image">
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="hero-content absolute top-1/2 w-full -translate-y-1/2 z-10 text-center text-white">
      <h1 class="text-3xl">Новая коллекция</h1>
      <div class="line h-[1px] w-32 bg-white mx-auto my-3"></div>
      <p class="uppercase text-sm flex justify-center items-center cursor-pointer">
        <span>Смотреть Новинки</span>
        <img class="ml-2 -rotate-90" :src="require('@/assets/icons/chevron-down.svg')" alt="arrow">
      </p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapGetters('ui', ['GET_WINDOW_WIDTH']),
    setSliderPerView() {
      if(this.GET_WINDOW_WIDTH < 768) {
        return 1
      } else if(this.GET_WINDOW_WIDTH < 1024) {
        return 2
      } else {
        return 3
      }
    }
  },
  data() {
    return {
      Autoplay,
      slider_images: [
        require("@/assets/images/hero-image-1.jpg"),
        require("@/assets/images/hero-image-2.jpg"),
        require("@/assets/images/hero-image-3.jpg"),
      ],
    };
  },
};
</script>