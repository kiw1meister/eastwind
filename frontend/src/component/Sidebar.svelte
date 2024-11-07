<script lang="ts">
	// export let active = false;
	// let { active, siteState = $bindable() } = $props()

	import { siteState } from '../store'

	function changeView(newView: string) {
    	siteState.update(state => ({ ...state, view: newView }));
  	}
</script>

<aside
	class="absolute text-white bg-green transition-all duration-500 h-screen w-[300px] p-5"
	class:left-0={$siteState.active}
	class:left-[-500px]={!$siteState.active}
>
	<button class="text-black w-full py-2 mx-auto block shadow-lg bg-white rounded-xl hover:bg-tealgreen hover:text-white ease-in-out transition duration-300" onclick={() => {changeView('home'); console.log("Clicked", $siteState.view)}}>
		Home
	</button>
	<br>
	<button class="text-black w-full py-2 mx-auto block shadow-lg bg-white rounded-xl hover:bg-tealgreen hover:text-white ease-in-out transition duration-300" onclick={() => {changeView('basics'); console.log("Clicked", $siteState.view)}}>
		Rules and Basics
	</button>
	<br>
	<button class="text-black w-full py-2 mx-auto block shadow-lg bg-white rounded-xl hover:bg-tealgreen hover:text-white ease-in-out transition duration-300" onclick={() => {changeView('strategy'); console.log("Clicked", $siteState.view)}}>
		Strategy
	</button>
	<br>
	<button class="text-black w-full py-2 mx-auto block shadow-lg bg-white rounded-xl hover:bg-tealgreen hover:text-white ease-in-out transition duration-300" onclick={() => {changeView('scoring'); console.log("Clicked", $siteState.view)}}>
		Scoring
	</button>
	<br>
	<button class="text-black w-full py-2 mx-auto block shadow-lg bg-white rounded-xl hover:bg-tealgreen hover:text-white ease-in-out transition duration-300" onclick={() => {changeView('practice'); console.log("Clicked", $siteState.view)}}>
		Practice
	</button>
	<br>
	<button class="text-black w-full py-2 mx-auto block shadow-lg bg-white rounded-xl hover:bg-tealgreen hover:text-white ease-in-out transition duration-300" onclick={() => {changeView('resources'); console.log("Clicked", $siteState.view)}}>
		Resources
	</button>
</aside>
