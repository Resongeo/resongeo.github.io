<script>
  import Title from '../lib/Title.svelte'
  import SkillCard from '../lib/SkillCard.svelte'
</script>

<section id="skills" class="mb-20 sm:mb-32 lg:mb-40">
  <Title text="SKILLS" />

  <div id="skill-cards" class="m-auto md:w-[768px]">
    <div id="skill-card-web">
      <SkillCard
        title="Web Development"
        icons={['laravel.svg', 'vuejs.svg', 'svelte.svg']}
      />
    </div>

    <div id="skill-card-lang">
      <SkillCard
        title="Languages"
        icons={['cpp.svg', 'csharp.svg', 'javascript.svg']}
      />
    </div>

    <div id="skill-card-tool">
      <SkillCard title="Tools" icons={['docker.svg', 'git.svg']} />
    </div>
  </div>
</section>

<style lang="scss" scoped>
  @media (min-width: 1024px) {
    #skill-cards {
      width: 1024px;

      display: grid;
      grid-template-columns: [horizontal-start] 3fr [horizontal-end] 3fr [vertical-start] 2fr [vertical-end];
      grid-template-rows: [first-start] 1fr [first-end] 1fr [second-end];

      div {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
      }

      #skill-card-web {
        grid-column-start: horizontal-start;
        grid-column-end: vertical-start;
        grid-row-start: first-start;
      }

      #skill-card-lang {
        grid-column-start: horizontal-start;
        grid-column-end: vertical-start;
        grid-row-start: first-end;
      }

      #skill-card-tool {
        grid-column-start: vertical-start;
        grid-column-end: vertical-end;
        grid-row-start: first-start;
        grid-row-end: second-end;
      }
    }
  }
</style>
