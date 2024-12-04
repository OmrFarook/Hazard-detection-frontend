<script>
	import Appbar from './Appbar.svelte';
    import CameraStream from './CameraStream.svelte';
	import LeftBar from './LeftBar.svelte';
	import SensorControl from './SensorControl.svelte';


  $: page = "SensorControl";

  function setPage(newPage) {
		page = newPage;
	}

</script>

<main class="mainpage">
	<div class="leftbar">
		<LeftBar page={page} setPage={setPage}/>
	</div>
	<div class="main">
		<Appbar header={page}  />
        {#if page === "SensorControl"}
            <SensorControl />
        {:else}
            <CameraStream />
        {/if}        
	</div>
</main>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.mainpage {
        font-family: monospace;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 1ch;
		height: 100vh;
        width: 100vh;
	}

    .main {
        display: flex;
        flex-direction: column;
        gap: 1ch;
        width: 100%;
    }
</style>
