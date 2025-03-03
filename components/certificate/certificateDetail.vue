<template>
  <div class="bg-white rounded-lg p-6 shadow-sm mx-80">
    <div class="grid grid-cols-1 gap-6">
      <!-- Full Name -->
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <label class="block text-right text-gray-700 text-sm font-bold">الاسم الكامل</label>
          <input
            type="text"
            v-model="certificateData.fullName"
            placeholder="الاسم الكامل"
            class="w-full p-2 bg-[#EFF1EE] border border-gray-300 rounded-xs text-right text-sm"
          />
        </div>
        <div class="space-y-2">
          <label class="block text-left text-gray-700 text-sm font-bold">Full Name</label>
          <input
            type="text"
            v-model="certificateData.fullName"
            placeholder="Full Name"
            class="w-full p-2 bg-[#EFF1EE] border border-gray-300 rounded-xs text-sm text-left"
          />
        </div>
      </div>

      <!-- National ID -->
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <label class="block text-right text-gray-700 text-sm font-bold">رقم الهوية</label>
          <input
            type="text"
            v-model="certificateData.nationalId"
            placeholder="رقم الهوية"
            class="w-full p-2 bg-[#EFF1EE] border border-gray-300 rounded-xs text-right text-sm"
          />
        </div>
        <div class="space-y-2">
          <label class="block text-left text-gray-700 text-sm font-bold">National ID</label>
          <input
            type="text"
            v-model="certificateData.nationalId"
            placeholder="National ID"
            class="w-full p-2 bg-[#EFF1EE] border border-gray-300 rounded-xs text-sm text-left"
          />
        </div>
      </div>

      <!-- Two inputs -->
      <div class="grid grid-cols-2 gap-4 mb-4">
        <DualInput
          label1="اسم الدورة في المسار"
          label2="مدة الدورة"
          :modelValue1="course.nameAr"
          :modelValue2="course.hoursAr"
          placeholder1="اسم الدورة"
          placeholder2="3 ساعات"
          :labelClass1="'flex-1 text-right'"
          :labelClass2="'w-32 text-right'"
          :inputClass1="'flex-1 rounded-r text-right'"
          :inputClass2="'w-32 rounded-l text-right'"
        />
        <DualInput
          label1="Training hours"
          label2="Course name in the track"
          :modelValue1="course.hoursEn"
          :modelValue2="course.nameEn"
          placeholder1="Hours"
          placeholder2="Course Name"
          :labelClass1="'w-32 text-left'"
          :labelClass2="'flex-1 text-left'"
          :inputClass1="'w-32 rounded-r text-left'"
          :inputClass2="'flex-1 rounded-l text-left'"
        />
      </div>
      <div v-if="true" class="">
      <div class="text-center mt-2 space-y-2">
        <label class="center">الشهادة</label>
        <a :href="certificateLink" target="_blank">
          <div class="w-full p-2 bg-[#EFF1EE] border border-gray-300 rounded-xs text-sm text-center flex justify-center">
            تنزيل الشهادة
            <ArrowDownToLine class="w-4 h-5 mx-2" />
          </div>
        </a>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import DualInput from '~/components/DualInput.vue';
import { ArrowDownToLine } from 'lucide-vue-next';

export default {
  components: {
    DualInput,
    ArrowDownToLine,
  },
  data() {
    return {
      certificateData: {
        fullName: '',
        nationalId: '',
        courseName: '',
        trainingHours: '',
        courseStartDate: '',
        coursePassDate: '',
        certificateIssueDate: '',
        tracks: [],
      },
      
      englishCourseName: '',
      arabicCourseName: '',
      englishHours: '',
      arabicHours: '',
course: {
      nameEn: 'Course Name',
    nameAr: 'اسم الدورة',
    hoursEn: '3 Hours',
    hoursAr: '3 ساعات'
    }
  }
  }
};
</script>

