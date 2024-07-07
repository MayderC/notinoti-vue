<template>
  <div v-for="notification in notifications.values()" :key="notification.id">
      <Notinoti :notification="notification"/>
  </div>
</template>

<script setup lang="ts">
import  Notinoti  from '../components/Notinoti.vue';
import { useNotification } from '../index';
import { onMounted } from 'vue';

const { addNotification, notifications } = useNotification();

onMounted(() => {
  addNotification({
    title: 'Hello',
    msg: 'Hello from App.vue',
    type: 'success',
    timeout: 2000
  })
})


</script>