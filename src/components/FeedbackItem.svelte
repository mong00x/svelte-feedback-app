<script>
    import Card from './UI/Card.svelte'
    export let fb
</script>

<Card>
    <h1>{fb.name}</h1>
    <p>{fb.feedback}</p>
</Card>