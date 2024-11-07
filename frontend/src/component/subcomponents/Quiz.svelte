<script lang="ts">
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition'

    let questions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let showAnswer = false;
    let selectedAnswer = null;
    const apiUrl = import.meta.env.VITE_API_URL;

    // Function to fetch questions using Axios
    async function fetchQuestions() {
        try {
            const res = await axios.get(`${apiUrl}/quiz/questions`);
            questions = res.data;
        } catch (error) {
            console.error("Error fetching questions:", error);
        }
    }

    function checkAnswer(answer) {
        showAnswer = true;
        selectedAnswer = answer;
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
        }
    }

    function nextQuestion() {
        selectedAnswer = null;
        showAnswer = false;
        currentQuestionIndex++;
    }

    function restartQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        showAnswer = false;
        selectedAnswer = null;
        fetchQuestions();
    }

    onMount(fetchQuestions);
</script>

<div class="quiz-container">
    {#if questions.length > 0 && currentQuestionIndex < questions.length}
        <div class="card p-6 shadow-lg bg-white rounded-xl">
            <h2 class="text-lg font-semibold">{questions[currentQuestionIndex].question}</h2>

            <div class="flex choices mt-4 justify-center">
                {#each questions[currentQuestionIndex].choices as choice}
                    <button
                        class="choice-btn m-2 p-2 shadow-lg rounded-lg border-2"
                        onclick={() => checkAnswer(choice)}
                        disabled={showAnswer}
                    >
                        {choice}
                    </button>
                {/each}
            </div>

            {#if showAnswer}
                <p class="mt-4">
                    {selectedAnswer === questions[currentQuestionIndex].answer
                        ? "Correct!"
                        : `Incorrect! The correct answer is ${questions[currentQuestionIndex].answer}`}
                </p>
                <button 
                    class="next-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={nextQuestion}>Next Question</button>
            {/if}
        </div>
    {:else if currentQuestionIndex >= questions.length}
        <div class="card p-6 shadow-lg bg-white rounded-xl">
            <h2 class="text-lg font-semibold">Quiz Complete!</h2>
            <p>Your final score is {score} / {questions.length}</p>
            <button class="restart-btn mt-4 p-2 shadow-lg rounded-lg border-2" onclick={restartQuiz}>Restart Quiz</button>
        </div>
    {/if}
</div>
