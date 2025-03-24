<template>
  <div class="h-150 w-full overflow-hidden relative">
    <img
      :src="images[currentImage].src"
      :alt="images[currentImage].alt"
      class="w-full h-full object-cover object-[center_40%]"
      :class="images[currentImage].src.includes('facilities.png') ? 'object-cover object-[center_60%]' : 'object-cover object-[center_40%]'"
    />
    <div
      class="absolute inset-0"
      :class="images[currentImage].src.includes('facilities.png') ? 'bg-[#092A1E99]' : ''"
    ></div>
    <SearchHomeScreen
      v-if="images[currentImage].src.includes('HomePage.jpg')"
      :images="images"
      :currentImage="currentImage"
    />
    <div
      v-if="images[currentImage].src.includes('facilities.png')"
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-right text-white z-20 w-full px-12"
  >
    <h1 class="text-6xl font-bold pb-8">المنشآت</h1>
    <p class="text-2xl mb-4 lg:whitespace-nowrap">شارك مع برنامج التدريب الإلكتروني في دعم الرسالة الوطنية والرؤية المستقبلية لتطوير الكوادر الوطنية</p>
    <p class="text-2xl mb-4">ادعمنا وشارك في مُهِمّة ورؤية التدريب الإلكتروني</p>
  </div>
    <!-- Navigation Dots -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <div
        v-for="(image, index) in images"
        :key="index"
        @click="currentImage = index"
        class="w-3 h-3 rounded-full cursor-pointer transition-colors duration-300"
        :class="currentImage === index ? 'bg-green-700' : 'bg-gray-200'"
      ></div>
    </div>
  </div>
</template>

<script>
import SearchHomeScreen from './SearchHomeScreen.vue';

const getImageUrl = (imageName) => {
  return new URL(`../../assets/pic/${imageName}`, import.meta.url).href;
};

export default {
  components: {
    SearchHomeScreen,
  },
  data() {
    return {
      currentImage: 0,
      images: [
        { src: getImageUrl('HomePage.jpg'), alt: 'Header Image 1' },
        { src: getImageUrl('Headerpic.png'), alt: 'Header Image 2' },
        { src: getImageUrl('facilities.png'), alt: 'Header Image 3' },
      ],
    };
  },
  mounted() {
    if (this.$route.path === '/ar/individuals/about_company') {
      this.currentImage = 2;
    }
  },
};
</script>
