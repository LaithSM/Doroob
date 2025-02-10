<template>
  <div class="bg-white rounded-lg shadow-md flex p-4 space-x-4 mb-4">
    <!-- Course Image -->
    <img :src="course.media" class="w-24 h-24 rounded-lg object-cover" />

    <!-- Course Info -->
    <div class="flex-grow mr-4">
      <div class="flex justify-between items-center">
        <div>
          <h3 class="text-lg border-gray-400">{{ course.name }}</h3>
<!--          <p class="text-sm text-gray-600">{{ course.category }} - {{ course.type }}</p>-->
          <p class="text-sm text-gray-600">{{ course.short_description }}</p>
        </div>

        <!-- Buttons -->
        <div class="mt-3 flex space-x-2">
          <button @click="this.goToEdxCourse(course.course_id, 'about')" class="px-4 py-2 ml-2 border border-gray-400 rounded-lg text-doroobblue hover:bg-gray-100 cursor-pointer">
            اعرف المزيد
          </button>
          <button @click="this.goToEdxCourse(course.course_id, 'course')" class="px-4 py-2 border border-green-600 rounded-lg text-green-600 hover:bg-green-100 cursor-pointer">
            ابدأ الآن
          </button>
        </div>
      </div>

      <!-- Related Programs -->
      <div class="mt-4 text-right border-t border-gray-400 pt-3">
        <p class="text-sm font-semibold text-gray-800">المسارات المرتبطة بالدورة</p>
        <ul class="text-sm text-blue-600 leading-relaxed">
          <li v-for="program in course?.programs" :key="program.id">
            <a href="#" class="hover:underline text-doroobblue">{{ program.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "CourseCard",
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToEdxCourse(course_id, extra=''){
      // const baseURL = import.meta.env.VITE_BACKEND_BASE_URL
      const baseURL = "http://localhost:8000/ar"
      window.location.href = `${baseURL}/individuals/edx_redirect/0?redirect_to=courses/${course_id}/${extra}`
    }
  }
};
</script>
