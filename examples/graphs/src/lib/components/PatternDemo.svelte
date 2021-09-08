<script>
  import { PatternSet } from '@jerrythomas/svelte-charts'
  export let size = 60
  export let rows
  export let columns = 7
  export let spacing = 10
  export let patterns = []
  export let shades = []
  export let prefix
  export let repeat = false

  $: rows = rows ? rows : Math.ceil(patterns.length / columns)
  $: height = (size + spacing) * rows
  $: width = spacing + (size + spacing) * columns
  $: data = patterns.map((id, index) => ({
    id,
    cx: spacing / 2 + ((index % columns) + 0.5) * (size + spacing),
    cy: (0.5 + Math.floor(index / columns)) * (size + spacing),
  }))
  $: shades = repeat
    ? patterns.map((id, index) => shades[index % shades.length])
    : shades
</script>

<svg viewBox="0 0 {width} {height}">
  <PatternSet {prefix} names={patterns} {shades} />
  {#each data as { id, cx, cy }}
    <!-- <rect
      x={cx - size / 2}
      y={cy - size / 2}
      width={size}
      height={size}
      fill="url(#{prefix}-{id})"
    /> -->
    <circle
      fill="url(#{prefix}-{id})"
      {cx}
      {cy}
      r={size / 2}
      stroke="currentColor"
      stroke-width=".2"
    />
  {/each}
</svg>
