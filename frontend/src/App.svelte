<script lang="ts">
  import { siteState } from './store'
  import Home from './component/Home.svelte';
  import Sidebar from './component/Sidebar.svelte';
  import Basics from './component/Basics.svelte';
  import Resources from './component/Resources.svelte';
  import Practice from './component/Practice.svelte';

  // let siteState = $state<string>('home')
  // let active = $state<boolean>(false)

  function toggleActive() {
    siteState.update(state => ({ ...state, active: !state.active }));
  }

</script>

<div class="flex items-center justify-center h-20 bg-forestgreen text-white">
  <button class="absolute top-15 left-5" onclick={toggleActive}>
    {$siteState.active ? 'Close' : 'Open'} Menu
  </button>
  <h1 class="text-center text-4xl">Project East Wind</h1>
</div>

<Sidebar />

<main class="bg-cream h-screen">
  {#if $siteState.view==='home'}
    <Home />
  {/if}
  {#if $siteState.view==="basics"}
    <Basics />
  {/if}
  <!-- {#if state.view==="strategy"}
    <Strategy />
  {/if}
  {#if state.view==="scoring"}
    <Scoring />
  {/if} -->
  {#if $siteState.view==="practice"}
    <Practice />
  {/if}
  {#if $siteState.view==="resources"}
    <Resources />
  {/if}
</main>
