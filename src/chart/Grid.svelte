<script>
  import { getContext } from 'svelte'

  let chart = getContext('chart')
  $: xRange = $chart.axis.x.scale.range()
  $: yRange = $chart.axis.y.scale.range()
</script>

<g
  stroke-width={$chart.theme.grid.thickness}
  stroke={$chart.theme.grid.stroke}
  opacity={$chart.theme.grid.opacity}
  stroke-dasharray={$chart.theme.grid.dasharray}
>
  {#each $chart.axis.x.ticks as tick}
    <line x1={tick.position} x2={tick.position} y1={yRange[0]} y2={yRange[1]} />
  {/each}
  {#each $chart.axis.y.ticks as tick}
    <line y1={tick.position} y2={tick.position} x1={xRange[0]} x2={xRange[1]} />
  {/each}
</g>
