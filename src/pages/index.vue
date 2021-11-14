<template>
  <div>this is a nicely working index page asdasd</div>
  <div text="teal-500">this is working too btw</div>
  <p>asdasd</p>
  <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy w-12 h-12" />
  <p>hey buddy</p>
  <div class="i-logos-vue text-3xl" />
  <Test />
  <router-link to="/nice">go to nice</router-link>
  <div class="i-carbon-3d-ica"></div>

  <div></div>
  <button @click="$emit('nice test', { name: 'bob' })">click on me please</button>
</template>
