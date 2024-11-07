<script lang=ts>
    let currentIndex = $state(1)

    let ruleInfo = {
        intro: {
            text: "In this section, we will be discussing the general gameflow of Japanese Mahjong."
        },
        card2: {
            text: "Players will be sat around a traditionally square table. The tiles will be setup by forming 4 'walls', each 2 tiles high and 17 tiles wide. Players will roll two dice with whoever rolling the highest numer becoming 'East' wind, the dealer, for the first round. The person across East will be West, to the right will be South, and to the left with be North."
        },
        card3: {
            text: "The East player will then roll two more dice again. According to this number, the East player then counts starting from themselves, counter-clockwise the number shown on the dice. The wall in front of where the count landed will then have 7 stacks separated. This is the dead wall and will not be used for the round."
        },
        card4: {
            text: "All players then draw 1 tile at a time in counter-clockwise order starting from the left side of the dead wall. Every player will draw until reaching 13 tiles except for the East player as they will draw 14 cards to start the game. It is entirely possible for the East player to get extremely lucky and win off this initial draw and there is even a yaku assosciated with it!"
        },
        card5: {
            text: "The East player will discard a tile from the hand before passing their turn counter-clockwise to the South player. The South player will then draw a tile from the wall and discard a tile from the hand before passing their turn and so on."
        },
        card6: {
            text: "Whenever a player discards a tile, another player and call 'Kan', 'Pon', or 'Chii' to complete a wait they have in their hand. Kan and Pon can be called by anyone, but Chii calls can only be made by the player that comes *after* the discarding player. If a player takes a discarded tile, it skips to their turn but they do not draw another tile from the wall."
        },
        card7: {
            text: "There are two more calls that can be made: 'Ron' and 'Tsumo'... which is for winning the round! Ron is when your winning tile is discarded by another player and Tsumo is when you draw the winning tile from the wall yourself. Unlike regular Chii calls, a Ron to complete a Chii meld wait can be called even when your turn is not after the discarding player."
        },
        card8: {
            text: "The winning player will show their hand to validate their win before calculating their point payout. If a Ron was called, the player that discarded the winning tile has to pay the winner points. If a tsumo was called, the winner takes points from everybody."
        },
        outro: {
            text: "That covers the basic gameflow of Japanese Mahjong. Much like all other aspects of the game, there are nuances that would be too wordy to describe here. Please brush up on the other sections to learn more!"
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
        <div>
            {ruleInfo.card2.text}
        </div>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex--}>
            Previous
        </button>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex++}>
            Next
        </button>
    </div>

{/if}
{#if currentIndex === 3}

    <div class="p-6 shadow-lg bg-white rounded-xl">
        <div>
            {ruleInfo.card3.text}
        </div>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex--}>
            Previous
        </button>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex++}>
            Next
        </button>
    </div>

{/if}
{#if currentIndex === 4}

    <div class="p-6 shadow-lg bg-white rounded-xl">
        <div>
            {ruleInfo.card4.text}
        </div>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex--}>
            Previous
        </button>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex++}>
            Next
        </button>
    </div>

{/if}
{#if currentIndex === 5}

    <div class="p-6 shadow-lg bg-white rounded-xl">
        <div>
            {ruleInfo.card5.text}
        </div>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex--}>
            Previous
        </button>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex++}>
            Next
        </button>
    </div>

{/if}
{#if currentIndex === 6}

    <div class="p-6 shadow-lg bg-white rounded-xl">
        <div>
            {ruleInfo.card6.text}
        </div>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex--}>
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
            {ruleInfo.card7.text}
        </div>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex--}>
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
            {ruleInfo.card7.text}
        </div>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex--}>
            Previous
        </button>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex++}>
            Next
        </button>
    </div>

{/if}
{#if currentIndex === 9}

    <div class="p-6 shadow-lg bg-white rounded-xl">
        <div>
            {ruleInfo.outro.text}
        </div>

        <button class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={currentIndex--}>
            Previous
        </button>
    </div>

{/if}

