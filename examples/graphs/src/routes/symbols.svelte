<script>
  import { PatternSet, Symbol } from '@jerrythomas/svelte-charts'

  const size = 50
  const gap = 10
  const width = 800
  const columns = Math.floor((width - gap) / (size + gap))

  const symbols = [...Array(15)].map((_, i) =>
    String.fromCharCode('A'.charCodeAt(0) + i)
  )
  const patterns = [...Array(22)].map((_, i) =>
    String.fromCharCode('A'.charCodeAt(0) + i)
  )

  const lightColors = [
    { fill: '#D7F1FE', stroke: '#023047' },
    { fill: '#EFF6FF', stroke: '#2563EB' },
    { fill: '#FDF2F8', stroke: '#DB2777' },
    { fill: '#ECFDF5', stroke: '#059669' },
    { fill: '#F5F3FF', stroke: '#7C3AED' },
    { fill: '#FEF2F2', stroke: '#DC2626' },
    { fill: '#FFFBEB', stroke: '#D97706' },
  ]
  const colors = [
    { fill: '#023047', stroke: '#D7F1FE' },
    { fill: '#2563EB', stroke: '#EFF6FF' },
    { fill: '#DB2777', stroke: '#FDF2F8' },
    { fill: '#059669', stroke: '#ECFDF5' },
    { fill: '#7C3AED', stroke: '#F5F3FF' },
    { fill: '#DC2626', stroke: '#FEF2F2' },
    { fill: '#D97706', stroke: '#FFFBEB' },
  ]

  $: height = Math.ceil(patterns.length / columns) * (size + gap) + 4 * gap
</script>

<h1>Symbols ({symbols.length})</h1>
<svg viewBox="0 0 {width} {height}">
  {#each symbols as id, index}
    <Symbol
      {id}
      x={gap + ((index % columns) + 0.5) * (size + gap)}
      y={2 * gap + (0.5 + Math.floor(index / columns)) * (size + gap)}
      fill={index < colors.length ? colors[index].fill : '#E5E7EB'}
      stroke={index < colors.length ? colors[index].stroke : '#9CA3AF'}
      {size}
    />
  {/each}
</svg>

<h1>Patterns ({patterns.length - 1})</h1>

<svg viewBox="0 0 {width} {height}">
  {#each patterns as id, index}
    <circle
      fill="url(#{id})"
      cx={gap + ((index % columns) + 0.5) * (size + gap)}
      cy={2 * gap + (0.5 + Math.floor(index / columns)) * (size + gap)}
      r={size / 2}
    />
  {/each}
  <PatternSet names={patterns} />
</svg>
