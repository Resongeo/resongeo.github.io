<script>
  export let title = ''
  export let icons = []
</script>

<article class="rounded-xl p-3 m-4 border border-[#a0a0a04d] group h-full hover:border-primary hover:bg-primary hover:bg-opacity-5 hover:shadow-xl transition-all">
  <h1
    class="text-center lg:text-[#595B5B] group-hover:text-title transition-colors font-bold text-2xl md:text-3xl"
  >
    {title}
  </h1>

  <div class="flex flex-wrap justify-center items-center my-4 lg:mt-7 lg:mb-2">
    {#each icons as icon}
      <img
        class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-3 grayscale-[0.1] lg:grayscale-[1] lg:group-hover:grayscale-[0.1]"
        src={"images/" + icon}
        alt={icon}
        draggable="false"
      />
    {/each}
  </div>
</article>

<style lang="scss" scoped>
  img {
    transition: filter 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>
