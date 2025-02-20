<script>
    let inputText = ''; 
  let Color = '#000000'; 
  let API = "https://hazard-gfdo.shuttle.app/closest"

  async function reverseColor() {
    const response = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input: inputText })
    });
    const data = await response.json();
    Color = data.output;
  }
</script>


<h1>Closest Color</h1>

  <form on:submit|preventDefault={reverseColor}>
    <input type="color" bind:value={inputText} placeholder="Enter text to reverse" />
    <button type="submit">Closest</button>
    
    <div style="background-color: {Color};"></div>
</form>

<style>
    @import './style.css';

    div{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: relative;
        left: 40%;

    }

</style>
  