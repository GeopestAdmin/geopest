<template>
  <div class="home-landing">
    <div class="home-inner">
      <div class="p-2 w-full bg-white bg-opacity-95 rounded-lg md:p-4">
        <div class="w-full text-center">
          <h2>Our Service Protocol</h2>
          <h4>The Way We Do What We Do</h4>
          <hr class="main-hr" />
        </div>
        <div class="article">
          <p>
            At Geo Pest we apply the 5-step protocol (from the Handbook of Pest Control by Arnold Mallis) to ensure the effective elimination and management of any pest control situation. We also use the latest and most effective pest control products for consistent results.
          </p>
          <h5>The 5 Steps</h5>
          <hr class="sub-hr" />
          <dl>
            <dt>1. Inspection</dt>
            <dd>Inspection is essential to solving pest problems quickly and economically. It includes asking questions of the customer and examining the premises thoroughly to learn as much as possible about the problem.</dd>
            <dt>2. Identification</dt>
            <dd>Once the pest is found, Geo Pest’s pest management professional will positively identify the pest before proceeding. Positive and accurate identification many times is needed to make a thorough evaluation of the problem and an appropriate recommendation for control.</dd>
            <dt>3. Determine the Action</dt>
            <dd>Determining the action is the next step in the pest management operation. Treatment may include sanitation and harbourage removal services, the use of traps or other mechanical devices to catch or prevent pests from entering, and any other activity used to eliminate pests and prevent their recurrence.</dd>
            <dt>4. Communicate</dt>
            <dd>Communication for eliminating the pest problem will be done with the client after the inspection has been completed and all the facts surrounding the problem are known. Geo Pest will discuss and recommend the best treatment for your specific needs within your budget to ensure effective, lasting control.</dd>
            <dt>5. Follow Up</dt>
            <dd>The final step in urban pest management is follow up. Pest population levels must be continually monitored. The client will be kept advised on matters of sanitation and how to prevent new pest problems from becoming established, and any recurrence of the pest problem must be attended to before it becomes serious.</dd>
          </dl>
        </div>
        <hr class="main-hr">
        <div class="p-4">
          <h5>Additional Info</h5>
          <button class="h-12 px-6 m-2 md:text-base lg:text-lg text-indigo-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
            <router-link to="/know-your-enemy" class="w-full">
              <span>Know Your Enemy</span>
            </router-link>
          </button>
          <button class="h-12 px-6 m-2 md:text-base lg:text-lg text-indigo-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
            <router-link to="/equipment" class="w-full">
              <span>Tools We Use</span>
            </router-link>
          </button>
          <button class="h-12 px-6 m-2 md:text-base lg:text-lg text-indigo-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
            <router-link to="/covid" class="w-full">
              <span>Covid-19 Protection</span>
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {

  },
  name: "Services",
  data() {

  }
}
</script>
<style scoped>
.home-landing {
  background-image: url('../assets/service-background.png');
}

hr {
  @apply rounded-lg;
  @apply p-1;
  @apply my-2;
  @apply w-1/4;
  @apply shadow-md;
}

hr.main-hr {
  @apply bg-indigo-500;
  @apply mx-auto;
}

hr.sub-hr {
  @apply bg-black;
}

.article {
  column-count: 1;
  column-rule: 1px solid indigo;
  @apply gap-8;
  @apply pb-8
}

dt {
  @apply font-semibold;
  @apply pt-4;
  @apply pb-2;
}

dd {
  @apply px-2;
}

@screen md {
  .article {
    column-count: 2;
  }
}
</style>