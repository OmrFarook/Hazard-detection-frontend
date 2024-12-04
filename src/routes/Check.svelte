<script>
  let {test} = $props();
  let text = $state("Freeze");
  let color = "#c41e1e";


  function changeText() {
    if (text === "Freeze") {
      text = "Unfreeze";
      color = "#c41e1e";
    } else {
      text = "Freeze";
      color = "#23c483";
    }

    console.log(text);
    console.log(test);
  }
</script>
<button  on:click={changeText} > {text}
</button>

  <style>
button {
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: #2cc3be;
  box-shadow: 0px 15px 20px rgba(91, 216, 210, 0.6);
  color: #fff;
  transform: translateY(-7px);
}

button:active {
  transform: translateY(-1px);
}
  </style>