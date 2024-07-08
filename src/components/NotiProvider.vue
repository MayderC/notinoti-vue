<template>
  <div 
    class="data-provider_style_provider_" 
    v-for="notification in notifications.values()" 
    :key="notification.id"
    :style="{padding: `${props.containerPadding}px`}"
  >
    <div class="data-provider__wrapper_style_wrapper">
      <Notinoti :notification="notification"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import '../style.css'
import  Notinoti  from '../components/Notinoti.vue';
import { useNotification } from '../index';
const { notifications } = useNotification();

const props = defineProps(
  {
    containerPadding: {
      type: Number,
      required: false,
      default: 100,
      validator: (value: number) => value >= 0
    },
  }
);

</script>


<style>

.data-provider_style_provider_{
  position: absolute;
  padding: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index:-9999
}

.data-provider__wrapper_style_wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: -9999;
}

</style>