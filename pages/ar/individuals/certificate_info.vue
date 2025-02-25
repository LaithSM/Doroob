<template>
  <div class="">
    <certificiateSearch class="mb-6 mt-6" />
    <certificateHeader class="mb-6" />
    <certificateDetail class="mb-6" />
  </div>
</template>

<script>
import certificateDetail from '~/components/certificate/certificateDetail.vue';
import certificiateSearch from '~/components/certificate/certificiateSearch.vue';
import certificateHeader from '~/components/certificate/certificateHeader.vue';

export default {
  components: {
    certificateDetail,
    certificiateSearch,
    certificateHeader
  },
}
</script>
