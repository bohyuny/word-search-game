<script>
	import { Router, Route } from 'svelte-routing';
	import Main from './pages/main.svelte';
	import Register from './pages/register.svelte';
</script>

<main>
	<Router>
	  <Route path="/" component={Main} />
	  <Route path="/register" component={Register} />
	</Router>
</main>

<style>
	main {
	  padding: 0;
	  margin: 0;
	}
</style>
