<template>
  <div class="home-landing">
    <div class="home-inner">
      <div name="fade" class="backdrop-filter backdrop-blur rounded-xl my-4">
        <img class="rounded-xl" :src="require(`@/assets/${selected}`)" />
      </div>
      <div class="my-4 p-4 bg-white bg-opacity-95 rounded-xl">
        <div class="text-section">
          <p>
            Geo Pest is a pest elimination company offering a wide range of pest control and hygiene services within the commercial sector to ensure a cleaner, safer, and healthier environment. 
          </p>
          <p>
            The company was started in 2020 by a group of passionate individuals with a combined industry experience of more than 85 years. Our team is vastly experienced in the food producing, processing and medical sectors, with proven results.
          </p>
        </div>
        <hr />
        <div class="text-section">
          <p>
            Geo Pest currently services the greater Western Cape area; however, we are fully equipped to meet your Pest Elimination and Hygiene Services needs throughout South Africa.
          </p>
          <p>
            We are completely HACCP compliant and pride ourselves in providing service to exacting standards to the major role players in the food industry in accordance with their guidelines. 
          </p>
          <p>
            Our fully qualified staff are registered with the Department of Agriculture, Forestry and Fisheries (DAFF) in accordance with Act 36 of 1947 having their P registration certificates. We are a proudly South African company with a Level 1 B-BBEE status.
          </p>
        </div>
        <hr />
        <div class="text-section">
          <p>
            Our technical experience and capacity allow us to take on any project by implementing the correct certified skills and experience.
          </p>
        </div>
        <hr />
        <div class="text-section">
          <h3 class="text-center">Let us eliminate your pests and clean up your environment with professional, proven efficiency.</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  name: "Home",
  mounted() {
    this.createInterval();
  },
  data() {
    return {
      homeImages: [
        "installation.png",
        "survey.png",
        "inspection.png",
        "presentation.png"
      ],
      selected: "survey.png",
      intervalID: "",
      index: 0
    }
  },
  methods: {
    createInterval() {
      var vm = this;
      this.intervalID = setInterval(function() {
        vm.index++;
        vm.index = (vm.index === vm.homeImages.length) ? 0 : vm.index;

        vm.selected = vm.homeImages[vm.index];
      }, 5000);
    }
  }
}
</script>
<style scoped>
.text-section {
  @apply text-base;
  @apply text-xl;
}

hr {
  @apply rounded-lg;
  @apply p-1;
  @apply my-2;
  @apply mx-auto;
  @apply w-1/4;
  @apply shadow-md;
  @apply bg-indigo-500;
}

.home-landing {
  background-image: url('../assets/home-background.png');
}

@screen md {
  .home-inner {
    @apply grid-cols-2;
  }
}
</style>
