<template>
  <div class="bg-gray-100 min-h-screen p-6 mr-10 w-[90%]">
    <!-- Tabs & Search (Same Row) -->
    <div class="flex justify-between items-center p-3 rounded-lg">
      <Tabs :tabs="tabs" v-model="activeTab" />
      <div class="flex items-center rounded-sm overflow-hidden bg-white">
        <input type="text" v-model="searchQuery"
          class="w-full p-2 focus:outline-none" />
        <button class="cursor-pointer border-0 rounded-sm text-white px-4 py-2 bg-doroobblue">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="white" stroke-width="2"/>
            <line x1="16" y1="16" x2="22" y2="22" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Course List -->
    <div class="mt-4 space-y-4">
      <template v-if="filteredCourses.length > 0">
        <CourseCard v-for="course in filteredCourses" :key="course.id" :course="course" />
      </template>
      <p v-else class="text-center text-gray-500 mt-20 font-bold text-lg">
        لا توجد دورات متاحة
      </p>

    </div>

  </div>
</template>

<script>
import Tabs from "~/components/courses/Tabs.vue";
import CourseCard from "~/components/courses/CourseCard.vue";
import {
  getStudentCourses
} from '~/services/index.js'
import { CoursesTabs } from "~/components/courses/Enums.js";

export default {
  components: {
    Tabs,
    CourseCard
  },
  data() {
    return {
      tabs: Object.values(CoursesTabs),
      activeTab: CoursesTabs.IN_PROGRESS,
      searchQuery: "",
      courses: []
    };
  },
  methods: {
    async getCourses(status) {
      try {
        const coursesResponse = await getStudentCourses(status);
        this.courses = coursesResponse.result || [];

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  },
  computed: {
    activeTabKey() {
      return Object.keys(CoursesTabs).find(
        key => CoursesTabs[key] === this.activeTab
      );
    },
    filteredCourses() {
      return this.courses?.filter(course =>
        course.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  watch: {
    activeTabKey: {
      immediate: true,
      handler(newKey) {
        if (newKey) {
          this.getCourses(newKey);
        }
      }
    }
  },
  mounted() {
    this.getCourses(this.activeTab);
  }
};
</script>
