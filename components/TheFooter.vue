<template>
  <!-- Gradient Line -->
  <div class="h-1 bg-gradient-to-l from-[#FF6B4D] to-[#A0522D]"></div>

  <footer class="bg-[#eaeaea] text-[#666] py-10">
    <div class="container mx-auto">
      <div
        class="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-4 gap-8 text-right -ml-0 mr-0 md:-ml-15 md:mr-15"
      >
        <!-- Logo and Copyright Section -->
        <div class="flex flex-col text-center md:text-right mx-15">
        <div class="">
          <a href="http://www.hrdf.org.sa/" class="block">
            <img
              src="../assets/pic/footer-logo-hrdf.png"
              alt="Doroob"
              class="h-16 md:h-20 object-contain inline"
            />
          </a>
        </div>
          <div class="text-sm  lg:whitespace-normal md:whitespace-nowrap">
            <p class="md:inline">جميع الحقوق محفوظة © برنامج التدريب</p>
            <p class="md:inline">الإلكتروني 2025</p>
            <ul class="space-y-1 mt-4">
              <li>
                <a href="/ar/individuals/terms-of-use/" class="hover:text-black transition-colors">الشروط والأحكام</a>
              </li>
              <li>
                <a href="/ar/individuals/privacy-policy/" class="hover:text-black transition-colors">سياسة الخصوصية</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Description Section -->
        <div class="hidden lg:flex text-sm leading-relaxed flex-col space-y-1 md:whitespace-nowrap md:-mx-10">
          <p>برنامج التدريب الإلكتروني هو برنامج مقدم من</p>
          <p>صندوق تنمية الموارد البشرية ويهدف لتطوير</p>
          <p>المعارف والمهارات لدى الكوادر الوطنية وتمكينهم</p>
          <p>بما يتوافق مع متطلبات سوق العمل السعودي</p>
        </div>

        <!-- Quick Links Section -->
        <div class="hidden lg:flex flex-col space-y-2 w-40">
          <h2 class="text-lg font-bold">روابط سريعة</h2>
          <ul class="text-sm">
            <li>
              <a href="/ar/individuals/about/" class="hover:text-black transition-colors"
                >عن التدريب الإلكتروني</a
              >
            </li>
            <li><a href="https://www.iam.gov.sa/authservice/userauthservice?lang=ar" class="hover:text-black transition-colors">إنشاء حساب</a></li>
            <li><a href="/ar/individuals/check_certificate/" class="hover:text-black transition-colors">تحقق</a></li>
            <li><a href="https://www.hrdf.org.sa/help-support/contact-us-dashboard/" class="hover:text-black transition-colors">اتصل بنا</a></li>
            <li>
              <a href="/ar/individuals/faqs/" class="hover:text-black transition-colors">الأسئلة الشائعة</a>
            </li>
          </ul>
        </div>

        <!-- Social Media Section -->
        <div class="hidden lg:flex -mx-20 mt-4">
          <div class="flex flex-row-reverse">
            <a href="https://www.instagram.com/hrdfksa/">
              <img src="../assets/pic/instaFooterIcon.png" />
            </a>
            <a href="https://x.com/HRDFKSA?mx=2" class="text-gray-500">
              <img src="../assets/pic/twitterFotterIcon.png" />
            </a>
            <a href="https://www.linkedin.com/company/hrdf/" class="text-gray-500 hover:text-gray-700 my-1">
              <img src="../assets/pic/linkedFooterIcon.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap");

footer {
  font-family: "Tajawal", sans-serif;
}
</style>
