<template>
  <div class="bg-white p-4 rounded-lg shadow-md flex gap-4">
    <img :src="course.image" alt="Course Image" class="w-20 h-20 rounded" />
    <div>
      <h3 class="text-lg font-semibold">{{ course.title }}</h3>
      <p class="text-gray-600">{{ course.category }} | {{ course.level }}</p>
      <p class="text-sm text-gray-500 mt-2">{{ course.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: Object,
  },
};
</script>