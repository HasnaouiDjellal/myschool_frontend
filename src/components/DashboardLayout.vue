<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
</script>

<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <Sidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />

      <main class="gradient-background relative overflow-x-hidden overflow-y-auto px-2">
        <div class="container mx-auto ">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.gradient-background {
  background: linear-gradient(to right, #608EBF,#6094BA,#62a5b0);
  color: white;
}
</style>
