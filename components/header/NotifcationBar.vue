<template>
    <div class="bg-[#1B8354] text-white p-1.5">
        <!-- Notification content goes here -->
       <ul class="flex space-x-5 container mx-auto">
         <li class="flex"><Calendar class="ml-1" /> {{ date }} </li>
       <li class="flex space-x-1.5"><Clock4 class="ml-1"/>{{ time }}</li>
       <li class="flex"><MapPin class="ml-1"/>{{location}}</li>
       </ul>
      
    </div>
</template>
<script>
import { Calendar } from 'lucide-vue-next';
import { Clock4 } from 'lucide-vue-next';
import { MapPin } from 'lucide-vue-next';
export default {
    data() {
        return {
            location: 'رياض',
            time: '2:30 مساء',
            date: '3-سبتمبر-2024',
        }
    },
    components: {
        Calendar,
        Clock4,
        MapPin
    }
}
</script>