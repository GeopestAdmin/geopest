<template>
  <div class="home-landing">
    <div class="home-inner">
      <div class="p-2 mb-2 w-full bg-white bg-opacity-95 rounded-lg md:p-4">
        <div class="w-full text-center">
          <h2>Equipment</h2>
          <h4>Some of The Tools We Use To Do What We Do</h4>
          <hr class="main-hr" />
        </div>
        <div class="w-full p-4">
          <p>As the pest control industry has grown and matured, various trade customs and practices have been used in different parts of the world. Out of this maturation, an evolution of various devices has developed. Geo Pest’s pest management professionals are an ingenious breed. We have devised significant improvements in standard equipment and have even evolved new strategies and new concepts in the application of pesticides, using less toxicant and providing better control.</p>
          <p>Our service teams are equipped to enter a premise with a range of devices, demonstrating a more professional image and we are equipped to perform the best service possible. No single device is appropriate for every situation; however, the mere possession of a variety of professional equipment is no guarantee of professional results. Our technicians understand how and where to use each tool and how to maintain them in good working order.</p>
          <p>Here are a few examples of correct use of equipment:</p>
        </div>
        <div class="flex flex-wrap">
          <div class="tool-item">
            <h4>Ladder</h4>
            <hr class="sub-hr" />
            <img class="tool-image float-left" src="@/assets/equipment/ladder.png" />
            <p>At Geo Pest we always select a ladder which is the correct length to safely reach the working height ensuring that the ladder is of the correct duty or weight rating. The combined weight of the user, their tools and materials should NEVER exceed the rating of the ladder.</p>
          </div>
          <div class="tool-item">
            <h4>Flashlight</h4>
            <hr class="sub-hr" />
            <img class="tool-image float-right" src="@/assets/equipment/torch.png" />
            <p>Inspection is essential to solving pest problems quickly and economically. It includes asking questions of the customer and examining the premises thoroughly to learn as much as possible about the problem. Our team makes use of their flashlights when moving through poorly lit areas. For visual inspections, a good flashlight, a mirror to reflect light back into cracks, and a willingness to climb high and low, inside and outside, are essential to determine the extent, in a location of cockroach infestations, for example.
              During the inspection, we look for the harbourage areas of pests, conditions of moisture, heat, or darkness that favour infestations, food and water that can be used by the pests, probable means of entry of the infestation (such as incoming foods, open sewers, and possibly many others), and evidence of infestation (such as damage, droppings, tracks, and actual specimens or their cast skins). Also, to avoid trips you should make sure your lighting is good.
            </p>
          </div>
          <div class="tool-item">
            <h4>Thermal Fogging Machine</h4>
            <hr class="sub-hr" />
            <img class="tool-image float-left" src="@/assets/equipment/thermal-fog.png" />
            <p>Our Thermal Fogging Machine is used to deploy a highly effective fog of chemicals specifically designed to infiltrate every nook and cranny of your storage area. The Machine can be filled with chemicals to eliminate all of the known infestations prevalent in storage and home facilities.</p>
          </div>
          <div class="tool-item">
            <h4>Commando Bait Station</h4>
            <hr class="sub-hr" />
            <img class="tool-image float-right" src="@/assets/equipment/commando-bait.png" />
            <p>The Commando bait station is one of the most effective measures in control rodent pests. The device attracts rodents and humanly traps them for effective disposal.</p>
          </div>
          <div class="tool-item">
            <h4>Insect Light Trap</h4>
            <hr class="sub-hr" />
            <img class="tool-image float-left" src="@/assets/equipment/insect-light.png" />
            <p>The Jaguar 30 insect light trap is a tried and test device to ensure the effective elimination of flying insects like mosquitos and flies. Its easily mounted on walls or in high traffic areas and is an unobtrusive and aesthetically pleasing way to get rid of unwanted flying bugs.</p>
          </div>
          <div class="tool-item">
            <h4>Gel Applicator</h4>
            <hr class="sub-hr" />
            <img class="tool-image float-right" src="@/assets/equipment/gel-applicator.png" />
            <p>The Gel applicator is used to apply long lasting pest repellent in hard to reach areas to keep pests at bay.</p>
          </div>
          <div class="tool-item">
            <h4>Knapsack Sprayers</h4>
            <hr class="sub-hr" />
            <img class="tool-image float-left" src="@/assets/equipment/knapsack-sprayer.png" />
            <p>We use the state of the art STIHL knapsack sprayers to effectively apply our chemical protocols on all affected surface areas.</p>
          </div>
          <div class="tool-item">
            <h4>Hazmat Suits</h4>
            <hr class="sub-hr" />
            <img class="tool-image float-right" src="@/assets/equipment/hazmat-suit.png" />
            <p>Our Hazmat suits are of the highest quality and is industry approved. Our qualified technicians and service managers are fully protected when administering the preventative measures to ensure your effective pest control.</p>
          </div>
        </div>
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
  name: "Equipment",
  data() {
    
  },
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

hr.sub-hr {
  @apply bg-black;
}

.tool-item {
  @apply w-full;
  @apply p-2;
}

.tool-image {
  @apply w-1/2;
  @apply px-2;
}

@screen md {
  .tool-item {
    @apply w-1/2;
  }

  .tool-image {
    @apply w-1/4;
  }

  hr {
    @apply w-1/4;
  }
}
</style>
