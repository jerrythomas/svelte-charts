<script>
  import Icon from '$lib/Icon.svelte'

  export let items
  export let activePage
</script>

<nav class="select-none flex flex-col bg-accent-50 rounded-xl overflow-hidden">
  {#each items as item}
    <a
      href={item.target}
      class="flex flex-row w-full items-center px-4 py-2 border-b last:border-b-0 border-accent-200 hover:bg-accent-100"
      class:current={item.target === activePage}
    >
      <Icon icon={item.icon} title={item.label} />
      <p class="px-4 flex flex-grow">{item.label}</p>
    </a>
  {/each}
</nav>

<style lang="postcss">
  .current {
    @apply bg-accent-200 text-accent-900 font-semibold stroke-current;
  }
</style>
