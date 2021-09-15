<script>
  import Icon from '$lib/Icon.svelte'

  export let items
  export let activePage
</script>

<ul class="flex flex-col bg-accent-50 rounded-xl overflow-hidden">
  {#each items as item}
    <li
      class="flex flex-row items-center py-3 px-4 border-b last:border-b-0 border-accent-200 hover:bg-accent-100"
      class:current={item.target === activePage}
    >
      <a href={item.target} class="flex flex-row">
        <Icon icon={item.icon} title={item.label} />
        <p class="px-4 flex flex-grow">{item.label}</p>
      </a>
    </li>
  {/each}
</ul>

<style lang="postcss">
  .current {
    @apply text-accent-800 font-semibold stroke-current;
  }
</style>
