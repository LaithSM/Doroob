<template>
     <section class="">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-green-700 text-right mb-5 mt-10">خدماتنا</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Service Card 1 -->
          <div class="bg-white rounded-2xl shadow-md p-8 text-right">
            <div class="mb-6">
              <div class="text-green-500">
              <course-svg />
              </div>
            </div>
            <h3 class="text-xl font-bold pb-20">الدورات التدريبية</h3>
          </div>
          
          <!-- Service Card 2 -->
          <div class="bg-white rounded-2xl shadow-md p-4 text-right">
            <div class="mb-6">
              <div class="text-green-500">
                <certificate-svg />
              </div>
            </div>
            <h3 class="text-xl font-bold mb-4">شهادات</h3>
          </div>
        </div>
      </div>
    </section>
    <section class="py-10 pb-30">
      <div class="container mx-auto px-4">
        <div class="text-right">
          <p class="text-xl text-right font-semibold mb-6">
            التدريب الإلكتروني - منشأت هي أحد خدمات برنامج التدريب الإلكتروني المقدم من صندوق تنمية الموارد البشرية والتي تتيح للمنشآت تدريب موظفيها ومتابعة          </p>
          <p class="text-xl font-semibold">
            أدائهم التدريبي بما يتوافق مع الاحتياجات التدريبية للموظف والمنشأة والتي تساهم في تحسين الكفاءة ورفع الإنتاجية في العمل.          </p>
        </div>
      </div>
    </section>
</template>

<script setup>
import CourseSvg from './svgs/CourseSvg.vue';
import CertificateSvg from './svgs/CertificateSvg.vue';
</script>