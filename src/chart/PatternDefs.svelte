<script>
  const size = 10

  export let thickness = 0.5
  export let patterns
</script>

<defs>
  {#each patterns as { id, fill, path, contrast, angle }}
    <pattern {id} patternUnits="userSpaceOnUse" width={size} height={size}>
      <rect width={size} height={size} {fill} />

      <path
        d={path}
        fill="none"
        stroke={contrast}
        stroke-width={thickness}
        transform="rotate({angle || 0},5,5)"
      />
    </pattern>
  {/each}
</defs>
