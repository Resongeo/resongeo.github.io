<script>
    export let text = ""
    export let target = "#"
</script>

<a class="button group bg-secondary hover:bg-secondary-hover" href={target}>
    {text}
    <span class="material-symbols-outlined ml-3 group-hover:translate-x-1">chevron_right</span>
</a>