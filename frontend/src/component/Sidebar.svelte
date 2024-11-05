<script>
	export let active = false;
</script>

<aside
	class="absolute bg-green transition-all duration-500 h-screen w-[300px] p-5"
	class:left-0={active}
	class:left-[-500px]={!active}
>
	<div>
		Basics
	</div>
	<div>
		Strategy
	</div>
	<div>
		Quizzes
	</div>
	<div>

	</div>


</aside>
