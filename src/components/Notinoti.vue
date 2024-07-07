<template>
  <div v-if="notification" class="noti">
    <div class="noti__container">
      <div class="noti__content">
        <div class="noti__title">{{ props.notification.title }}</div>
        <div class="noti__msg">{{ props.notification.msg }}</div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { NotinotiProps } from '../interfaces/notinoti.interface';

const props = defineProps(
  {
    notification: {
      type: Object as () => NotinotiProps,
      required: true
    },
  }
);








</script>