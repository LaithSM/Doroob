<template>
  <!-- Header Navigation -->
  <header class="border-b border-gray-200 py-8">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="flex items-center">
        <template v-for="(crumb, index) in crumbs" :key="index">
          <a v-if="crumb.link" :href="crumb.link" class="text-gray-700 hover:text-green-600">
            {{ crumb.label }}
          </a>
          <span v-else class="text-gray-500">{{ crumb.label }}</span>
          <span v-if="index !== crumbs.length - 1" class="mx-2 text-gray-400">
            <ChevronLeft class="h-4 w-4" />
          </span>
        </template>
      </div>
      <div class="flex space-x-2 space-x-reverse">
        <button class="bg-green-600 text-white p-2 rounded-md">
          <Printer class="h-4 w-4" />
        </button>
        <button class="bg-green-600 text-white p-2 rounded-md">
          <Share2 class="h-4 w-4" />
        </button>
        <button class="bg-green-600 text-white p-2 rounded-md">
          <Mail class="h-4 w-4" />
        </button>
        <button class="bg-green-600 text-white p-2 rounded-md">
          <DollarSign class="h-4 w-4" />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { ChevronLeft, Printer, Share2, Mail, DollarSign } from 'lucide-vue-next';
//If a breadcrumb has a link, it renders as a clickable <a>. Otherwise, it's plain text.
export default {
  components: {
    ChevronLeft,
    Printer,
    Share2,
    Mail,
    DollarSign,
  },
  props: {
    crumbs: {
      type: Array,
      required: true,
    },
  },
};
</script>
