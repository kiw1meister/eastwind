<script>
    import { fade } from 'svelte/transition'
    import Quiz from "./subcomponents/Quiz.svelte";
</script>

<div class="p-5 sm:w-1/2 place-content-center mx-auto" transition:fade>

    <h1>Test your basic knowledge of the game with our quiz!</h1>

    <Quiz />

</div>