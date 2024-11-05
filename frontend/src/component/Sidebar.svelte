<script lang="ts">
	// export let active = false;
	// let { active, siteState = $bindable() } = $props()

	  import { siteState } from '../store'

	  let state;
	  $: state = $siteState;

	function changeView(newView: string) {
    	siteState.update(state => ({ ...state, view: newView }));
  	}
</script>

<aside
	class="absolute text-white bg-green transition-all duration-500 h-screen w-[300px] p-5"
	class:left-0={state.active}
	class:left-[-500px]={!state.active}
>
	<button onclick={() => {changeView('home'); console.log("Clicked", state.view)}}>
		Home
	</button>
	<br>
	<button onclick={() => {changeView('basics'); console.log("Clicked", state.view)}}>
		Rules and Basics
	</button>
	<br>
	<button onclick={() => {changeView('strategy'); console.log("Clicked", state.view)}}>
		Strategy
	</button>
	<br>
	<button onclick={() => {changeView('scoring'); console.log("Clicked", state.view)}}>
		Scoring
	</button>
	<br>
	<button onclick={() => {changeView('practice'); console.log("Clicked", state.view)}}>
		Practice
	</button>
	<br>
	<button onclick={() => {changeView('resources'); console.log("Clicked", state.view)}}>
		Resources
	</button>
</aside>
