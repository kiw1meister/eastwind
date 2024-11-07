<script lang=ts>
    let currentIndex = $state(1)
    import { onMount } from 'svelte';

    import { tileLookup } from '../../assets/lookup'

    let yakuInfo = {
        intro: {
            text: "In this section, we will be discussing yaku, an essential condition to winning a game of Japanese Mahjong."
        },
        card2: {
            text: "You can think of yaku like Poker Hands: specific combinations of tiles that elevate the score of your hand. However, unlike Poker where a high card can still win, you NEED at least one yaku for your hand to be a valid."
        },
        card3: {
            image: ['r', 'r', 'r'],
            text: "The above is perhaps one of the simplest and easiest yaku to obtain. Having a dragon tile triplet meld in your hand is a yaku and worth 1 han."
        },
        card4: {
            image: ['3m', '3m', '3m', '3p', '3p', '3p', '3s', '3s', '3s'],
            text: "Han are the basic points your hand is worth. The harder the yaku is to assemble, the more han it is worth. Having the above tiles in your hand will net you the triple Pon yaku, three Pon melds of the same number in each suit, worth 2 han."
        },
        card5: {
            image: ['1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '2s', '2s','2s', 's', 's'],
            text: "When you take a discarded tile from another player. Your hand becomes 'open'. Some yaku are worth less when open. The above is the Pure Straight yaku, a straight of 1 to 9 in one suit. Worth 2 han when your hand is closed, but only 1 han when it is open. There are also some yaku that are only valid when your hand is closed."
        },
        card6: {
            image: ['3m', '3m', '6m', '6m', '5p', '5p', '8p', '8p', '7s', '7s', 'r', 'r', 'w', 'w'],
            text: "There are some yaku that let you break the traditional win conditions of the game! The above is a Chiitoitsu, or Seven Pairs in English. A closed hand yaku worth 2 han where you have 7 pairs instead of 4 melds and a pair."
        },
        card7: {
            image: ['e', 'e', 'e', 's', 's', 's', 'w', 'w', 'w', 'n', 'n', 'n', '2p', '2p'],
            text: "Finally, the hardest to obtain category of yaku, called yakuman, are worth 13 han, the maximum han attainable in one hand. Winning with these is often enough to bankrupt someone immediately and end the game! The above example is a Daisuushii, or Four Big Winds in English; 4 melds of every Wind tile."
        },
        outro: {
            text: "Memorizing all the yaku can be the most challenging part of Japanese Mahjong, but it is easier than it looks. Most are quite intuitive since they aim to make a 'pretty' hand. East Wind Academy recommends newer players to learn and aim for the easier to obtain yaku and chase for the higher earners once they have gained experience. A full list of yaku can be found in the Resources section!"
        }
    }

</script>

{#if currentIndex === 1}

    <div class="p-6 shadow-lg bg-white rounded-xl">
        <div>
            {yakuInfo.intro.text}
        </div>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex++}>
            Next
        </button>
    </div>

{/if}
{#if currentIndex === 2}

    <div class="p-6 shadow-lg bg-white rounded-xl">
        <div>
            {yakuInfo.card2.text}
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
            {#each yakuInfo.card3.image as image}
                <img src={tileLookup[image]} alt="Mahjong tile" class="max-w-14 h-auto m-1 object-cover" />
            {/each}
        </div>
        <div class="mt-2">
            {yakuInfo.card3.text}
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
            {#each yakuInfo.card4.image as image}
                <img src={tileLookup[image]} alt="Mahjong tile" class="max-w-14 h-auto m-1 object-cover" />
            {/each}
        </div>
        <div class="mt-2">
            {yakuInfo.card4.text}
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
            {#each yakuInfo.card5.image as image}
                <img src={tileLookup[image]} alt="Mahjong tile" class="max-w-14 h-auto m-1 object-cover" />
            {/each}
        </div>
        <div class="mt-2">
            {yakuInfo.card5.text}
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
            {#each yakuInfo.card6.image as image}
                <img src={tileLookup[image]} alt="Mahjong tile" class="max-w-14 h-auto m-1 object-cover" />
            {/each}
        </div>
        <div class="mt-2">
            {yakuInfo.card6.text}
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
        <div class="flex flex-wrap justify-center">
            {#each yakuInfo.card7.image as image}
                <img src={tileLookup[image]} alt="Mahjong tile" class="max-w-14 h-auto m-1 object-cover" />
            {/each}
        </div>
        <div class="mt-2">
            {yakuInfo.card7.text}
        </div>


        <button class="prev-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex--}>
            Previous
        </button>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex++}>
            Next
        </button>

    </div>

{/if}
{#if currentIndex === 8}

    <div class="p-6 shadow-lg bg-white rounded-xl">
        <div>
            {yakuInfo.outro.text}
        </div>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex--}>
            Previous
        </button>
    </div>

{/if}
