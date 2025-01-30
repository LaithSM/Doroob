<template>
  <div>
    <notifcation-bar :show-notification="isShown" @close="closeNotificationBar" />
    <top-nav />
    <main-nav />
    <title-banner />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TopNav from "../header/TopNav";
import MainNav from "../header/MainNav";
import TitleBanner from "../header/TitleBanner";
import NotifcationBar from "./NotifcationBar.vue";

const isShown = ref(true);

const closeNotificationBar = () => {
  isShown.value = false;
};
</script>
