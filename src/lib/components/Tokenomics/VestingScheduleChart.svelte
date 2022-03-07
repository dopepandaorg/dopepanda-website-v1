<script>
	import { StackedAreaChart } from '@carbon/charts-svelte';
	import '@carbon/charts/styles.min.css';

	const data = [
		{
			group: 'Marketing & Partnerships',
			date: '2022-01-01',
			value: 20000000
		},
		{
			group: 'Marketing & Partnerships',
			date: '2022-04-01',
			value: 40000000
		},
		{
			group: 'Marketing & Partnerships',
			date: '2022-07-01',
			value: 60000000
		},
		{
			group: 'Marketing & Partnerships',
			date: '2022-10-01',
			value: 80000000
		},
		{
			group: 'Marketing & Partnerships',
			date: '2023-01-01',
			value: 100000000
		},
		{
			group: 'Marketing & Partnerships',
			date: '2023-04-01',
			value: 100000000
		},
		{
			group: 'Marketing & Partnerships',
			date: '2023-07-01',
			value: 100000000
		},
		{
			group: 'Marketing & Partnerships',
			date: '2023-10-01',
			value: 100000000
		},
		{
			group: 'Marketing & Partnerships',
			date: '2024-01-01',
			value: 100000000
		},
		{
			group: 'Marketing & Partnerships',
			date: '2024-04-01',
			value: 100000000
		},
		{
			group: 'Marketing & Partnerships',
			date: '2024-07-01',
			value: 100000000
		},
		{
			group: 'Marketing & Partnerships',
			date: '2024-10-01',
			value: 100000000
		},
		{
			group: 'Team',
			date: '2022-01-01',
			value: 0
		},
		{
			group: 'Team',
			date: '2022-04-01',
			value: 0
		},
		{
			group: 'Team',
			date: '2022-07-01',
			value: 0
		},
		{
			group: 'Team',
			date: '2022-10-01',
			value: 10000000
		},
		{
			group: 'Team',
			date: '2023-01-01',
			value: 20000000
		},
		{
			group: 'Team',
			date: '2023-04-01',
			value: 40000000
		},
		{
			group: 'Team',
			date: '2023-07-01',
			value: 50000000
		},
		{
			group: 'Team',
			date: '2023-10-01',
			value: 60000000
		},
		{
			group: 'Team',
			date: '2024-01-01',
			value: 70000000
		},
		{
			group: 'Team',
			date: '2024-04-01',
			value: 80000000
		},
		{
			group: 'Team',
			date: '2024-07-01',
			value: 90000000
		},
		{
			group: 'Team',
			date: '2024-10-01',
			value: 100000000
		},
		{
			group: 'Foundation Reserve',
			date: '2022-01-01',
			value: 0
		},
		{
			group: 'Foundation Reserve',
			date: '2022-04-01',
			value: 0
		},
		{
			group: 'Foundation Reserve',
			date: '2022-07-01',
			value: 0
		},
		{
			group: 'Foundation Reserve',
			date: '2022-10-01',
			value: 60000000
		},
		{
			group: 'Foundation Reserve',
			date: '2023-01-01',
			value: 90000000
		},
		{
			group: 'Foundation Reserve',
			date: '2023-04-01',
			value: 120000000
		},
		{
			group: 'Foundation Reserve',
			date: '2023-07-01',
			value: 150000000
		},
		{
			group: 'Foundation Reserve',
			date: '2023-10-01',
			value: 180000000
		},
		{
			group: 'Foundation Reserve',
			date: '2024-01-01',
			value: 210000000
		},
		{
			group: 'Foundation Reserve',
			date: '2024-04-01',
			value: 240000000
		},
		{
			group: 'Foundation Reserve',
			date: '2024-07-01',
			value: 270000000
		},
		{
			group: 'Foundation Reserve',
			date: '2024-10-01',
			value: 300000000
		}
	];
</script>

<StackedAreaChart
	{data}
	options={{
		height: '400px',
		resizable: true,
		toolbar: {
			enabled: false
		},
		legend: {
			enabled: true,
			truncation: {
				type: 'none'
			}
		},
		axes: {
			left: {
				stacked: true,
				scaleType: 'linear',
				mapsTo: 'value'
			},
			bottom: {
				scaleType: 'time',
				mapsTo: 'date'
			}
		}
	}}
/>
