<script>
  import { fade } from 'svelte/transition';
  import TileSearcher from './subcomponents/TileSearcher.svelte';

  let cardView = $state(null)
</script>

<div class="p-5 sm:w-1/2 place-content-center mx-auto" transition:fade>

  {#if cardView === null}
      <div class="text-center m-10">
          <h1 class="text-3xl">Check out the resources below!</h1>
      </div>
  
      <div class="grid grid-cols-2 gap-5 place-content-center">
          <button class="text-black p-6 shadow-lg bg-white rounded-xl hover:bg-tealgreen hover:text-white ease-in-out transition duration-300" onclick={cardView="searcher"}>
              Tile Searcher
          </button>
      
          <button class="p-6 shadow-lg bg-white rounded-xl hover:bg-tealgreen hover:text-white ease-in-out transition duration-300" onclick={cardView="yaku"}>
              Yaku Sheet
          </button>
      
      </div>
  {/if}

  {#if cardView === 'searcher'}
       <div in:fade>
          <TileSearcher />
      </div>
  {/if}
  {#if cardView === 'yaku'}
      <div in:fade>
          <img src="https://i.redd.it/6no9e5x3dl921.jpg" alt="Yaku Reference Sheet">
      </div>
  {/if}

  {#if cardView === "searcher" || cardView === "yaku"}
      <button class="bg-white mt-4 p-2 shadow-lg rounded-lg border-2" onclick={cardView = null}>
          Back to Top
      </button>
  {/if}

</div>