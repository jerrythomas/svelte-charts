<script>
  import { clamp } from 'yootils'
  import Symbol from '../chart/Symbol.svelte'

  export let data
  export let x
  export let y
  export let size = 8
  export let scaleX
  export let scaleY
  export let fill = 'white'
  export let stroke = '#c0c0c0'
  export let jitterWidth = 50
  export let offset
  export let id

  $: jitterWidth = clamp(jitterWidth, 0, 100 / 2)
  $: offset = clamp(offset | (jitterWidth / 2), 0, 100)
</script>

{#each data as d}
  <Symbol
    x={scaleX(d[x]) - offset + Math.random() * jitterWidth}
    y={scaleY(d[y])}
    {id}
    {fill}
    {stroke}
    {size}
  />
{/each}
