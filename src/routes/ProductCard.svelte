<script>
	import { addToCart } from "./cartstore.js";
	let { product , cost = $bindable() } = $props()

	function add() {
		cost += product.price;
	    addToCart(product);
	}
	$inspect(cost);
  </script>
  
  <div class="card">
	<img src={product.thumbnail} alt={product.title} class="card-image" />
	<h2 class="card-title">{product.title}</h2>
	<p class="card-description">{product.description}</p>
	<p class="card-price">${product.price}</p>
	<button class="add-button" onclick={() => {
		cost += product.price;
		addToCart(product);
	}}>Add to Cart</button>
  </div>
  
  <style>
	.card {
	  border: 1px solid #ddd;
	  border-radius: 8px;
	  padding: 15px;
	  text-align: center;
	  background: white;
	  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
	}
	.card-image {
	  width: 100%;
	  height: 150px;
	  object-fit: cover;
	  border-radius: 8px;
	}
	.card-title {
	  font-size: 18px;
	  margin: 10px 0;
	}
	.card-description {
	  font-size: 14px;
	  color: gray;
	}
	.card-price {
	  font-weight: bold;
	  color: green;
	  margin-top: 10px;
	}
	.add-button {
	  background-color: #28a745;
	  color: white;
	  padding: 8px 12px;
	  border: none;
	  border-radius: 5px;
	  cursor: pointer;
	  margin-top: 10px;
	}
	.add-button:hover {
	  background-color: #218838;
	}
  </style>
  