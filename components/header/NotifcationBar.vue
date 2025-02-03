<template>
    <div v-if="showNotification" class="bg-[#277b9d] text-white p-5 text-lg flex justify-center font-sans">
        <!-- Notification content goes here -->
        <p class="text-center">
            انضم معنا في الجلسة التدريبية بعنوان: "التمكين والإبداع في قطاع الترفيه" والتي ستقام يوم الإثنين بتاريخ 2025/02/03م الساعة 09:00 م
            <a href="#" class="hover:text-black">
                <span class="px-2 m-3 font-bold text-sm">(اضغط هنا)</span>
            </a>
        </p>
        <button @click="closeNotification" class="absolute top-0 right-0 m-3 px-3 focus:outline-none text-2xl font-bold font-mono cursor-pointer hover:text-black"> 
            x
        </button>
    </div>
</template>
<script setup>

const props = defineProps({
    showNotification: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits();

const closeNotification = () => {
    emit('close');
};
</script>