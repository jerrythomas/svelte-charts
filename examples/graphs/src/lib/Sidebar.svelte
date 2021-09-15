<script>
  import Menu from './Menu.svelte'

  export let menu
  export let activePage
  // $: console.log('activepage', activePage)
</script>

<aside
  class="bg-accent-300 bg-texture text-accent-600 p-8 h-full w-80 space-y-6"
>
  <slot name="profile" />
  <Menu items={menu} {activePage} />
</aside>
