<template>
  <main class="container mx-auto px-4 py-8">
    <BreadCrumb :crumbs="breadcrumbs"/>
    <AboutETraining />
    <StrategicPartners />
  </main>
</template>
<script >
import AboutETraining from "~/components/aboutUs/AboutETraining.vue";
import StrategicPartners from "~/components/aboutUs/StrategicPartners.vue";
import BreadCrumb from "~/components/BreadCrumb.vue";
export default {
  data() {
    return {
      breadcrumbs: [
        { label: "الرئيسية", link: "/" },
        { label: "التدريب الإلكتروني" },
      ],
    };
  },
  components: {
    AboutETraining,
    StrategicPartners,
    BreadCrumb
  },
}
</script>
