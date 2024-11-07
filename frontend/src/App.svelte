<script lang="ts">
  import { siteState } from './store'
  import Home from './component/Home.svelte';
  import Sidebar from './component/Sidebar.svelte';
  import Basics from './component/Basics.svelte';
  import Strategy from './component/Strategy.svelte';
  import Scoring from './component/Scoring.svelte';
  import Resources from './component/Resources.svelte';
  import Practice from './component/Practice.svelte';

  function toggleActive() {
    siteState.update(state => ({ ...state, active: !state.active }));
  }

</script>

<div class="flex items-center justify-center h-20 bg-forestgreen text-white">
  <button class="absolute top-4 left-5 p-2" onclick={toggleActive}>
    <!-- Hamburger Menu -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 transition-transform duration-300 ease-in-out"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <!-- Top Line -->
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        class="transition-all duration-300 ease-in-out"
        stroke-width="2"
        stroke="currentColor"
        class:rotate-45={$siteState.active}
        style:transform-origin="50% 50%"
        class:translate-y-2={$siteState.active}
      />
      <!-- Middle Line -->
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        class="transition-all duration-300 ease-in-out"
        stroke-width="2"
        stroke="currentColor"
        opacity={$siteState.active ? 0 : 1}
      />
      <!-- Bottom Line -->
      <line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        class="transition-all duration-300 ease-in-out"
        stroke-width="2"
        stroke="currentColor"
        class:-rotate-45={$siteState.active}
        style:transform-origin="50% 50%"
        class:-translate-y-2={$siteState.active}
      />
    </svg>
  </button>
  <h1 class="text-white sm:text-4xl text-3xl font-bold mb-4">Project East Wind</h1>
</div>

<Sidebar />

<main class="bg-cream h-screen">
  {#if $siteState.view==='home'}
    <Home />
  {/if}
  {#if $siteState.view==="basics"}
    <Basics />
  {/if}
  {#if $siteState.view==="strategy"}
    <Strategy />
  {/if}
  {#if $siteState.view==="scoring"}
    <Scoring />
  {/if}
  {#if $siteState.view==="practice"}
    <Practice />
  {/if}
  {#if $siteState.view==="resources"}
    <Resources />
  {/if}
</main>
