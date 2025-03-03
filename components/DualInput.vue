<template>
  <div>
    <div class="text-gray-600 text-sm font-medium mb-1">
      <div class="flex justify-between">
        <label :class="[defaultLabelClass, labelClass1]">{{ label1 }}</label>
        <label :class="[defaultLabelClass, labelClass2]">{{ label2 }}</label>
      </div>
    </div>
    <div class="flex bg-gray-50 rounded border border-gray-200">
      <input
        :type="type1"
        :value="modelValue1"
        :placeholder="placeholder1"
        :class="[defaultInputClass, inputClass1]"
        readonly
      />
      <div class="w-[1px] bg-gray-300 my-2"></div>
      <input
        :type="type2"
        :value="modelValue2"
        :placeholder="placeholder2"
        :class="[defaultInputClass, inputClass2]"
        readonly
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
      default: ''
    },
    labelClass2: {
      type: String,
      default: ''
    },
    inputClass1: {
      type: String,
      default: ''
    },
    inputClass2: {
      type: String,
      default: ''
    }
  },
  computed: {
    defaultLabelClass() {
      return 'text-gray-700 text-sm font-bold';
    },
    defaultInputClass() {
      return 'p-2 bg-[#EFF1EE] border border-gray-200 text-gray-500 outline-none';
    }
  },
  emits: ['update:modelValue1', 'update:modelValue2']
};
</script>
