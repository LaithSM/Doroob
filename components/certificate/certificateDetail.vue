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
          :modelValue1="arabicCourseName"
          :modelValue2="arabicHours"
          @update:modelValue1="arabicCourseName = $event"
          @update:modelValue2="arabicHours = $event"
          placeholder1="اسم الدورة"
          placeholder2="3 ساعات"
          :labelClass2="'block text-gray-700 font-semibold mt-2 text-right ml-93'"
        />
        <DualInput
          label1="Training Hours"
          label2="Course name in the track"
          :modelValue1="englishHours"
          :modelValue2="englishCourseName"
          @update:modelValue1="englishHours = $event"
          @update:modelValue2="englishCourseName = $event"
          placeholder1="Hours"
          placeholder2="Course Name"
          :labelClass1="'block text-gray-700 font-semibold mt-2 mr-86'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DualInput from '~/components/DualInput.vue';

export default {
  components: {
    DualInput
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
        tracks: []
      },
      englishCourseName: '',
      arabicCourseName: '',
      englishHours: '',
      arabicHours: ''
    };
  }
};
</script>

