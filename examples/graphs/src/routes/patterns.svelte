<script>
  // import { PatternSet } from '@jerrythomas/svelte-charts'
  import PatternDemo from '$lib/components/PatternDemo.svelte'

  import { brewer } from '../brew'

  // const size = 50
  // const gap = 10
  // const width = 800
  // const columns = Math.floor((width - gap) / (size + gap))

  const patterns = [...Array(22)].map((_, i) =>
    String.fromCharCode('A'.charCodeAt(0) + i)
  )

  const darkColors = [
    { fill: '#D7F1FE', stroke: '#023047' },
    { fill: '#EFF6FF', stroke: '#2563EB' },
    { fill: '#FDF2F8', stroke: '#DB2777' },
    { fill: '#ECFDF5', stroke: '#059669' },
    { fill: '#F5F3FF', stroke: '#7C3AED' },
    { fill: '#FEF2F2', stroke: '#DC2626' },
    { fill: '#FFFBEB', stroke: '#D97706' },
  ]
  const lightColors = [
    { fill: '#023047', stroke: '#D7F1FE' },
    { fill: '#2563EB', stroke: '#EFF6FF' },
    { fill: '#DB2777', stroke: '#FDF2F8' },
    { fill: '#059669', stroke: '#ECFDF5' },
    { fill: '#7C3AED', stroke: '#F5F3FF' },
    { fill: '#DC2626', stroke: '#FEF2F2' },
    { fill: '#D97706', stroke: '#FFFBEB' },
  ]

  $: console.log(brewer().brew())
</script>

<h1>Patterns</h1>
<p>({patterns.length - 1})</p>
<PatternDemo prefix="1" {patterns} />

<h1>Using darker shades</h1>
<PatternDemo prefix="2" {patterns} shades={lightColors} repeat={true} />

<h1>Using lighter shades</h1>
<PatternDemo prefix="3" {patterns} shades={darkColors} repeat={true} />
