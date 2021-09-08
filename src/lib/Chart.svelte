<script>
  import { setContext } from 'svelte'
  import { getScale, getLabels, getAxis } from './chart'

  import ChartArea from './ChartArea.svelte'
  import Axis from './Axis.svelte'
  import Plot from './Plot.svelte'
  import Legend from './Legend.svelte'
  import Grid from './Grid.svelte'

  export let data // current data
  //   export let next // next data set for transitioning
  export let fields // x, y and fill attributes
  export let theme // patterns, colors, symbols, ticks
  export let params // show/hide axis, show/hide labels, padding
  let vertical = false
  //   export let duration = 5
  let axis
  $: axis = getAxis(data, fields, params)
  $: console.log(axis.x, axis.y)
  //   $: labels = getLabels(data, fields, theme)
  // 	$: {left, top, right, bottom} = params.margin
  // 	$: getAxis(data, fields, params)
  $: setContext('chart', { data, axis, theme, params })
</script>

<svg viewBox="0 0 {params.width} {params.height}" class={theme.background}>
  <Grid />
  <!--   {#if params.axis.x.show}-->
  <Axis orient="bottom" />
  <Axis orient="left" />
  <!-- 	  <Axis  orient="top" /> -->
  <!-- 	  <Axis  orient="right" /> -->
  <!--  {/if}
  {#if params.axis.x.show}
    <Axis {...axis.y} />
  {/if}
  {#each params.plots as type}
    <Plot {type} />
  {/each}
  {#if params.labels.show}
    <Legend {labels} />
  {/if} -->
</svg>
