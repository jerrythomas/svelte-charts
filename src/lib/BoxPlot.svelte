<script>
  export let data
  export let scaleX
  export let scaleY
  export let stroke = 'green'
  export let fill = '#69b3a2' // fixed color or attribute to be used for color
  export let scaleFill = () => fill // defaults to fill color

  let boxWidth = 100
</script>

{#each data as { key, value }}
  <rect
    width={boxWidth}
    height={scaleY(value.q1) - scaleY(value.q3)}
    x={scaleX(key) - boxWidth / 2}
    y={scaleY(value.q3)}
    fill={scaleFill(value[fill])}
    {stroke}
  />
  <line
    x1={scaleX(key) - boxWidth / 2}
    x2={scaleX(key) + boxWidth / 2}
    y1={scaleY(value.median)}
    y2={scaleY(value.median)}
    {stroke}
  />
  <line
    x1={scaleX(key)}
    x2={scaleX(key)}
    y1={scaleY(value.min)}
    y2={scaleY(value.max)}
    {stroke}
  />
{/each}
