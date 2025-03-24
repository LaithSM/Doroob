<template>
  <div
    class="absolute inset-0 opacity-80"
    :class="images[currentImage].src.includes('HomePage.jpg') ? 'bg-gradient-to-t from-black to-transparent' : ''"
  ></div>
  <div
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-right text-white z-20 w-full px-12"
  >
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
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
    currentImage: {
      type: Number,
      required: true,
    },
  },
};
</script>
