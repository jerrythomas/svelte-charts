<script>
  import { namedShapes } from '../lib/shape'

  export let x
  export let y
  export let size = 10
  export let fill = 'none'
  export let stroke = 'currentColor'
  export let thickness = 1

  export let name
  export let shape

  $: x = x - size / 2
  $: y = y - size / 2

  $: d =
    typeof shape === 'function'
      ? shape(size)
      : (shape || name) in namedShapes
      ? namedShapes[shape || name](size)
      : namedShapes.circle(size)
</script>

<!-- {#if shape} -->
<path
  {d}
  {fill}
  {stroke}
  transform="translate({x},{y})"
  stroke-width={thickness}
  fill-rule="evenodd"
  on:click
  on:mouseover
  on:mouseleave
  on:focus
/>
<!-- {:else}
  <circle
    cx={x}
    cy={y}
    r={size / 2}
    stroke-width={thickness}
    {fill}
    {stroke}
    on:click
    on:mouseover
    on:mouseleave
    on:focus
  /> -->
<!-- {/if} -->
