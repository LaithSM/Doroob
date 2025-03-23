<template>
  <!-- Latest Training Courses Section -->
  <div class="py-10 odd:bg-gray-600 even:bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">الجلسات التدريبية</h2>
        <button class="text-gray-600 text-sm hover:border border-gray-200 p-1 rounded-sm">عرض الكل</button>
      </div>
      <Carousel :items="trainingItems" />
    </div>
  </div>

  <!-- Latest Course Items Section -->
  <div class="py-10 odd:bg-white even:bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">أحدث المسارات التدريببية</h2>
        <button class="text-gray-600 text-sm hover:border border-gray-200 p-1 rounded-sm">عرض الكل</button>
      </div>
      <Carousel :items="courseItems" />
    </div>
  </div>

  <!-- Latest eLearning Items Section -->
  <div class="py-10 odd:bg-gray-600 even:bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">أحدث الدورات الإلكترونية</h2>
        <button class="text-gray-600 text-sm hover:border border-gray-200 p-1 rounded-sm">عرض الكل</button>
      </div>
      <Carousel :items="elearningItems" />
    </div>
  </div>

  <!-- favourite course Items Section -->
  <div class="py-10 odd:bg-white even:bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">الدورات المفضلة</h2>
        <button class="text-gray-600 text-sm hover:border border-gray-200 p-1 rounded-sm">عرض الكل</button>
      </div>
      <Carousel :items="favouriteCourseItems" />
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel.vue';

const getImageUrl = (imageName) => {
  return new URL(`../../assets/pic/${imageName}`, import.meta.url).href;
};

export default {
  name: 'Courses',
  components: { Carousel },
  data() {
    return {
      trainingItems: [
        { title: 'البنية المؤسسية الوطنية والأثر الرقمي', description: 'webinars- الجلسات التفاعلية', image: getImageUrl('shmagh.png') },
        { title: 'البنية المؤسسية الوطنية والأثر الرقمي', description: 'webinars- الجلسات التفاعلية', image: getImageUrl('infra.png') },
        { title: 'البنية المؤسسية الوطنية والأثر الرقمي', description: 'webinars- الجلسات التفاعلية', image: getImageUrl('digitalInfra.png') },
        { title: 'البنية المؤسسية الوطنية والأثر الرقمي', description: 'webinars- الجلسات التفاعلية', image: getImageUrl('laptop.png') }
      ],
      courseItems: [
        { title: 'البنية المؤسسية الوطنية والأثر الرقمي', description: 'عدد الدورات: 5', image: getImageUrl('Chip.png') },
        { title: 'البنية المؤسسية الوطنية والأثر الرقمي', description: 'عدد الدورات: 5', image: getImageUrl('paint.png') },
        { title: 'صنع بيدي', description: 'عدد الدورات: 5', image: getImageUrl('handMade.png') },
        { title: 'صنع بيدي', description: 'عدد الدورات: 5', image: getImageUrl('space.png') }
      ],
      elearningItems: [
        { title: 'البنية المؤسسية الوطنية والأثر الرقمي', description: 'إدارة الأعمال', image: getImageUrl('lapTab.png') },
        { title: 'البنية المؤسسية الوطنية والأثر الرقمي', description: 'إدارة الإعمال', image: getImageUrl('desk.png') },
        { title: 'البنية المؤسسية الوطنية والرقمي', description: 'webinars- الجلسات التفاعلية', image: getImageUrl('meetingRoom.png') },
        { title: 'البنية المؤسسية الوطنية والأثر الرقمي', description: 'إدارة الأعمال', image: getImageUrl('keyboard.png') }
      ],
      favouriteCourseItems: [
        { title: 'البنية المؤسسية الوطنية والأثر الرقمي', description: 'اللغات', image: getImageUrl('library.png') },
        { title: 'البنية المؤسسية الوطنية والأثر الرقمي', description: 'مهارات تطوير الذات', image: getImageUrl('smile.png') },
        { title: 'البنية المؤسسية الوطنية والأثر الرقمي', description: 'علوم الحاسب الآلي', image: getImageUrl('twopeople.png') },
        { title: 'البنية المؤسسية الوطنية والأثر الرقمي', description: 'علوم الحاسب الآلي', image: getImageUrl('doctor.png') }
      ]
    };
  },
};
</script>