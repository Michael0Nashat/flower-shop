export const useCart = () => {
  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItem = cart.find(i => i.id === item.id)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ ...item, quantity: 1 })
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const getCart = () => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
  }

  const removeFromCart = (itemId) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const updatedCart = cart.filter(item => item.id !== itemId)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  return {
    addToCart,
    getCart,
    removeFromCart
  }
}