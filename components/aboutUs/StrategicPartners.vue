<template>
  <section class="mb-12">
  <h2 class="text-xl font-semibold text-green-600 mb-4">شركاؤنا الاستراتيجيون</h2>
    <div class="relative flex items-center justify-center w-full">
      <button @click="scrollPrev" class="z-10 p-2 rounded-full">
        <ChevronRight class="h-6 w-6 text-gray-500" />
      </button>
      <div class="overflow-hidden w-full px-4">
        <div
          ref="carousel"
          class="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          <div
            v-for="(partner, index) in partners"
            :key="index"
            class="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 border border-gray-200 rounded-xl flex items-center justify-center xl:mr-2 p-2 snap-start"
          >
            <img
              :src="getImageUrl(partner.logo)"
              :alt="partner.name"
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <button @click="scrollNext" class="z-10 p-2 rounded-full">
        <ChevronLeft class="h-6 w-6 text-gray-500" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

const partners = [
  { name: "STC", logo: "hrdf-tadreeb-logo-2023.png" },
  { name: "Saudi Ministry", logo: "university.png" },
  { name: "STC", logo: "stc.png" },
  { name: "Saudi Organization", logo: "ministryOfHealth.png" },
  { name: "Finance", logo: "MinstryFinance.png" },
  { name: "Taqat", logo: "scopa.png" },
  { name: "Saudi Organization", logo: "MinstryFinance.png" },
  { name: "Taqat", logo: "ministryOfHealth.png" },
  { name: "Taqat", logo: "scopa.png" },
];

const carousel = ref(null);

const scrollNext = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: 150, behavior: "smooth" });
  }
};

const scrollPrev = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: -150, behavior: "smooth" });
  }
};

const getImageUrl = (imageName) => {
  return new URL(`../../assets/pic/${imageName}`, import.meta.url).href;
};
</script>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
