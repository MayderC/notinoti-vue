# Notinoti



Notinoti is a simple notification system for your vuejs application
Notinoti es un sistema de notificaciones simple para tu aplicación vuejs


- [Installation](#installation)
- [Usage](#usage)
- [slots](#slots)

## Importants requirements

 - Vue 3
 - Vite
 - Tailwindcss

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

- You can customize the NotiProvider' component by passing props to the `NotiProvider` component



<table>

  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>

  <tr>
    <td>container-padding</td>
    <td>number</td>
    <td>100</td>
    <td>padding of the container</td>
  </tr>

  // class object for the notification container, title, msg
  <tr>
    <td>classProp</td>
    <td>Object</td>
    <td>example <a id='propdecs' href='#classprop'> below </a></td>
    <td>class for the notifications</td>
</table>

- <a id='classprop' href='#propdecs' >classProp example</a>

```javascript

const classProp = {
  container: 'container-class',
  title: 'title-class',
  msg: 'msg-class'
}

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

```typescript

type NotiType = 'success' | 'info' | 'warning' | 'error' | 'default';
type NotiPosition = 'topRight'| 'topCenter' | 'topLeft' | 'bottomRight' | 'bottomCenter' | 'bottomLeft' | 'centerCenter' | 'centerLeft' | 'centerRight';


export interface NotinotiProps {
  msg: string;
  showTitle?: boolean;
  title?: string;
  icon?: string;
  timeout?: number; // duration in ms
  position?: NotiPosition;
  type?: NotiType;
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
