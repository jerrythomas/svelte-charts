<script>
  import { TimelapseChart } from '@jerrythomas/svelte-charts'
  import { data } from '$lib/data'

  let stages
  let current = 0

  let theme = {
    grid: {
      thickness: 2,
      stroke: 'currentColor',
      opacity: 1,
      dasharray: '1 3 1',
    },
    tick: {
      size: { inner: 6, outer: 6, padding: 3 },
      x: { orient: 'bottom' },
      y: { orient: 'left' },
    },
    background: 'bg-blue-50',
  }

  // $: groups = sliceBy(data, 'Petal_Length', 3, 1)
  // $: console.log('stages', stages)
</script>

<section class="flex flex-row h-full">
  <content class="flex flex-col w-full px-8 natural-light">
    <h1>Home</h1>
    <TimelapseChart
      {data}
      x="Species"
      y="Sepal_Length"
      time="Petal_Length"
      {theme}
      {current}
      bind:stages
    />
  </content>
  <control
    class="flex flex-col h-full bg-gray-200 border-l border-gray-600 w-96 p-4"
  >
    {#if typeof stages != 'undefined'}
      <label class="flex flex-col w-min p-4 gap-2">
        Select Phase
        <input type="range" bind:value={current} min={0} max={stages} />
      </label>
    {/if}
  </control>
</section>
