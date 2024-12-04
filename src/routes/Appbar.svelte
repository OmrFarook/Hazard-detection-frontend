<script>
    let { header } = $props();
    
</script>
<div class="Header">
<h1>{header}</h1>
</div>


<style>
    .Header {
        background-color: #fff;
        width: 203vh ;
        font-size: 1em;
        padding: 20px 40px 20px 40px;
        margin-left: -15px;
        margin-bottom: 15px ;
        z-index: -1;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
         
</style>