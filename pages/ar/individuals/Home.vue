<template>
    <Statistics />
    <Courses />
    <Advantages />
</template>

<script>
import Statistics from '~/components/home/Statistics.vue';
import Advantages from '~/components/home/Advantages.vue';
import Courses from '~/components/home/Courses.vue';
export default {
    components: {
        Statistics,
        Advantages,
        Courses,
    },
}
</script>