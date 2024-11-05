<script>
	export let active = false;
</script>

<aside
	class="absolute transition-all duration-500 h-screen w-[300px] p-5 border border-gray-300 bg-gray-200"
	class:left-0={active}
	class:left-[-500px]={!active}
>
	I'm a sidebar
</aside>
