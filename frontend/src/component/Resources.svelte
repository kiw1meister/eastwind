<script lang="ts">
    import { tileLookup } from '../assets/lookup';
  
    // Example tile titles for a Mahjong hand
    let tileNames: string[] = $state(Object.keys(tileLookup));
    let filterTiles = $derived(tileNames.filter((tile) => tile.toLowerCase().includes(input.toLowerCase())));

    let input = $state("");

    // Create an array of image paths based on the titles
    let tileImage = $state(tileNames.map(tile => tileLookup[tile] || '/images/default.png'));
</script>

  <!-- Input box for tile names -->
<input 
    type="text" 
    placeholder="Type tile names separated by commas (e.g., 1p, 2p, E, R)" 
    bind:value={input}
    class="input-box"
/>
  
<h2>Your Mahjong Hand:</h2>
<div class="flex gap-3">
    {#each filterTiles as image}
      <img src={tileLookup[image]} alt="Mahjong tile" class="w-24 h-auto" />
    {/each}
</div>
  