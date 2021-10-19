<template>
  <div class="home-landing">
    <div class="home-inner">
      <div class="p-2 mb-2 w-full bg-white bg-opacity-95 rounded-lg md:p-4">
        <div class="w-full text-center">
          <h2>We Assist in The Fight Against Covid-19</h2>
          <hr class="main-hr" />
        </div>
        <div class="w-full p-4">
          <p>The Covid-19 Pandemic has changed how the world works by shining the spotlight on awareness of infection and general health and safety. At Geo Pest we are proud to announce our added services, which includes a rigorous Covid-19 disinfectant protocol.</p>
          <p>Have you had a positive Covid-19 case on your premises? Are you concerned about Covid-19 infections? Geo Pest is proud to announce our disinfection services which we’ve added to our bouquet of successful programmes.</p>
          <p>All our disinfection service protocols are applied professionally and with the utmost discretion and confidentiality. Our service is based on our reputation, and as such we are sympathetic to our clients, and we do not divulge any information to third parties.</p>
          <p>So, you can rest assured and have complete peace of mind, knowing that your premises is well-protected against Covid-19 infection once we’ve applied our disinfection service. Our protocols have been highly successful in homes, vehicles, restaurants, old age homes, retirement villages, factories, retail shops, distribution centres and more.</p>
          <p>Don’t delay, call us now for an affordable quote and ensure your premises is Covid-19 safe!</p>
        </div>
        <img class="tool-image" src="@/assets/covid.png" />
      </div>
    </div>
    <a class="made-by" href="https://www.gatiepslist.co.za" target="_blank">
      <img src="@/assets/madeby.png" class="made-by-img" />
    </a>
  </div>
</template>
<script>
export default {
  components: {

  },
  data() {
    
  }
}
</script>
<style scoped>
.home-landing {
  background-image: url('../assets/equipment-background.png')
}

p {
  @apply m-2;
}

hr {
  @apply rounded-lg;
  @apply p-1;
  @apply my-2;
  @apply w-1/2;
  @apply shadow-md;
}

hr.main-hr {
  @apply bg-indigo-500;
  @apply mx-auto;
}

.tool-image {
  @apply w-full;
  @apply mx-auto;
  @apply rounded;
}

@screen md {
  hr {
    @apply w-1/4;
  }

  .tool-image {
    @apply w-3/4;
  }
}
</style>
