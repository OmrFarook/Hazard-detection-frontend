<script> 
  let API = "https://hazard-gfdo.shuttle.app/random ";
  let rand = "";
    async function send() {
      const response = await fetch(API);
      const data = await response.json();
      rand = data.output;
    }
</script>
  
  <main>
    <h1>Random Number Generator</h1>
    <button on:click={send}>Get Random Number</button>
    <p>{rand}</p>
  </main>
  
  <style>
    @import './style.css';
  </style>