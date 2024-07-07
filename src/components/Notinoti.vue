<template>
  <p v-for="notification in notifications.values()" :key="new Date().getTime">
    {{ notification.title }} - {{ notification.msg }}
  </p>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';
import { useNotification } from '../store/store.notification';



const {addNotification, notifications} = useNotification()


onMounted(() => {
  addNotification({
    title: 'Hello',
    msg: 'Hello from App.vue',
    type: 'success',
    timeout: 2000
  })
})


</script>