<template>
  <div class="relative group">
    <a
      :href="item.title === 'دورات الشركاء' ? '#' : href"
      @click="setActive(index)"
      :class="{ 'bg-[#318720]': isActive }"
      class="block text-gray-700 hover:text-primary py-2 text-right"
    >
      {{ item.title }}
      <span v-if="item.isNew" class="text-[10px] text-red-500">جديد</span>
      <span
        v-if="
          (!item.isNew && item.title === 'المسارات التدريبية') ||
          item.title === 'دورات الشركاء'
        "
        class="mr-1 absolute top-4.5 text-[8px] text-grey-900 font-serif"
        >▼</span
      >
    </a>
    <div
      v-if="item.title === 'المسارات التدريبية'"
      :class="{ block: isActive, hidden: !isActive }"
      class="bg-white text-right"
      style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <a href="/ar/individuals/public/public_programs_list/" class="block px-4 py-2 text-sm text-gray-700 hover:text-[#277b9d]"
        >مسارات التدريب</a
      >
      <hr class="text-gray-200" />
      <a href="/individuals/tawteen/tawteen_program_list/" class="block px-4 py-2 text-sm text-gray-700 hover:text-[#277b9d]"
        >مسارات التوطين</a
      >
      <hr class="text-gray-200" />
      <a href="/ar/individuals/sector/sectors_program_list/" class="block px-4 py-2 text-sm text-gray-700 hover:text-[#277b9d]"
        >مسارات القطاعات</a
      >
      <hr class="text-gray-200" />
    </div>
    <div
      v-if="item.title === 'دورات الشركاء'"
      :class="{ block: isActive, hidden: !isActive }"
      class="bg-white text-right"
      style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <a href="/ar/mof/" class="block px-4 py-2 text-sm text-gray-700 hover:text-[#277b9d]"
        >وزارة مالية</a
      >
      <hr class="text-gray-200" />
    </div>
    <hr class="text-gray-400 font-light" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  item: Object,
  index: Number,
  activeIndex: Number,
  setActive: Function,
  href: String,
});

const isActive = ref(false);

watch(
  () => props.activeIndex,
  (newIndex) => {
    isActive.value = newIndex === props.index;
  }
);
</script>

<style scoped>
a:hover + .hover-target {
  display: block;
}
</style>
