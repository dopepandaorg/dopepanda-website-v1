<script>
	import { DonutChart } from '@carbon/charts-svelte';
	import '@carbon/charts/styles.min.css';
</script>

<DonutChart
	data={[
		{
			group: 'Team',
			value: 100000000
		},
		{
			group: 'Foundation Reserve',
			value: 300000000
		},
		{
			group: 'Marketing & Partnership',
			value: 100000000
		},
		{
			group: 'Community Allocation',
			value: 500000000
		}
	]}
	options={{
		height: '600px',
		resizable: true,
		donut: {
			center: {
				label: 'DPANDA Tokens'
			}
		},
		toolbar: {
			enabled: false
		},
		legend: {
			enabled: true,
			truncation: {
				type: 'none'
			}
		}
	}}
/>
