<script>
    import { fade } from 'svelte/transition'
    import Quiz from "./subcomponents/Quiz.svelte";
</script>

<div class="p-5 sm:w-1/2 place-content-center mx-auto" transition:fade>

    <h2 class="text-center my-10 text-2xl">
        Test your basic knowledge of the game with our quiz!
    </h2>

    <Quiz />

</div>