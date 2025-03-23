<template>
    <div class="py-10bg-white pb-8">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold text-right p-4 mt-4">إحصائيات دروب</h2>
        <h3 class="text-right text-gray-600 p-4">لوحة معلومات اليوم</h3>
        <div class="flex flex-wrap justify-center lg:gap-40 md:gap-10 sm:gap-0 p-4">
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 mb-4">
          <PeopleSvg/>
            </div>
            <h3 class="text-3xl font-semibold text-green-800">1.8M</h3>
            <p class="text-gray-600">مستفيد</p>
          </div>
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 mb-4">
              <StartCircleSvg/>
            </div>
            <h3 class="text-3xl font-bold text-green-800">16.2M</h3>
            <p class="text-gray-600">مليون برنامج تدريبي مكمل</p>
          </div>
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 mb-4">
            <TimeSvg/>
            </div>
            <h3 class="text-3xl font-bold text-green-800">10M</h3>
            <p class="text-gray-600">ساعة تدريبية</p>
          </div>
        </div>
      </div>
    </div>
</template> 

<script>
import PeopleSvg from '~/components/home/svgs/PeopleSvg.vue';
import StartCircleSvg from './svgs/StartCircleSvg.vue';
import TimeSvg from './svgs/TimeSvg.vue';
export default {
    components: {
        PeopleSvg,
        StartCircleSvg,
        TimeSvg,
    },
}
</script>