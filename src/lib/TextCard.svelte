<script>
  export let icon = ''
  export let title = ''
  export let content = ''
</script>

<div class="p-3 xl:w-[500px]">
  <div class="flex items-center mb-2">
    { #if icon == 'school' }
      <span class="icon-[material-symbols--school-outline-rounded] text-primary text-5xl" />
    {:else if icon == 'gamepad'}
      <span class="icon-[material-symbols--stadia-controller-outline] text-primary text-5xl" />
    {/if }
    <h1 class="text-3xl font-bold ml-4 tracking-wide text-title">
      {title}
    </h1>
  </div>
  <p class="mx-2 text-justify text-default-text text-lg">
    {content}
  </p>
</div>

<style lang="scss" scoped>
</style>
