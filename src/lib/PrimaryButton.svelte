<script>
    export let text = ""
    export let target = "#"
</script>

<a class="button group rounded-lg bg-primary text-default-bg text-lg font-medium" href={target}>
    {text}
    <span class="material-symbols-outlined ml-3 group-hover:translate-x-1">chevron_right</span>
</a>

<style scoped>
a {
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.15) inset;
}
</style>