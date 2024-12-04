<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	let data = []; // Array to store temperature data
	let svgContainer;

	const fetchTemperature = () => {
		// try {
		//     const response = await fetch('http://www.randomnumberapi.com/api/v1.0/random?min=15&max=50&count=1');
		//     const temp = await response.json();
		//     const newTemp = temp[0];
		//     data.push(newTemp);
		//     if (data.length > 10) data.shift(); // Keep the last 10 values
		//     updateGraph();
		// } catch (error) {
		//     console.error('Error fetching temperature:', error);
		// }
		try {
			// random number from 15 to 60
			let ran = Math.floor(Math.random() * (60 - 15 + 1) + 15);
			data.push(ran);
			if (data.length > 10) data.shift(); // Keep the last 10 values
			updateGraph();
		} catch (error) {
			console.error('Error fetching temperature:', error);
		}
	};

	const updateGraph = () => {
		const svg = d3.select(svgContainer);
		const width = 400;
		const height = 250;
		const margin = { top: 30, right: 30, bottom: 20, left: 20 };

		// Clear previous graph
		svg.selectAll('*').remove();

		// Define scales
		const xScale = d3
			.scaleLinear()
			.domain([0, data.length - 1])
			.range([margin.left, width - margin.right]);

		const yScale = d3
			.scaleLinear()
			.domain([15, 70]) // Minimum and maximum temperature
			.range([height - margin.bottom, margin.top]);

		// Define line generator
		const line = d3.line()
			.x((_, i) => xScale(i))
			.y((d) => yScale(d));

		// Draw axes
		svg
			.append('g')
			.attr('transform', `translate(0,${height - margin.bottom})`)
			.call(d3.axisBottom(xScale).ticks(data.length));

		svg.append('g').attr('transform', `translate(${margin.left},0)`).call(d3.axisLeft(yScale));

		// Draw line
		svg
			.append('path')
			.datum(data)
			.attr('fill', 'none')
			.attr('stroke', 'steelblue')
			.attr('stroke-width', 1.5)
			.attr('d', line);
	};

	// Fetch data every 2 seconds
	onMount(() => {
		const interval = setInterval(fetchTemperature, 200);
		return () => clearInterval(interval); // Clean up on component unmount
	});
</script>

<svg bind:this={svgContainer} width="400" height="250"></svg>

<style>
	svg {
		border: 1px solid #ccc;
	}
</style>
