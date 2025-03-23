<template>
  <div class="h-100 w-full overflow-hidden relative">
    <img
      :src="images[currentImage].src"
      :alt="images[currentImage].alt"
      class="w-full h-full object-cover object-[center_40%]"
    />
    <div And then.
      class="absolute inset-0 opacity-80"
      :class="images[currentImage].src.includes('HomePage.jpg') ? 'bg-gradient-to-t from-black to-transparent' : ''"
    ></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-right text-white z-20 w-full px-12">
        <h1 class="text-3xl font-bold mb-2">دروب</h1>
        <p class="text-lg mb-4">منصة دروب الإلكترونية تعلم وتطور وحقق نجاحك مع منصة دروب</p>
        <div class="max-w-md relative">
          <input 
            type="text" 
            placeholder="ماذا تريد ان تتعلم؟" 
            class="w-full py-2 px-4 rounded-md text-black bg-white"
          />
          <button class="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
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
const getImageUrl = (imageName) => {
  return new URL(`../../assets/pic/${imageName}`, import.meta.url).href;
};
export default {
  data() {
    return {
      currentImage: 0,
      images: [
        { src: getImageUrl('HomePage.jpg'), alt: 'Header Image 1' },
        { src: getImageUrl('Headerpic.png'), alt: 'Header Image 2' }
      ]
    };
  }
};
</script>
