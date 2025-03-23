<template>
      <!-- Why Choose E-Learning Section -->
      <div class="py-10 bg-green-50">
      <div class="container mx-auto px-4 p-20">
        <h2 class="text-2xl font-bold mb-2 text-right">لماذا تختار التدريب الإلكتروني؟</h2>
        <p class="text-right text-gray-600 mb-8 text-sm">المميزات التي سيتم إضافتها لك عند اختيار التدريب الإلكتروني</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6">
          <div class="bg-white p-6 rounded-2xl shadow-md text-right">
            <div class="inline-flex w-12 h-12">
              <FeaturedSvg/>
            </div>
            <h3 class="font-bold text-lg mb-2">مسارات تدريبية</h3>
            <p class="text-gray-600">دورات متعددة في داخل كل مسار متنوع</p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-md text-right">
            <div class="inline-flex w-12 h-12">
              <BookSvg/>
            </div>
            <h3 class="font-bold text-lg mb-2">تعليم ذاتي</h3>
            <p class="text-gray-600">يمكنك التعلم في اي وقت وفي اي مكان </p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-md text-right">
            <div class="inline-flex w-12 h-12">
              <CertificateSvg/>
            </div>
            <h3 class="font-bold text-lg mb-2">شهادات</h3>
            <p class="text-gray-600">الحصول على شهادات فورية بعد الانتهاء </p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-md text-right">
            <div class="inline-flex w-12 h-12">
              <ComputerSvg/>
            </div>
            <h3 class="font-bold text-lg mb-2">برامج تدريبية متخصصة</h3>
            <p class="text-gray-600">دورات مختلفة في تخصصات مختلفة</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import FeaturedSvg from './svgs/FeaturedSvg.vue';
import BookSvg from './svgs/BookSvg.vue';
import CertificateSvg from './svgs/CertificateSvg.vue';
import ComputerSvg from './svgs/ComputerSvg.vue';
export default {
    components: {
        FeaturedSvg,
        BookSvg,
        CertificateSvg,
        ComputerSvg,
    }
}
</script>