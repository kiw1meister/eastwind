<script lang="ts">
  import Counter from './component/Counter.svelte'
  import Sidebar from './component/Sidebar.svelte';

  let siteState = $state('home')
  let active = $state(false)

</script>

<div class="flex items-center justify-center h-20 bg-forestgreen text-white">
  <button class="absolute top-15 left-5" onclick={active = !active}>
    {active ? 'Close' : 'Open'} Menu
  </button>
  <h1 class="text-center text-4xl">Project East Wind</h1>
</div>

<Sidebar 
  {active}
/>

<main class="bg-cream h-screen">
  {#if siteState==='home'}
    <h2 class="text-center ">
      Welcome to East Wind Academy!
    </h2>
  {/if}
  {#if siteState==="basics"}

  {/if}
</main>
