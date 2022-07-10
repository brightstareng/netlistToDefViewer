<template>
  <div style="display: flex; flex-direction: row-reverse;">
    <router-link style="padding-left:5px;" to=/admin>Admin</router-link>
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
