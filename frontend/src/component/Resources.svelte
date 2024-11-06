<script lang="ts">
    import { tileLookup } from '../utils/lookup';
  
    // Example tile titles for a Mahjong hand
    let tileNames: string[] = $state(['1p', '2p', '3p', 'E', 'R']);

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
<div class="hand">
    {#each tileImage as image}
      <img src={image} alt="Mahjong tile" class="tile" />
    {/each}
</div>
  
<style>
    .hand {
      display: flex;
      gap: 10px;
    }
    .tile {
      width: 100px; /* Adjust as needed */
      height: auto; /* Maintain aspect ratio */
    }
</style>
  