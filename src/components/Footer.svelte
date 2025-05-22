<script>
</script>

<section id="footer" class="w-full bg-[#131515] px-3 py-6 lg:py-10">
  <div class="flex flex-row items-start justify-around lg:w-[1024px] lg:m-auto">
    <div class="w-48">
      <h1 class="font-light text-neutral-500 text-xl mb-3">
        Pages on this site
      </h1>
      <ul class="text-default-text pl-2">
        <li><a href="#">Header</a></li>
        <li><a href="#about">About me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div class="w-48">
      <h1 class="font-light text-neutral-500 text-xl mb-3">Created with</h1>
      <ul class="text-default-text pl-2">
        <li><a href="https://astro.build/" target="_blank">Astro</a></li>
        <li><a href="https://svelte.dev/" target="_blank">Svelte</a></li>
        <li>
          <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>
        </li>
        <li><a href="https://sass-lang.com/" target="_blank">Sass</a></li>
      </ul>
    </div>
  </div>
</section>

<style lang="scss" scoped>
  #footer {
    position: relative;
  }

  #footer::after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 200px;
    background-image: linear-gradient(to bottom, transparent, #131515);
    transform: translateY(-100%);
    z-index: -1;
  }

  ul {
    li {
      @apply hover:text-primary transition-colors;
    }
  }
</style>
