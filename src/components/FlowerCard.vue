<script setup>
import { useCart } from '../utils/cart'

const props = defineProps({
  flower: {
    type: Object,
    required: true
  }
})

const { addToCart } = useCart()

const handleAddToCart = () => {
  addToCart(props.flower)
}
</script>

<template>
  <div class="flower-card">
    <div class="image-container">
      <img :src="flower.image" :alt="flower.name">
      <div class="overlay">
        <span class="stock-status" :class="{ 'in-stock': flower.inStock }">
          {{ flower.inStock ? 'In Stock' : 'Out of Stock' }}
        </span>
      </div>
    </div>
    <h3>{{ flower.name }}</h3>
    <p class="price">${{ flower.price.toFixed(2) }}</p>
    <p class="description">{{ flower.description }}</p>
    <button 
      class="add-to-cart" 
      @click="handleAddToCart"
      :disabled="!flower.inStock"
    >
      {{ flower.inStock ? 'Add to Cart' : 'Out of Stock' }}
    </button>
  </div>
</template>

<style scoped>
.flower-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  width: 280px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.flower-card:hover {
  transform: translateY(-5px);
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
}

.flower-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 10px;
  right: 10px;
}

.stock-status {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: #ef4444;
  color: white;
}

.stock-status.in-stock {
  background-color: #10b981;
}

.flower-card h3 {
  margin: 1rem 0 0.5rem;
  color: #2c3e50;
  font-size: 1.2rem;
}

.price {
  font-size: 1.25rem;
  color: #42b883;
  font-weight: bold;
  margin: 0.5rem 0;
}

.description {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.add-to-cart {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-weight: 500;
  transition: all 0.2s ease;
}

.add-to-cart:hover:not(:disabled) {
  background-color: #3aa876;
  transform: translateY(-1px);
}

.add-to-cart:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}
</style>