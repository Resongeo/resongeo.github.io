<script>
  import Title from '../lib/Title.svelte'
  import ProjectCard from '../lib/ProjectCard.svelte'
</script>

<section id="projects" class="mb-20 sm:mb-32 lg:mb-40">
  <Title text="PROJECTS" />

  <ProjectCard
    name="Cobalt Game Engine"
    description="It's a 2D game engine written in C++. The main goal for this project is to learn C++, a graphics API like OpenGL and to learn about the tech that powers games. It's also a great project to work on a indefinite time because there is alway more to add."
    github="https://github.com/Resongeo/CobaltGameEngine"
    image="images/cobalt-engine.webp"
    tags={['C++', 'OpenGL', 'C#', 'IMGUI']}
  />
  <ProjectCard
    name="Dwarf Language"
    description="A minimal interpreted language based on the Crafting Interpreters book by Robert Nystrom. It's written in C++ and uses no dependency. It can run scripts straight from the terminal or from a file."
    github="https://github.com/Resongeo/DwarfLang"
    image="images/dwarf-script.webp"
    tags={['C++', 'Interpreter']}
  />
</section>
