<script>
	import { onMount } from "svelte";
	import { fade } from 'svelte/transition';
	import { cart , removeFromCart } from "./cartstore.js";
	import ProductCard from "./ProductCard.svelte";
  
	let products = $state([]);
    let cost = $state(0);
	// Fetch product data
	onMount(async () => {
	  const res = await fetch("https://dummyjson.com/products");
	  const data = await res.json();
	  products = data.products;
	});
	$inspect(cost);
  </script>
  
  <main class="container">
	<h1 class="title">Product List</h1>
	
	<!-- Cart Display -->
	<div class="cart-summary">
	  <h2>🛒 Cart (<span>{$cart.length}</span> items)</h2>
	</div>
  
	<div class="grid">
	  {#each products as product}
		<ProductCard {product} bind:cost={cost} />
	  {/each}
	</div>
  
	<!-- Display Cart Items -->
	<div class="cart-items">
	  <h2>Cart Items🛒:</h2>
	  {#each $cart as item}
		<div class="cart-item" transition:fade>
		  <img src={item.product.thumbnail} alt={item.product.title} class="cart-img" />
		  <p>{item.product.title} - ${item.product.price}</p>
		  <button class="remove-button" on:click={() => {removeFromCart(item); cost-=item.product.price;  }}>Remove</button>
		</div>
	  {/each}
	  <h2>Items Total price: {cost}</h2>
	</div>
  </main>
  
  <style>
	.container {
	  max-width: 1200px;
	  margin: auto;
	  padding: 20px;
	}
	.title {
	  text-align: center;
	  margin-bottom: 20px;
	}
	.cart-summary {
	  text-align: right;
	  font-size: 18px;
	  font-weight: bold;
	}
	.grid {
	  display: grid;
	  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	  gap: 20px;
	}
	.cart-items {
	  margin-top: 30px;
	  padding: 20px;
	  border-top: 2px solid #ddd;
	}
	.cart-item {
	  display: flex;
	  align-items: center;
	  gap: 10px;
	  margin-top: 10px;
	}
	.cart-img {
	  width: 50px;
	  height: 50px;
	  object-fit: cover;
	  border-radius: 5px;
	}
	.remove-button {
	  background-color: rgb(182, 43, 43);
	  color: white;
	  padding: 8px 12px;
	  border: none;
	  border-radius: 5px;
	  cursor: pointer;
	  margin-top: 10px;
	}
  </style>
  