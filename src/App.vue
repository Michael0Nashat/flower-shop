<script setup>
import Header from './components/Header.vue'
import FlowerList from './components/FlowerList.vue'
</script>

<template>
  <div class="app">
    <Header />
    <main>
      <h2 class="welcome-text">Welcome to Our Flower Shop</h2>
      <p class="subtitle">Discover our beautiful collection of fresh flowers</p>
      <FlowerList />
    </main>
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  background-color: #f5f5f5;
}

main {
  padding: 2rem;
}

.welcome-text {
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  text-align: center;
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
</style>