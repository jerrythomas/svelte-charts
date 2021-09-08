<script>
  import { patterns, fallback } from './shapes'
  const size = 10

  export let thickness = 0.5
  export let names
  export let shades = []
  export let prefix = 0

  $: keys = [...new Set(names)]
  $: shades = keys.map((x, i) => (i < shades?.length ? shades[i] : fallback))
</script>

<defs>
  {#each keys as id, index}
    <pattern
      id="{prefix}-{id}"
      patternUnits="userSpaceOnUse"
      width={size}
      height={size}
    >
      <rect width={size} height={size} fill={shades[index].fill} />
      {#if id in patterns}
        <path
          d={patterns[id]}
          fill="none"
          stroke={shades[index].stroke}
          stroke-width={thickness}
        />
      {/if}
    </pattern>
  {/each}
</defs>
