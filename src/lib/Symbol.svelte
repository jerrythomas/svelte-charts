<script>
  import { shapes } from './shapes'

  export let x
  export let y
  export let size = 10
  export let fill = 'none'
  export let stroke = 'currentColor'
  export let thickness = 0.4
  export let id

  $: x = x - size / 2
  $: y = y - size / 2
  $: id = id in shapes ? id : 'A'
  $: d = shapes[id](size)
</script>

<path
  {d}
  {fill}
  {stroke}
  transform="translate({x},{y})"
  stroke-width={thickness}
  fill-rule="evenodd"
/>
