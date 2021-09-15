<script>
  import { Chart } from '@jerrythomas/svelte-charts'
  import { data } from '$lib/data'
  import ChartControls from '$lib/components/ChartControls.svelte'

  let theme = {
    grid: {
      thickness: 0.2,
      stroke: 'currentColor',
      opacity: '.5',
      dasharray: '0',
    },
    tick: {
      size: { inner: 6, outer: 6, padding: 3 },
      x: { orient: 'bottom' },
      y: { orient: 'left' },
    },
    background: 'bg-blue-50',
  }

  let params = {
    width: 600,
    height: 400,
    margin: {
      left: 50,
      top: 20,
      right: 30,
      bottom: 30,
    },
    ticks: {
      y: { count: 5 },
    },
  }

  let fields = {
    x: 'Species',
    y: 'Sepal_Length',
    fill: 'Species',
  }
</script>

<div class="flex flex-row h-full">
  <content class="flex-grow px-8">
    <h1>Plots</h1>
    <div class="flex flex-col items-center p-4">
      <Chart {theme} {params} {fields} {data} />
    </div>
  </content>

  <ChartControls {data} />
</div>
