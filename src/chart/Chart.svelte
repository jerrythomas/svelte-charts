<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { brewer } from '../lib'

	import Axis from './Axis.svelte'
	import BoxPlot from '../plots/BoxPlot.svelte'
	import ScatterPlot from '../plots/ScatterPlot.svelte'
	import ViolinPlot from '../plots/ViolinPlot.svelte'

	import Grid from './Grid.svelte'

	let chart = writable({})
	setContext('chart', chart)

	export let data // current data
	export let fields // x, y and fill attributes
	export let theme // patterns, colors, symbols, ticks
	export let inverse = false
	// export let params // show/hide axis, show/hide labels, padding

	$: $chart = brewer()
		.chart(data, fields.x, fields.y)
		.computeAxis(0, inverse)
		.use(theme)
</script>

<svg viewBox="0 0 {$chart.width} {$chart.height}" class="chart" width="100%">
	<slot />
</svg>
