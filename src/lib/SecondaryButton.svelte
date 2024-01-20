<script>
    export let text = ""
    export let target = "#"
</script>

<a class="button group bg-secondary hover:border-gray-600 hover:text-gray-400" href={target}>
    {text}
    <span class="material-symbols-outlined ml-3 group-hover:translate-x-1">chevron_right</span>
    <div class="glow-shadow"></div>
</a>

<style scoped>
a {
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25) inset;
}
</style>