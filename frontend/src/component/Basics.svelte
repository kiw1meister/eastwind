<script>
    import { fade } from 'svelte/transition';
    import Tiles from '../component/subcomponents/Tiles.svelte'
    import Rules from './subcomponents/Rules.svelte';

    let cardView = $state(null)
</script>

<div class="p-5 sm:w-1/2 place-content-center mx-auto" transition:fade>

    {#if cardView === null}
        <div class="text-center m-10">
            <h1 class="text-3xl">Click on the cards below to learn more about each aspect of the game!</h1>
        </div>
    
        <div class="grid grid-cols-2 gap-5 place-content-center">
            <button class="p-6 shadow-lg bg-white rounded-xl" onclick={cardView="tile"}>
                The Tiles
            </button>
        
            <button class="p-6 shadow-lg bg-white rounded-xl" onclick={cardView="rules"}>
                The Rules
            </button>
        
            <button class="p-6 shadow-lg bg-white rounded-xl" onclick={cardView="flow"}>
                The Game Flow
            </button>
        
            <button class="p-6 shadow-lg bg-white rounded-xl" onclick={cardView="yaku"}>
                The Yaku
            </button>
        </div>
    {/if}

    {#if cardView === 'tile'}
         <div in:fade>
            <Tiles />
        </div>
    {/if}
    {#if cardView === 'rules'}
    <div in:fade>
       <Rules />
   </div>
    {/if}

    {#if cardView === "tile" || cardView === "rules" || cardView === "flow" || cardView === "yaku"}
        <button class="bg-white mt-4 p-2 shadow-lg rounded-lg border-2" onclick={cardView = null}>
            Back to Top
        </button>
    {/if}

</div>