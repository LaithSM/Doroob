<template>
    <div class="bg-white rounded-lg p-6 shadow-sm max-w-xl mx-auto">
      <form @submit.prevent="handleSearch" class="space-y-4">
        <div class="space-y-2">
          <label class="block text-right font-medium text-gray-700" for="certificateType">
            نوع الشهادة
          </label>
          <select
            id="certificateType"
            v-model="formData.certificateType"
            class="w-full pt-3 pb-3 border-2 border-gray-200 rounded-xs text-sm text-right text-gray-400"
          >
            <option value="">دورة أو مسار تدريبي</option>
          </select>
        </div>
  
        <div class="space-y-2">
          <label class="block text-right text-gray-700 font-medium" for="certificateCode">
            رمز الشهادة
          </label>
          <input
            id="certificateCode"
            type="text"
            v-model="formData.certificateCode"
            placeholder="الرمز"
             class="w-full pt-3 pb-3 p-2 border-2 border-gray-200 rounded-xs text-sm text-right text-gray-500"
          />
      <div v-if="true" class="text-red-600">الرمز المدخل غير صحيح!</div>
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="bg-[#277B9D] hover:bg-[#277B9D] text-white text-sm w-1.5 px-8 py-2 rounded-4xl transition-colors flex items-center justify-center"
          >
            ابحث
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          certificateType: '',
          certificateCode: ''
        }
      };
    },
    methods: {
      handleSearch() {
        // Mock API call
        const mockApiResponse = {
          success: true,
          data: {
            fullName: 'Amal Mohammed',
            nationalId: '1234567890',
            courseName: 'Web Development',
            trainingHours: '120',
            courseStartDate: '2024-01-01',
            coursePassDate: '2024-03-01',
            certificateIssueDate: '2024-03-15',
          }
        };
        
        this.$emit('search', mockApiResponse.data);
      }
    }
  };
  </script>