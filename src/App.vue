<template>
  <div style="display: flex; flex-direction: row-reverse">
    <router-link to="/">Home</router-link>
  </div>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
