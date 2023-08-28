<script>
    import FeedbackItem from "./FeedbackItem.svelte";
    export let feedback = [] //if feedback is not passed in, it will be an empty array

    console.log(feedback)
</script>

{#each feedback as fb (fb.id)}
    <FeedbackItem {fb} />
{/each}