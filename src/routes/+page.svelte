<script>
  import Random from "./Random.svelte";
  import Color from "./Color.svelte";
  let inputText = ''; 
  let reversedText = ''; 
  let API = "https://hazard-gfdo.shuttle.app/reverse"

  async function reverseText() {
    const response = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input: inputText })
    });
    const data = await response.json();
    reversedText = data.output;
  }

  let page = 'p';
  function change(){
    if(page == 'p'){
      page = 'r';
  }else if(page == 'r'){
    page = 'c';
  }else{
    page = 'p';
  }
  }
</script>

<main>
  {#if page == 'p'}
  <h1>Reverse Text</h1>

  <form on:submit|preventDefault={reverseText}>
    <input type="text" bind:value={inputText} placeholder="Enter text to reverse" />
    <button type="submit">Reverse</button>
    
    <p>{reversedText}</p>
</form>
{:else if page == 'r'}
  <Random/>
{:else}
 <Color/>
{/if}
</main>
 <button on:click={change}>Change</button>




<style>
  @import './style.css';  
</style>
