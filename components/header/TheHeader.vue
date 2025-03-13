<template>
  <div>
    <notifcation-bar :show-notification="isShown" @close="closeNotificationBar" />
    <main-nav />
  </div>
</template>

<script setup>
import { ref } from "vue";
import MainNav from "../header/MainNav";
import NotifcationBar from "./NotifcationBar.vue";

const isShown = ref(true);

const closeNotificationBar = () => {
  isShown.value = false;
};
</script>
