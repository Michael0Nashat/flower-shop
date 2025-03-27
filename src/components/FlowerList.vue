<script setup>
import FlowerCard from './FlowerCard.vue'
import { ref, computed } from 'vue'

const flowers = ref([
  {
    id: 1,
    name: 'Red Rose Bouquet',
    price: 29.99,
    description: 'Beautiful bouquet of fresh red roses, perfect for romantic occasions',
    image: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inStock: true,
    category: 'bouquet'
  },
  {
    id: 2,
    name: 'Sunflower Bundle',
    price: 24.99,
    description: 'Bright and cheerful sunflowers to light up any room',
    image: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inStock: true,
    category: 'bundle'
  },
  {
    id: 3,
    name: 'Mixed Tulips',
    price: 19.99,
    description: 'Colorful mix of fresh tulips, perfect for spring',
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inStock: false,
    category: 'bouquet'
  },
  {
    id: 4,
    name: 'White Lily Arrangement',
    price: 34.99,
    description: 'Elegant white lilies arranged in a modern vase',
    image: 'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inStock: true,
    category: 'arrangement'
  }
])

const categories = ref([
  { id: 'all', name: 'All' },
  { id: 'bouquet', name: 'Bouquets' },
  { id: 'bundle', name: 'Bundles' },
  { id: 'arrangement', name: 'Arrangements' }
])

const selectedCategory = ref('all')

const filteredFlowers = computed(() => {
  if (selectedCategory.value === 'all') {
    return flowers.value
  }
  return flowers.value.filter(flower => flower.category === selectedCategory.value)
})
</script>

<template>
  <div class="flower-shop">
    <div class="categories">
      <button
        v-for="category in categories"
        :key="category.id"
        @click="selectedCategory = category.id"
        :class="{ active: selectedCategory === category.id }"
        class="category-btn"
      >
        {{ category.name }}
      </button>
    </div>
    <div class="flower-list">
      <FlowerCard 
        v-for="flower in filteredFlowers" 
        :key="flower.id" 
        :flower="flower"
      />
    </div>
  </div>
</template>

<style scoped>
.flower-shop {
  max-width: 1200px;
  margin: 0 auto;
}

.categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #42b883;
  border-radius: 4px;
  background: transparent;
  color: #42b883;
  cursor: pointer;
  transition: all 0.2s ease;
}

.category-btn:hover {
  background: #42b883;
  color: white;
}

.category-btn.active {
  background: #42b883;
  color: white;
}

.flower-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

@media (max-width: 768px) {
  .categories {
    flex-wrap: wrap;
  }
  
  .flower-list {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style>