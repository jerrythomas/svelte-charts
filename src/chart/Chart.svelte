<script>
  import { setContext } from 'svelte'
  import { brewer } from '../lib'

  import Axis from './Axis.svelte'
  // import Plot from '../plots/Plot.svelte'
  // import Legend from './Legend.svelte'
  import Grid from './Grid.svelte'

  export let data // current data
  export let fields // x, y and fill attributes
  export let theme // patterns, colors, symbols, ticks
  export let params // show/hide axis, show/hide labels, padding
  let chart = brewer().chart(data, fields.x, fields.y).computeAxis().use(theme)

  $: setContext('chart', chart)
</script>

<svg
  viewBox="0 0 {chart.width} {chart.height}"
  class={theme.background}
  width="100%"
>
  <Grid />
  <Axis orient="bottom" />
  <Axis orient="left" />
  <!-- <Axis orient="top" /> -->
  <!-- <Axis orient="right" /> -->

  <!-- {#each params.plots as type}
    <Plot {type} />
  {/each}
  {#if params.labels.show}
    <Legend {labels} />
  {/if}  -->
</svg>
