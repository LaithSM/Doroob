<template>
  <div>
    <notifcation-bar :show-notification="isShown"/>
    <InvitationBanner v-if="isShown" @close="closeNotificationBar"/>
    <main-nav />
  </div>
</template>

<script>
import MainNav from "../header/MainNav";
import NotifcationBar from "./NotifcationBar.vue";
import InvitationBanner from "./InvitationBanner.vue";

export default {
  components: {
    MainNav,
    NotifcationBar,
    InvitationBanner
  },
  data() {
    return {
      isShown: true
    };
  },
  methods: {
    closeNotificationBar() {
      this.isShown = false;
    }
  }
};
</script>
