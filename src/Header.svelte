<script>

</script>

<header class="h-screen relative overflow-hidden">
  <div class="flex flex-row justify-between px-7 py-3 md:px-12 md:py-6 xl:px-16 xl:py-8">
    <h1 class="font-semibold my-auto xl:text-lg">Somogyvári Benedek</h1>
    <span class="material-symbols-outlined p-2 md:hidden">
      menu
    </span>
    <ul class="hidden md:flex flex-row items-center">
      <li><a href="#about">About me</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>

  <div class="p-3">
    <div class="flex items-center">
      <div class="w-9 bg-primary-200 h-[1px] mx-4"></div>
      <span class="text-primary-200 text-xs tracking-[3px]">HELLO</span>
    </div>

    <h1 class="font-bold text-4xl my-3">
      I'm <span class="text-primary-100 tracking-[3px]">BENEDEK</span>
    </h1>

    <p class="mt-5 text-lg font-medium">
      Passionate Developer with a Love for Learning, Exploring New Technologies, and Crafting Digital Experiences
    </p>
  </div>
</header>

<style lang="scss">
header::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(50deg);
  width: 400px;
  height: 1000rem;
  background-color: #141414;
  z-index: -1;

  @media screen and (min-width: 768px) {
    width: 500px;
  }

  @media screen and (min-width: 1280px) {
    width: 700px;
  }

  @media screen and (min-width: 1536px) {
    width: 1000px;
  }
}

ul {
  li {
    @apply ml-6 text-sm xl:text-base font-light tracking-[1px];
  }
}
</style>