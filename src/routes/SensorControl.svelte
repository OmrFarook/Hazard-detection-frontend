<script>
	import Card from "./Card.svelte";
</script>
<div class="cont">
	<Card test={"temp"} sensorname="temperature sensor"/>
	<Card test={"ULTRA"} sensorname="ULTRA Sonic"/>		
	</div>

<style>
	.cont{
		width: auto;
		margin-left: 35vh;
		height: auto;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 5ch;
	}
	
</style>
