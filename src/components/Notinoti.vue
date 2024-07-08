<template>
  <div v-if="notification" :class="['noti', notification.position || 'topRight']">
    <div class="noti__container">
      <div :class="['noti__content', `${classProp.container || getClases.container}` ]" role="alert">
        <p :class="['noti__title', `${classProp.title || getClases.title }`]">{{ props.notification.title }}</p>
        <p :class="['noti__msg', `${ classProp.msg || getClases.msg}`]">{{ props.notification.msg }}</p>
      </div>
    </div>
  </div>
</template>




<script setup lang="ts">
import {CLASS} from '../cls';
import {GetClases, NotinotiProps } from '../interfaces/notinoti.interface';
import { ComputedRef, computed } from 'vue';


const props = defineProps(
  {
    notification: {
      type: Object as () => NotinotiProps,
      required: true
    },
    classProp: {
      type: Object as () => GetClases,
      required: false,
      default: {
        container: '',
        title: '',
        msg: ''
      }
    }
  }
);


const getClases: ComputedRef<GetClases> = computed(() => {

  const type = props.notification.type || 'info';

  const container: { [key: string]: string } = {
    success: CLASS.success.container,
    error: CLASS.error.container,
    warning: CLASS.warning.container,
    info: CLASS.info.container
  }

  const title: { [key: string]: string } = {
    success: CLASS.success.title,
    error: CLASS.error.title,
    warning: CLASS.warning.title,
    info: CLASS.info.title
  }

  const msg: { [key: string]: string } = {
    success: CLASS.success.msg,
    error: CLASS.error.msg,
    warning: CLASS.warning.msg,
    info: CLASS.info.msg
  }

  return {
    container: container[type],
    title: title[type],
    msg: msg[type]
  }

})




</script>