<script>
	import Check from './Check.svelte';
	import Graph from './Graph.svelte';
    let {sensorname , test} = $props();
    

	let tempValue = 30;
    console.log(test);
    console.log("card page");
</script>

<div class="card">
    <div class="Read">
        <p>{sensorname}</p>
        <p>Sensor Read</p>
        <p>{tempValue}</p>
    </div>
    
        <Graph />
        <div class="bottom">
            <Check test= {test}/>
        </div>
    </div>


    <style>
        .bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 75px;
        }
        .card {
		background-color: #fff;
		width: 50vw;
		height: 75vh;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		padding: 20px;
	}

	.Read {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.Read p {
		font-size: 1.5em;
		margin: 10px 0;
	}
    </style>