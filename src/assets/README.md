# What is this directory for?

Please use this directory for:
- fonts (please import fonts locally because it is more performant)
- bitmap images (.png, .jpg, .gif, .webp)
- vector images (.svg)
- CSS (we're not using SASS/SCSS in this project)

You can import an image with the following
```html
<script setup>
import vueLogo from '~/assets/images/vue_logo.png'
</script>

<template>
  <img :src="vueLogo" />
</template>
```
