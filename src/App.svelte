<script>
	import FeedbackList from "./components/FeedbackList.svelte";

	let feedbackData = [{
		id: 1,
		name: 'John Doe',
		feedback:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.'
	},
	{
		id: 2,
		name: 'Linda Doe',
		feedback:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.'
	},
	{
		id: 3,
		name: 'Peter Doe',
		feedback:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.'
	},
	]
</script>

<main>
	<FeedbackList feedback={feedbackData} />
	

</main>

