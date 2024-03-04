<script>
  export let name = ''
  export let description = ''
  export let image = ''
  export let github = ''
  export let tags = []
</script>

<div
  class="p-4 md:w-[768px] m-auto mb-10 xl:grid xl:grid-cols-2 xl:w-[1024px] 2xl:w-[1280px]"
>
  <div class="xl:m-auto 2xl:w-[500px]">
    <h1 class="font-semibold text-xl sm:text-2xl text-title">{name}</h1>

    <p class="text-default-text my-3 md:text-lg">{description}</p>

    <a
      class="flex w-fit border border-default-text rounded-lg py-1 px-2"
      href={github}
      target="_blank"
    >
      <img src="images/github.svg" alt="github icon" class="mr-2" /> See it on GitHub
    </a>

    <div class="my-4 flex flex-wrap">
      {#each tags as tag}
        <span
          class="border border-primary rounded-full px-2 mr-3 text-sm bg-primary bg-opacity-10"
          >{tag}</span
        >
      {/each}
    </div>
  </div>

  <img
    src={image}
    alt={image}
    class="rounded-lg shadow-xl w-full"
    draggable="false"
  />
</div>
