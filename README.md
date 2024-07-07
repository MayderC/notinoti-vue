# Notinoti



Notinoti is a simple notification system for your vuejs application
Notinoti es un sistema de notificaciones simple para tu aplicación vuejs


- [Installation](#installation)
- [Usage](#usage)
- [slots](#slots)

## Installation

##
    npm install notinoti

## Usage

1. Import the component and put it in your App.vue template

```html
// App.vue
<template>
    <RouterView />
    <NotiProvider />
</template>

<script setup lang="ts">
  import {NotiProvider} from 'notinoti'
</script>
```


2. Use the `addNotification` method to add a notification in every component you want

```javascript
import { useNotification } from 'notinoti'

const { addNotification } = useNotification()

addNotification({
  title: 'Hello',
  message: 'This is a notification',
  type: 'success'
})

```
3. method addNotification() options

```javascript
export interface NotinotiProps {
  msg: string;
  showTitle?: boolean;
  title?: string;
  icon?: string;
  timeout?: number; // duration in ms
  position?: string;
  type?: string;
  resetStyle?: boolean;
  closeOnClick?: boolean;
  closeOnHover?: boolean;
  showCloseButton?: boolean;
  showIcon?: boolean;
  showProgressBar?: boolean;
}
```  


## slots

```html 

```


<div>
  <img src="https://img.shields.io/npm/v/notinoti" alt="npm">
  <img src="https://img.shields.io/npm/dt/notinoti" alt="npm">
  <img src="https://img.shields.io/npm/l/notinoti" alt="NPM">
  <img src="https://img.shields.io/github/languages/top/MayderC/notinoti-vue" alt="GitHub top language">
  <img src="https://img.shields.io/github/issues/MayderC/notinoti-vue" alt="GitHub issues">
  <img src="https://img.shields.io/github/issues-pr/MayderC/notinoti-vue" alt="GitHub pull requests">
  <img src="https://img.shields.io/github/contributors/MayderC/notinoti-vue" alt="GitHub contributors">
  <img src="https://img.shields.io/github/last-commit/MayderC/notinoti-vue" alt="GitHub last commit">
  <img src="https://img.shields.io/github/commit-activity/m/MayderC/notinoti-vue" alt="GitHub commit activity">
  <img src="https://img.shields.io/github/languages/code-size/MayderC/notinoti-vue" alt="GitHub code size in bytes">
  <img src="https://img.shields.io/github/repo-size/MayderC/notinoti-vue" alt="GitHub repo size">
</div>
