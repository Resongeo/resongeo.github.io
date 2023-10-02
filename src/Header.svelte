<script>
  const currentDate = new Date()
  const experienceYear = currentDate.getFullYear() - 2021

  let experience = experienceYear < 10 ? '0' + experienceYear : experienceYear
  let age = currentDate.getMonth() < 10 ? currentDate.getFullYear() - 2004 : currentDate.getFullYear() - 2003

  let fullscreenMenu

  function toggleFullscreenMenu() {
    if (!fullscreenMenu) {
      fullscreenMenu = document.querySelector("#fullscreen-menu")
      toggleFullscreenMenu()
    }

    fullscreenMenu.style.display = fullscreenMenu.style.display === 'none' ? 'flex' : 'none'
  }
</script>

<header class="flex flex-col min-h-screen relative overflow-hidden">
  <!-- Full Screen Menu -->
  <div id="fullscreen-menu" class="hidden absolute items-center justify-center w-screen h-screen z-10 bg-black bg-opacity-25 backdrop-blur-md">
    <span class="material-symbols-outlined absolute top-0 right-0 text-4xl m-6 cursor-pointer" on:click={toggleFullscreenMenu}>
      close
    </span>

    <ul class="text-center">
      <li class="my-10"><a class="text-xl hover:text-zinc-300 transition-colors font-semibold" on:click={toggleFullscreenMenu} href="#about">About me</a></li>
      <li class="my-10"><a class="text-xl hover:text-zinc-300 transition-colors font-semibold" on:click={toggleFullscreenMenu} href="#skills">Skills</a></li>
      <li class="my-10"><a class="text-xl hover:text-zinc-300 transition-colors font-semibold" on:click={toggleFullscreenMenu} href="#projects">Projects</a></li>
      <li class="my-10"><a class="text-xl hover:text-zinc-300 transition-colors font-semibold" on:click={toggleFullscreenMenu} href="#contact">Contact</a></li>
    </ul>
  </div>

  <div class="flex flex-row justify-between px-7 py-3 md:px-12 md:py-6 xl:px-16 xl:py-8">
    <h1 class="font-semibold my-auto xl:text-lg">Somogyvári Benedek</h1>
    <span class="material-symbols-outlined p-2 md:hidden cursor-pointer hover:text-zinc-300 transition-colors" on:click={toggleFullscreenMenu}>
      menu
    </span>
    <ul class="hidden md:flex flex-row items-center">
      <li><a href="#about">About me</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>

  <div class="flex items-center justify-center w-full flex-1 mb-10">
    <div class="hello-container p-3">
      <div class="flex items-center">
        <div class="w-9 bg-primary-200 h-[1px] mx-4"></div>
        <span class="text-primary-200 text-xs tracking-[3px]">HELLO</span>
      </div>
  
      <h1 class="font-bold text-4xl my-4">
        I'm <span class="text-primary-100 tracking-[3px]">BENEDEK</span>
      </h1>
  
      <p class="mt-6 text-lg font-medium">
        Soulful Developer with a Love for Learning, Exploring New Technologies, and Crafting Digital Experiences
      </p>
  
      <div class="year-cards mx-2">
        <div>
          <p>{experience}</p>
          <p>years of <br> experience</p>
        </div>
        <div>
          <p>{age}</p>
          <p>years old</p>
        </div>
      </div>
  
      <div class="more-buttons">
        <button class="bg-gradient-to-r from-primary-200 to-primary-300">
          Contact me
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
        <button class="border-2 border-zinc-800">
          About me
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
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

.hello-container {
  @media screen and (min-width: 367px) {
    width: 367px;
  }
}

.year-cards {
  @apply flex justify-between my-24;

  div {
  @apply flex items-center;

    p {
      &:nth-child(1) {
        @apply text-5xl text-white font-light mr-3;
      }
      
      &:nth-child(2) {
        color: #B3B3B3;
        @apply text-center text-sm;
      }
    }
  }
}

.more-buttons {
  @apply flex justify-between;

  button {
    @apply flex w-[164px] items-center justify-between text-base font-medium py-3 pl-5 pr-3 rounded-lg;

    span {
      margin-left: 0.75rem;
    }
  }
}
</style>