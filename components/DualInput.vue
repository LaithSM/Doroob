<template>
  <div>
    <div class="flex justify-between">
      <label :class="labelClass1">{{ label1 }}</label>
      <label :class="labelClass2">{{ label2 }}</label>
    </div>
    <div class="flex items-center gap-4">
      <input
        :type="type1"
        :value="modelValue1"
        @input="$emit('update:modelValue1', $event.target.value)"
        :placeholder="placeholder1"
        :class="inputClass1"
      />
      <span class="border-l border-gray-300 h-full"></span>
      <input
        :type="type2"
        :value="modelValue2"
        @input="$emit('update:modelValue2', $event.target.value)"
        :placeholder="placeholder2"
        :class="inputClass2"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label1: String,
    label2: String,
    type1: {
      type: String,
      default: 'text'
    },
    type2: {
      type: String,
      default: 'text'
    },
    modelValue1: [String, Number],
    modelValue2: [String, Number],
    placeholder1: String,
    placeholder2: String,
    labelClass1: {
      type: String,
      default: 'block text-gray-700 font-semibold mb-1'
    },
    labelClass2: {
      type: String,
      default: 'block text-gray-700 font-semibold mt-2'
    },
    inputClass1: {
      type: String,
      default: 'w-1/2 p-2 bg-[#EFF1EE] border-gray-300 rounded-xs text-sm'
    },
    inputClass2: {
      type: String,
      default: 'w-1/2 p-2 bg-[#EFF1EE] border-gray-300 rounded-xs text-sm'
    }
  },
  emits: ['update:modelValue1', 'update:modelValue2']
};
</script>
