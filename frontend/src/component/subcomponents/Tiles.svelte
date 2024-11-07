<script lang=ts>
    let currentIndex = $state(1)

    import { tileLookup } from '../../assets/lookup'

    let tileInfo = {
        intro: {
            text: "Before you begin learning Mahjong, you must learn how to read the tiles! You can't learn the game if you can't even read the tiles. Players with knowledge in Chinese or Japanese will find this significantly easier."
        },
        pinzu: {
            image: ['1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p'],
            text: "These are the pinzu tiles. They number from 1 to 9 and can be denoted by having these circular patterns as their suite."
        },
        souzu: {
            image: ['1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s'],
            text: "These are the souzu tiles, also known as the bamboo tiles in English. They number from 1 to 9 and can be denoted by having these stick-like patterns as their suite. Most of the tiles are quite straight forward, but the 1 souzu tile actually takes the form of a peacock which can be confusing to newer players."
        },
        manzu: {
            image: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m'],
            text: "These are the manzu tiles. They number from 1 to 9 and can be denoted by having the kanji letter of the number plus the kanji for ten-thousand 'man'. Learning these can be tricky for people without a background in Japanese or Chinese."
        },
        wind: {
            image: ['e', 's', 'w', 'n'],
            text: "These are the wind tiles. They are classified as 'honor' tiles in Mahjong. There are four of them, each with the kanji letter for East, South, West, and North respectively."
        },
        dragon: {
            image: ['r', 'g', 'h'],
            text: "These are the dragon tiles. Like the wind tiles, these also are classified as 'honor' tiles in Mahjong. There are three of them, with Kanji meaning different things, but it's easy to just remember them as the Red, Green, and White dragon tiles respectively."
        },
        akadora: {
            image: ['a5m', 'a5p', 'a5s'],
            text: "These are the Aka/Red Dora tiles. Notice how they are just the 5 numbered tile for Pinzu, Souzu, and Manzu but in red. They function almost identically to their regular colored counterparts, but are worth extra points if you win with them in your hand! Try and hold on to these if you can."
        },
        outro: {
            text: "And that's all of the basic tiles in Mahjong! The honor and manzu tiles can be challenging for some people but once you get into the flow of things, they are quite easy to learn."
        }
    }

</script>

{#if currentIndex === 1}

    <div class="p-6 shadow-lg bg-white rounded-xl">
        <div>
            {tileInfo.intro.text}
        </div>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex++}>
            Next
        </button>
    </div>

{/if}
{#if currentIndex === 2}

    <div class="p-6 shadow-lg bg-white rounded-xl">
        <div class="flex flex-wrap justify-center">
            {#each tileInfo.manzu.image as image}
                <img src={tileLookup[image]} alt="Mahjong tile" class="w-14 h-auto m-1 object-cover" />
            {/each}
        </div>
        <div class="mt-2">
            {tileInfo.manzu.text}
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
            {#each tileInfo.pinzu.image as image}
                <img src={tileLookup[image]} alt="Mahjong tile" class="w-14 h-auto m-1 object-cover" />
            {/each}
        </div>
        <div class="mt-2">
            {tileInfo.pinzu.text}
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
            {#each tileInfo.souzu.image as image}
                <img src={tileLookup[image]} alt="Mahjong tile" class="w-14 h-auto m-1 object-cover" />
            {/each}
        </div>
        <div class="mt-2">
            {tileInfo.souzu.text}
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
            {#each tileInfo.wind.image as image}
                <img src={tileLookup[image]} alt="Mahjong tile" class="w-14 h-auto m-1 object-cover" />
            {/each}
        </div>
        <div class="mt-2">
            {tileInfo.wind.text}
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
            {#each tileInfo.dragon.image as image}
                <img src={tileLookup[image]} alt="Mahjong tile" class="w-14 h-auto m-1 object-cover" />
            {/each}
        </div>
        <div class="mt-2">
            {tileInfo.dragon.text}
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
            {#each tileInfo.akadora.image as image}
                <img src={tileLookup[image]} alt="Mahjong tile" class="w-14 h-auto m-1 object-cover" />
            {/each}
        </div>
        <div class="mt-2">
            {tileInfo.akadora.text}
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
            {tileInfo.outro.text}
        </div>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex--}>
            Previous
        </button>
    </div>

{/if}

