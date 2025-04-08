<template>
    <div class="bg-[#EFF8FF] flex justify-between p-3">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-[#175CD3]">
          انضم معنا في الجلسة التدريبية بعنوان “ الملكية الفكرية في الفنون والرسومات” والتي ستقام يوم الاثنين بتاريخ 12 / 8 / 2024 م الساعة 9:00م 
        </div>
        <div class="flex items-center space-x-1">
          <button class="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-600">
            التسجيل في الجلسة
          </button>
          <X class="text-gray-600 w-5 cursor-pointer" @click="$emit('close')" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { X } from 'lucide-vue-next';
  
  export default {
    name: 'InvitationBanner',
    components: {
      X
    },
    emits: ['close']
  };
  </script>
  