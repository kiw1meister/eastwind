<script lang=ts>
    let currentIndex = $state(1)
    import { onMount } from 'svelte';

    import { tileLookup } from '../../assets/lookup'

    let ruleInfo = {
        intro: {
            text: "In this section, we will be discussing the basic win condition for a game of Japanese Mahjong."
        },
        card2: {
            image: ['2m', '3m', '4m', '4m', '5p', '6p', '3s', '5s', '7s', 'r', 'r', 'g', 'n'],
            text: "You start off drawing 13 tiles into your hand. Your ultimate goal is to form a winning hand consisting of 14 tiles. With some exceptions, a winning hand will consist of 4 tile 'melds' and a pair."
        },
        card3: {
            image: ['5p', '6p', '7p'],
            text: "A meld consists of 3 tiles. The above is a 'Chii' meld. It can only be formed using numbered tiles and consists of 3 tiles in sequential order"
        },
        card4: {
            image: ['5m', '5m', '5m'],
            text: "The above is a 'Pon' meld, which consists of 3 of the same tiles. Both numbered and honor tiles can form a 'Pon' meld."
        },
        card5: {
            image: ['r', 'r', 'r', 'r'],
            text: "The above is a 'Kan' meld which consists of 4 of the same tile. Both numbered and honor tiles can form a 'Kan' meld."
        },
        card6: {
            image: ['3m', '4m', '5m', '4p', '5p', '6p', '7s', '7s', '7s', 'r', 'r', 'r', 'n', 'n'],
            text: "Here is an example of a winning hand! 4 melds and a pair of the same tile for a total of 14 tiles."
        },
        outro: {
            text: "But that's not all there is to Japanese Mahjong! Your hand must include at least 1 yaku and there is much in terms of strategy to be learned. More information on yakus, strategy, and game flow can be found in their respective categories on the app."
        }
    }

</script>

{#if currentIndex === 1}

    <div class="p-6 shadow-lg bg-white rounded-xl">
        <div>
            {ruleInfo.intro.text}
        </div>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex++}>
            Next
        </button>
    </div>

{/if}
{#if currentIndex === 2}

    <div class="p-6 shadow-lg bg-white rounded-xl">
        <div class="flex flex-wrap justify-center">
            {#each ruleInfo.card2.image as image}
                <img src={tileLookup[image]} alt="Mahjong tile" class="max-w-14 h-auto m-1 object-cover" />
            {/each}
        </div>
        <div class="mt-2">
            {ruleInfo.card2.text}
        </div>


        <button class="prev-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex--}>
            Previous
        </button>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex++}>
            Next
        </button>

    </div>

{/if}
{#if currentIndex === 3}

    <div class="p-6 shadow-lg bg-white rounded-xl">
        <div class="flex flex-wrap justify-center">
            {#each ruleInfo.card3.image as image}
                <img src={tileLookup[image]} alt="Mahjong tile" class="max-w-14 h-auto m-1 object-cover" />
            {/each}
        </div>
        <div class="mt-2">
            {ruleInfo.card3.text}
        </div>


        <button class="prev-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex--}>
            Previous
        </button>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex++}>
            Next
        </button>

    </div>

{/if}
{#if currentIndex === 4}

    <div class="p-6 shadow-lg bg-white rounded-xl">
        <div class="flex flex-wrap justify-center">
            {#each ruleInfo.card4.image as image}
                <img src={tileLookup[image]} alt="Mahjong tile" class="max-w-14 h-auto m-1 object-cover" />
            {/each}
        </div>
        <div class="mt-2">
            {ruleInfo.card4.text}
        </div>


        <button class="prev-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex--}>
            Previous
        </button>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex++}>
            Next
        </button>

    </div>

{/if}
{#if currentIndex === 5}

    <div class="p-6 shadow-lg bg-white rounded-xl">
        <div class="flex flex-wrap justify-center">
            {#each ruleInfo.card5.image as image}
                <img src={tileLookup[image]} alt="Mahjong tile" class="max-w-14 h-auto m-1 object-cover" />
            {/each}
        </div>
        <div class="mt-2">
            {ruleInfo.card5.text}
        </div>


        <button class="prev-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex--}>
            Previous
        </button>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex++}>
            Next
        </button>

    </div>

{/if}
{#if currentIndex === 6}

    <div class="p-6 shadow-lg bg-white rounded-xl">
        <div class="flex flex-wrap justify-center">
            {#each ruleInfo.card6.image as image}
                <img src={tileLookup[image]} alt="Mahjong tile" class="max-w-14 h-auto m-1 object-cover" />
            {/each}
        </div>
        <div class="mt-2">
            {ruleInfo.card6.text}
        </div>


        <button class="prev-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex--}>
            Previous
        </button>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex++}>
            Next
        </button>

    </div>

{/if}
{#if currentIndex === 7}

    <div class="p-6 shadow-lg bg-white rounded-xl">
        <div>
            {ruleInfo.outro.text}
        </div>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex--}>
            Previous
        </button>
    </div>

{/if}

