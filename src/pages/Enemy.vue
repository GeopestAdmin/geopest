<template>
  <div class="home-landing">
    <div class="home-inner">
      <div class="p-2 w-full bg-white bg-opacity-90 rounded-lg md:p-4">
        <h2>Know Your Enemy</h2><h4>Getting to Know the Most Common Pest Threats to Your Productivity</h4>
        <hr class="main-hr" />
        <p>Geo Pest has a team of highly qualified technicians who are proficient in the life-cycles, habits and havoc wreaked by the biggest pest baddies in the business. Here are some of the baddies whom we know intimately, especially how to get rid of them effectively. Be warned, you will experience heightened anxiety and stress while getting to know the enemy. But, be assured, Geo Pest has your back, we know all the proven and effective measures to get rid of these pests in a flash.</p>

        <div class="mt-8 w-full">
          <Listbox as="div" v-model="selected">
            <ListboxLabel class="block font-medium text-gray-700">
              Select a Pest to Find Out More:
            </ListboxLabel>
            <div class="mt-1 relative">
              <ListboxButton class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <span class="flex items-center">
                  <!-- <img :src="selected.avatar" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" /> -->
                  <span class="ml-3 block truncate">{{ selected.name }}</span>
                </span>
                <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </ListboxButton>

              <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  <ListboxOption as="template" v-for="pest in pests" :key="pest.id" :value="pest" v-slot="{ active, selected }">
                    <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                      <div class="flex items-center">
                        <!-- <img :src="person.avatar" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" /> -->
                        <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                          {{ pest.name }}
                        </span>
                      </div>

                      <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
        <div class="sub-category">
          <div class="sub-lower">
            <div class="sub-inner">
              <div v-if="selected.sub == 'cockroach'">
                <h2>Cockroaches</h2>
                <hr class="sub-hr" />
                <p>It is estimated that cockroaches have lived on earth for approximately 350 million years. Most species originate from and prefer tropical and subtropical climates. However, their presence in nearly every part of the world and the wide range of habitats in which they are found indicates that they are a truly outstanding success story in nature.</p>
                <p>In addition, the presence of cockroaches does not promote positivity in the work or home place and causes general anxiety and stress.</p>
              </div>
              <div v-if="selected.sub == 'fly'">
                <h2>Flies</h2>
                <hr class="sub-hr" />
                <p>Domestic flies have evolved to live in close association with man. They are typically found in and around structures and can become extremely annoying by their constant presence. More importantly, flies are identified with certain disease-causing organisms. These flies have filthy habits, which make them efficient mechanical vectors of disease.</p>
                <ul class="normal">
                  Some diseases transmitted by flies:
                  <li>Typhoid</li>
                  <li>Paratyphoid</li>
                  <li>Cholera</li>
                  <li>Bacillary Dysentery</li>
                  <li>Infantile Diarrhoea</li>
                  <li>Pinworm</li>
                  <li>Hookworm</li>
                  <li>Tapeworm</li>
                </ul>
              </div>
              <div v-if="selected.sub == 'rodent'">
                <h2>Rodents</h2>
                <hr class="sub-hr" />
                <p>Rodents are among the most successful mammals on earth. They are able to adapt and colonise many of the different types of land masses on the planet, have the ability to reproduce quickly, are very adaptable, feed on many different types of food, and they utilize sophisticated behaviour patterns to avoid dangers from predators.</p>
                <ul class="normal">
                  An overview of the diseases transmitted by rodents, which are of most concern to people:
                  <li>Plague: Bubonic, Pneumonic, Septicemic</li>
                  <li>Rabies</li>	 
                  <li>Murine Typhus</li>
                  <li>Dysentery</li>						 
                  <li>Salmonellosis</li> 
                  <li>Typhoid</li>      
                  <li>Rickettsial Pox</li>
                  <li>Trichinosis</li>		 
                  <li>Rat Bite Fever</li>
                  <li>Weils Disease or Leptospirosis</li>
                </ul>
              </div>
              <div v-if="selected.sub == 'stored'">
                <h2>Stored Product Insects</h2>
                <hr class="sub-hr" />
                <p>Before one can contemplate trying to eradicate a Stored Product Insect (SPI) problem, one has to be able to successfully identify the pest and understand its biology and habits.</p>
                <p>Stored Product Insects consist of various moths, weevils, beetles and Psocids.</p>
                <ul class="normal">
                  All Stored Product Insects are divided into four groups, which have been categorised according to their feeding habits. They are:
                  <li>Internal Feeders</li>
                  <li>External Feeders</li>
                  <li>Scavengers</li>
                  <li>Secondary Pests</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 bg-white bg-opacity-95 rounded-lg">
        <div>
          <h3>{{ selected.name }}</h3><hr class="main-hr" />
          <div>
            <img class="float-right w-1/2" :src="require(`@/assets/pests/${selected.avatar}`)" />
            <div v-if="selected.id == 1">
              <ul class="normal">
                <u>Typically found:</u>
                <li>In and around homes, apartments, supermarkets, food processing plants, hotels and restaurants and public transport.</li>
                <li>In ships, especially cruise and Naval ships can be sources of heavy infestations.</li>
              </ul>
              <br/>
              <ul class="normal">
                <u>Lifecycle:</u>
                <li>Duration from egg to adult may be as little as 54 days.</li>
                <li>Females produce an egg case (ootheca) which carries ± 30-40 eggs.</li>
                <li>Adult cockroaches live for between 100-200 days.</li>
              </ul>
            </div>
            <div v-if="selected.id == 2">
              <ul class="normal">
                <u>Typically found:</u>
                <li>Sewers and basements, particularly around pipes. </li>
                <li>They are also known to inhabit ships particularly cargo ships as the holds are not inspected regularly and there is very little human traffic.</li>
              </ul>
              <br/>
              <ul class="normal">
                <u>Lifecycle:</u>
                <li>Duration from egg to adult is ±168 days.</li>
                <li>Females produce ootheca carrying between 14-16 eggs. </li>
                <li>Adult cockroaches live for between 350 – 440 days.</li>
                <li>American cockroaches feed on a wide variety of food stuffs but do prefer fermenting food products.</li>
              </ul>
            </div>
            <div v-if="selected.id == 11">
              <ul class="normal">
                <u>Typically found:</u>
                <li>Sewers, basements, roof voids where hot water cylinders are installed. </li>
                <li>They are also found in refuse chutes in high rise apartment buildings where there is no control of sanitation.</li>
              </ul>
              <br/>
              <ul class="normal">
                <u>Lifecycle:</u>
                <li>Duration from egg to adult is between 120-800 days.</li>
                <li>Females produce ootheca carrying between 14-16 eggs.</li>
                <li>Adult cockroaches live for between 34 to 181 days (female) and 112 to 160 days (male). </li>
                <li>Oriental cockroaches feed on a wide variety of decaying matter but do prefer starchy foods.</li>
              </ul>
            </div>
            <div v-if="selected.id == 8">
              <ul class="normal">
                <li>The house mouse is in fact the number one rodent pest in most parts of the world. The renowned house mouse expert, R.J. Berry wrote, "the house mouse is a weed: quick to exploit opportunity and able to withstand local adversity and extinction without harm to the species.</li>
                <li>This means it has to be able to breed rapidly, tolerate a wide range of conditions, and adjust quickly to changes in its environment. </li>
                <li>These traits are responsible for the success of the species in so many parts of the world."</li>
              </ul>
            </div>
            <div v-if="selected.id == 10">
              <p>The Norway rat is regarded as the most important urban rat pest for most parts of the world. Presumably, its name is based on where this rat was classified, with the prepared study specimens later being sent from Norway.</p>
              <p>It is also called the brown rat, sewer rat, barn rat, wharf rat, water rat, and grey rat. The Norway rat is a relatively large rat although the public and press about its size make many exaggerations. An average adult measures about 41 cm in total length from its nose to the end of its tail, and weighs about 340 g.</p>
            </div>
            <div v-if="selected.id == 13">
              <p>The black rat is also known as the roof rat, ship rat, and house rat. It is an arboreal native of the forests of Southeast Asia. Black rats are not always black in colour but may be wholly black or brown-backed with the belly varying from grey to cream-coloured or white.</p>
              <p>The black rat is a medium-sized rat weighing about 226g, and measuring about 41cm in total length from its nose to the end of its tail.</p>
            </div>
            <div v-if="selected.id == 7">
              <ul class="normal">
                <li>The housefly is a pest the world over. </li>
                <li>Each adult female fly begins laying eggs a few days after hatching, laying a total of five to six batches of 75 to 100 small white, oval eggs.</li>
                <li>During the warmer seasons two or more generations may be completed in one month. Normally the population builds up is in the early autumn.</li>
              </ul>
            </div>
            <div v-if="selected.id == 3">
              <ul class="normal">
                <li>The Blue Bottle fly requires 15 or more days to develop from egg to adult.</li>
                <li>They are common in homes and other buildings in cool weather, especially if suitable breeding materials are present. </li>
                <li>They are attracted to dead animals, meat and decaying vegetable matter.</li>
              </ul>
            </div>
            <div v-if="selected.id == 6">
              <ul class="normal">
                <li>The Green Bottle fly has a relatively short life cycle, with only 9 to 21 days from egg to adult. </li>
                <li>Eggs are laid in decomposing material or on mixtures of animal and vegetable debris. </li>
                <li>These flies normally overwinter in the soil as full-grown larvae.</li>
              </ul>
            </div>
            <div v-if="selected.id == 5">
              <ul class="normal">
                <li>Fruit flies are distributed worldwide.</li>
                <li>These insects are of concern both as nuisance pests and contaminators of food. Large populations can build up quickly in food service establishments.</li>
              </ul>
            </div>
            <div v-if="selected.id == 12">
              <ul class="normal">
                <li>Rice Weevil, Granary Weevil, Lesser Grain Borer & Angoumois Grain Moth. The average life span of an adult is approximately 7 – 8 months.</li>
                <li>Damage is caused to grain by the larvae and the adult.</li>
                <li>The Rice Weevil feeds on a variety of grains.</li>
              </ul>
            </div>
            <div v-if="selected.id == 9">
              <ul class="normal">
                <li>Indian Meal Moth, Drug Store Beetle, Flat Grain Beetle, Cadelle, Khapra & Tobacco / Cigarette Beetle. Adults live for less than two weeks, are non- – feeding and fly mainly at night. </li>
                <li>There may be four (4) to six (6) generations produced in one year.</li>
                <li>The damage to the stored product is caused during the larval stage.</li>
                <li>They are general feeders, feeding on grain / grain products, dried fruit, seeds, nuts, biscuits, powdered milk, chocolate, candy, dried red peppers & dry dog food.</li>
              </ul>
            </div>
            <div v-if="selected.id == 4">
              <ul class="normal">
                <li>Confused Flour Beetle, Red Flour Beetle, Mediterranean Flour Moth & Saw-toothed Grain Beetle. Four to five generations may be produced in one year.</li>
                <li>These stored product pests are unable to feed off whole kernels or undamaged grain, they do however, attack grain products, peas, beans, shelled nuts, dried fruit, chocolate, drugs, snuff, cayenne pepper, herbs, insects and other museum specimens.</li>
              </ul>
            </div>
            <div v-if="selected.id == 14">
              <ul class="normal">
                <li>Yellow Mealworm, Foreign Grain Beetle, some grain mites and Psocids.</li>
                <li>Adults live for only 2-3 months.</li>
                <li>This particular species is a concern in that the eggs or larvae are often ingested with cereals and breakfast foods, which then leads to gastrointestinal discomfort.</li>
                <li>They feed on grain, seeds, oats and damp foodstuffs.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
import json from '@/assets/pests/pests.json'

export default {
  name: "Enemy",
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
  },
  setup() {
    const pests = json
    
    const selected = ref(pests[3])
    return {
      pests,
      selected,
    }
  },
}
</script>
<style scoped>
.home-landing {
  background-image: url('../assets/enemy-background.png');
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
}

hr.sub-hr {
  @apply bg-black;
}

.sub-category {
  @apply my-16;
  @apply p-2;
  @apply w-full;
  @apply bg-indigo-700;
  @apply rounded;
  transform: skewY(-7deg);
}

.sub-lower {
  @apply p-1;
  @apply w-full;
  @apply bg-indigo-500;
  @apply rounded;
  transform: skewY(12deg);
}

.sub-inner {
  @apply text-white;
  transform: skewY(-5deg);
}

ul.normal {
  @apply list-disc;
  @apply list-outside;
  @apply pl-4;
}

@screen md {
  .home-inner {
    @apply grid-cols-2;
  }
}
</style>
