import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'here'
	}
});

export default app;