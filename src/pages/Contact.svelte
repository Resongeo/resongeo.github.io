<script>
  import Title from '../lib/Title.svelte'
  import ContactCard from '../lib/ContactCard.svelte'
</script>

<section id="contact" class="mb-20 sm:mb-32 lg:mb-40">
  <Title text="CONTACT" />

  <div
    class="flex flex-col md:flex-row items-center justify-around md:w-[768px] m-auto"
  >
    <ContactCard
      icon="mail"
      text="Write me an email"
      link="s.benedek2003@gmail.com"
      url="mailto:s.benedek2003@gmail.com"
    />

    <ContactCard
      icon="link"
      text="Contact me on LinkedIn"
      link="LinkedIn profile"
      url="https://www.linkedin.com/in/somogyv%C3%A1ri-benedek-771766299/"
    />
  </div>
</section>

<style lang="scss" scoped>
</style>
