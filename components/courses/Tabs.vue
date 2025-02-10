<template>
  <div class="rounded-lg shadow-md">
    <ul class="flex flex-nowrap text-center overflow-hidden">
      <li
        v-for="tab in tabs"
        :key="tab"
        @click="updateTab(tab)"
        class="flex-1 px-6 py-3 border-b-0 rounded-t-lg border-1 border-[#ddd] cursor-pointer whitespace-nowrap"
        :class="modelValue === tab
          ? 'bg-white border-t-4  border-green-600 font-bold text-green-600'
          : 'bg-[#f0f0f0] hover:bg-gray-200 text-gray-600'"
      >
        {{ tab }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tabs: Array,
    modelValue: String
  },
  emits: ["update:modelValue"],
  methods: {
    updateTab(tab) {
      this.$emit("update:modelValue", tab);
    }
  }
};
</script>
