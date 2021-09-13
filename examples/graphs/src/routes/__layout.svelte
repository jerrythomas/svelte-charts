<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch, session, context }) {
    return { props: { activePage: page.path } }
  }
</script>

<script>
  import '@fontsource/montserrat-alternates'
  import '@fontsource/kalam'
  import '../app.postcss'
  import Sidebar from '$lib/Sidebar.svelte'
  import { menu } from '$config'

  export let activePage
</script>

<Sidebar {menu} {activePage} />
<section class="w-full overflow-y-scroll">
  <slot />
</section>
