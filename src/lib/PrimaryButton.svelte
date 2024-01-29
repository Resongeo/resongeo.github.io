<script>
    export let text = ""
    export let target = "#"
</script>

<a class="button group rounded-lg bg-primary hover:bg-primary-hover text-default-bg" href={target}>
    {text}
    <span class="material-symbols-outlined ml-3 group-hover:translate-x-1">chevron_right</span>
    <div class="glow-shadow"></div>
</a>