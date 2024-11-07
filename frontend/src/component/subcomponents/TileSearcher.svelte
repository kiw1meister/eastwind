<script lang="ts">
    import { tileLookup } from '../../assets/lookup';
  
    let tileNames: string[] = $state(Object.keys(tileLookup));
    let filterTiles = $derived(tileNames.filter((tile) => tile.toLowerCase().includes(input.toLowerCase())));

    let input = $state("");
    let isOpen = $state(false);
</script>

  <div class="p-4 max-w-md mx-auto">
    <button
      onclick={() => (isOpen = !isOpen)}
      class="bg-tealgreen text-white px-4 py-2 rounded w-full text-left flex justify-between items-center"
    >
      Search Syntax
      <svg
        class="h-5 w-5 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class:rotate-180={isOpen} 
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  
    <!-- Collapsible List -->
    <ul
      class="mt-2 space-y-2 overflow-hidden transition-all duration-300"
      style:max-height={isOpen ? '400px' : '0px'} 
    >
      <li class="p-2 bg-white rounded">Numbered: 1 to 9</li>
      <li class="p-2 bg-white rounded">Manzu: m</li>
      <li class="p-2 bg-white rounded">Pinzu: p</li>
      <li class="p-2 bg-white rounded">Souzu: s</li>
      <li class="p-2 bg-white rounded">Wind: e, s, w, n</li>
      <li class="p-2 bg-white rounded">Dragon: r, g, h</li>
      <li class="p-2 bg-white rounded">Aka Dora: a</li>
    </ul>
  </div>

<div class="text-center">

  <input 
    type="text" 
    placeholder="Type tile names as documented above" 
    bind:value={input}
    class="block mx-auto w-1/2 p-4 text-l rounded-xl"
  />
  
  <h2 class="my-5 text-xl">Your Mahjong Tiles:</h2>
  <div class="flex flex-wrap gap-3">
    {#if input}
      {#each filterTiles as image}
        <img src={tileLookup[image]} alt="Mahjong tile" class="w-1/6 h-auto object-cover mx-auto" />
      {/each}
    {/if}
  </div>

</div>

  