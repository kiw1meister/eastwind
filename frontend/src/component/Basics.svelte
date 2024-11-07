<script>
    import { fade } from 'svelte/transition';
    import Tiles from '../component/subcomponents/Tiles.svelte'
    import Rules from './subcomponents/Rules.svelte';
    import Flow from './subcomponents/Flow.svelte';
    import Yaku from './subcomponents/Yaku.svelte';

    let cardView = $state(null)
</script>

<div class="p-5 sm:w-1/2 place-content-center mx-auto" transition:fade>

    {#if cardView === null}
        <div class="text-center m-10">
            <h1 class="text-3xl">Click on the cards below to learn more about each aspect of the game!</h1>
        </div>
    
        <div class="grid grid-cols-2 gap-5 place-content-center">
            <button class="text-black p-6 shadow-lg bg-white rounded-xl hover:bg-tealgreen hover:text-white ease-in-out transition duration-300" onclick={cardView="tile"}>
                The Tiles
            </button>
        
            <button class="p-6 shadow-lg bg-white rounded-xl hover:bg-tealgreen hover:text-white ease-in-out transition duration-300" onclick={cardView="rules"}>
                The Rules
            </button>
        
            <button class="p-6 shadow-lg bg-white rounded-xl hover:bg-tealgreen hover:text-white ease-in-out transition duration-300" onclick={cardView="flow"}>
                The Game Flow
            </button>
        
            <button class="p-6 shadow-lg bg-white rounded-xl hover:bg-tealgreen hover:text-white ease-in-out transition duration-300" onclick={cardView="yaku"}>
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
    {#if cardView === 'flow'}
        <div in:fade>
            <Flow />
        </div>
    {/if}
    {#if cardView === 'yaku'}
        <div in:fade>
            <Yaku />
        </div>
{/if}

    {#if cardView === "tile" || cardView === "rules" || cardView === "flow" || cardView === "yaku"}
        <button class="bg-white mt-4 p-2 shadow-lg rounded-lg border-2" onclick={cardView = null}>
            Back to Top
        </button>
    {/if}

</div>