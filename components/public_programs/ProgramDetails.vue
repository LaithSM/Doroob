
<template>
  <div class="bg-gray-100 min-h-screen p-6">
    <header class="bg-blue-600 text-white p-6 rounded-lg shadow-md mb-6">
      <h1 class="text-2xl font-bold m-auto w-[50%]">دروب-انطلاق (احترافي)</h1>
      <p class="mt-2 text-sm m-auto w-[50%]">
        برنامج للمساعدة في إعداد الشباب لسوق العمل من خلال تطوير المهارات المهنية والشخصية.
      </p>
    </header>

    <main class="m-auto w-[50%]">
      <h2 class="text-xl font-bold mb-4">الدورات</h2>
      <div class="grid gap-4">
        <CourseItem v-for="course in courses" :key="course.id" :course="course" />
      </div>
    </main>
  </div>
</template>

<script>
import CourseItem from "@/components/public_programs/CourseItem.vue";

export default {
  components: { CourseItem },
  data() {
    return {
      courses: [
        {
          id: 1,
          title: "تعامل بذكاء مع مختلف الثقافات",
          category: "المهارات الشخصية",
          level: "المستوى 3",
          description: "تطوير الذكاء الثقافي والاجتماعي للتفاعل بفعالية في بيئات متعددة الثقافات.",
          image: "/course-image-1.jpg",
        },
        {
          id: 2,
          title: "مهارات التفكير الإبداعي",
          category: "المهارات الشخصية",
          level: "المستوى 3",
          description: "تحسين القدرة على التفكير خارج الصندوق وإيجاد حلول مبتكرة.",
          image: "/course-image-2.jpg",
        },
      ],
    };
  },
};
</script>
