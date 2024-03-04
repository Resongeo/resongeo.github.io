<script>
  export let icon = ''
  export let text = ''
  export let link = ''
  export let url = ''
</script>

<div
  class="flex flex-col items-center mb-10 border border-[#a0a0a04d] p-5 rounded-lg"
>
  <span class="material-symbols-outlined text-primary scale-125 mb-2">
    {icon}
  </span>
  <p class="text-title text-xl font-bold mb-10">
    {text}
  </p>
  <a
    href={url}
    target="_blank"
    class="py-1 px-2 border border-default-text text-default-text rounded-lg hover:text-primary-hover hover:border-primary-hover hover:bg-primary hover:bg-opacity-5 transition-colors"
  >
    {link}
  </a>
</div>
