<script>
  import { clamp } from 'yootils'

  export let data
  export let x
  export let y
  export let r = 4
  export let scaleX
  export let scaleY
  export let fill = 'white'
  export let stroke = '#c0c0c0'
  export let jitterWidth = 50
  export let offset

  $: jitterWidth = clamp(jitterWidth, 0, 100 / 2)
  $: offset = clamp(offset | (jitterWidth / 2), 0, 100)
</script>

{#each data as d}
  <circle
    cx={scaleX(d[x]) - offset + Math.random() * jitterWidth}
    cy={scaleY(d[y])}
    {r}
    {fill}
    {stroke}
  />
{/each}
