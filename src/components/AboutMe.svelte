<script>
  import TextCard from '../lib/TextCard.svelte'
  import Title from '../lib/Title.svelte'
</script>

<section id="about" class="mb-20 sm:mb-32 lg:mb-40">
  <Title text="ABOUT ME" />

  <div
    class="mx-auto sm:w-[640px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1200px] lg:grid lg:grid-rows-2"
  >
    <div
      class="transition-float-left lg:grid lg:grid-cols-2 lg:h-[300px] lg:place-items-center lg:mb-20"
    >
      <div class="hidden lg:grid place-items-center 2xl:mr-12">
        <img
          class="observable w-[300px] absolute z-20"
          src="images/school.webp"
          alt="dude is programming"
        />
        <div
          class="observable radial-glow z-10 w-[500px] h-[500px] absolute"
        ></div>
      </div>
      <TextCard
        icon="school"
        title="How it started"
        content="I went to an IT school to learn programming there. After not long, I started learning on my own. First, I created games then got into web development. After highscool I went to technical training where I learned backend and tools like Docker. Alongside I started my favorite side project, a game engine."
      />
    </div>

    <div
      class="transition-float-right mt-14 lg:grid lg:grid-cols-2 lg:h-[300px] lg:place-items-center"
    >
      <TextCard
        icon="gamepad"
        title="What I like to do"
        content="In my free time, I like to work on personal projects. It's my hobby to learn new skills and technologies. And also I like to go out with friends, play pool, bowling, darts or just take a walk."
      />
      <div class="hidden lg:grid place-items-center 2xl:ml-12">
        <img
          class="observable w-[300px] absolute z-20"
          src="images/freetime.webp"
          alt="dude is programming"
        />
        <div
          class="observable radial-glow z-10 w-[500px] h-[500px] absolute"
        ></div>
      </div>
    </div>
  </div>
</section>
