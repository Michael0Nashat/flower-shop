<script setup>
import CartIcon from './CartIcon.vue'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]
</script>

<template>
  <header class="header">
    <div class="logo">
      <h1>Flower Shop</h1>
    </div>
    <nav>
      <ul>
        <li v-for="item in navItems" :key="item.name">
          <a :href="item.path">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
    <CartIcon />
  </header>
</template>

<style scoped>
.header {
  background-color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo h1 {
  color: #42b883;
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
}

nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #42b883;
  transition: width 0.3s ease;
}

nav a:hover::after {
  width: 100%;
}

nav a:hover {
  color: #42b883;
}

@media (max-width: 768px) {
  .header {
    padding: 1rem;
  }
  
  nav ul {
    gap: 1rem;
  }
}
</style>