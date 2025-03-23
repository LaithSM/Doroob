<template>
  <div>
    <!-- Carousel Container -->
    <div class="relative overflow-hidden">
      <div 
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(${currentSlide * slideWidth}%)` }"
      >
        <div 
          v-for="(item, index) in items" 
          :key="index" 
          class="min-w-full md:min-w-[50%] lg:min-w-[25%] px-3"
        >
          <div class="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 h-full">
            <div class="h-48 overflow-hidden">
              <img 
                :src="item.image"
                :alt="item.title" 
                class="w-full h-full object-cover p-2 object-[center_1%]" 
              />
            </div>
            <div class="p-4">
              <h3 class="font-bold text-lg mb-2">{{ item.title }}</h3>
              <p class="text-gray-600 mb-4">{{ item.description }}</p>
              <button class="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-600">
                استعراض المسار
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Dots -->
    <div class="flex justify-center mt-6">
      <div 
        v-for="(_, index) in Math.ceil(items.length / itemsPerView)" 
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 mx-1 rounded-full cursor-pointer transition-colors duration-300"
        :class="currentSlide === index ? 'bg-green-700' : 'bg-gray-200'"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentSlide: 0,
      slideWidth: 100,
      itemsPerView: 1
    };
  },
  mounted() {
    this.updateItemsPerView();
    window.addEventListener('resize', this.updateItemsPerView);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateItemsPerView);
  },
  methods: {
    goToSlide(index) {
      this.currentSlide = index;
    },
    updateItemsPerView() {
      if (window.innerWidth >= 1024) { // lg breakpoint
        this.itemsPerView = 4;
        this.slideWidth = 25; // 4 items per view
      } else if (window.innerWidth >= 768) { // md breakpoint
        this.itemsPerView = 2;
        this.slideWidth = 100; // 2 items per view
      } else {
        this.itemsPerView = 1;
        this.slideWidth = 100; // 1 item per view
      }
    }
  }
};
</script>
