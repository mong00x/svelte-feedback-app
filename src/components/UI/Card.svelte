<div class="card">
    <slot></slot>
    <button class="close" on:click={close}>x</button>
</div>

<style>
    .card{
        background-color: #eee;
        color:#222;
        border-radius: 25px;
        padding: 16px 50px ;
        margin: 20px auto;
        position:relative;
        width:clamp(120px, 50%, 800px);
    }
    .close{
        position: absolute;
        top: 12px;
        right:12px;
        border-radius: 100px;
        width: 30px;
        height: 30px;
        padding:0 0 4px 0;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
</style>