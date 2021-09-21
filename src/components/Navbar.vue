<template>
    <Disclosure as="nav" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-28">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-24" src="@/assets/GeoPestLogo3.png" alt="Workflow" />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <div v-for="(item, itemIdx) in navigation" :key="itemIdx">
                  <router-link :to="{ name: item.name }" class="text-gray-500 hover:bg-gray-700 hover:text-white px-3 rounded-md md:text-base lg:text-xl font-medium uppercase">
                    {{ item.label }}
                  </router-link>
                </div>
                <button class="h-12 px-6 m-2 md:text-base lg:text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                  <router-link to="/contact-us" class="w-full">
                    <span>Get a Free Quote Now! >></span>
                  </router-link>
                </button>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div v-for="(item, itemIdx) in navigation" :key="itemIdx">
            <router-link :to="{ name: item.name }" class="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium uppercase">
              {{ item.label }}
            </router-link>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
</template>

<script>
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const navigation = [ { label: 'Home', name: 'home' }, { label: 'Services', name: 'services' }, { label: 'Testimonials', name: 'testimonials' }, { label: 'Contact Us', name: 'contact'} ]
const profile = ['Your Profile', 'Settings', 'Sign out']

export default {
  name: "Navbar",
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuIcon,
    XIcon
  },
  setup() {
    const open = ref(false)

    return {
      navigation,
      profile,
      open,
    }
  },
};
</script>

<style scoped lang="scss">

</style>