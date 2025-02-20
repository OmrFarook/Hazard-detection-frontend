// cartStore.js
import { writable } from "svelte/store";

export const cart = writable([]);
let id = 1;

// Function to add a product to the cart
export function addToCart(product) {
    let item = {product , id} ;
    id++;
  cart.update((items) => {
    return [...items, item];
  });
} 
export function removeFromCart(itemi) {
  cart.update((items) => {
    return items.filter((item) => item.id !== itemi.id);
  });
}

