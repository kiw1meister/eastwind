<script lang="ts">
  import { siteState } from './store'
  import Home from './component/Home.svelte';
  import Sidebar from './component/Sidebar.svelte';
  import Basics from './component/Basics.svelte';

  // let siteState = $state<string>('home')
  // let active = $state<boolean>(false)

  let state;
  $: state = $siteState;

  function toggleActive() {
    siteState.update(state => ({ ...state, active: !state.active }));
  }

</script>

<div class="flex items-center justify-center h-20 bg-forestgreen text-white">
  <button class="absolute top-15 left-5" onclick={toggleActive}>
    {state.active ? 'Close' : 'Open'} Menu
  </button>
  <h1 class="text-center text-4xl">Project East Wind</h1>
</div>

<Sidebar />

<main class="bg-cream h-screen">
  {#if state.view==='home'}
    <Home />
  {/if}
  {#if state.view==="basics"}
    <Basics />
  {/if}
  <!-- {#if siteState==="strategy"}

  {/if}
  {#if siteState==="practice"}

  {/if} -->
</main>
