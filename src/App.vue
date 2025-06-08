<template>
  <div id="app-container">
    <Sidebar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
</script>

<style>
/* Sidebar is fixed, so add left margin to main content */
#app-container {
  display: flex;
}
.content {
  flex-grow: 1;
  padding: 20px;
  margin-left: 250px;
}
/* Add other global styles if needed */
</style>
