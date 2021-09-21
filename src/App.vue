<template>
  <div class="w-full mx-auto">
    <Navbar class="main-navbar" :class="{ 'scrolled': !view.atTop }" />
    <div class="w-full mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      view: {
        atTop: true
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.atTop)
          this.view.atTop = false;
      } else {
        if (!this.view.atTop)
          this.view.atTop = true;
      }
    }
  }
}
</script>

<style>
.main-navbar {
  @apply z-10;
  @apply fixed;
  @apply top-0;
  @apply w-full;
  @apply bg-white;
  @apply bg-opacity-95;
  /* @apply bg-gray-200; */
  /* @apply flex;
  @apply bg-white;
  @apply border-b;
  @apply items-center;
  @apply justify-between;
  @apply flex-wrap;
  @apply p-2;
  @apply m-auto; */
  /* @apply animated; */
}

.scrolled {
  @apply shadow-lg;
  @apply bg-white;
}

.home-landing {
  @apply h-screen;
  @apply w-full;
  @apply bg-cover;
  @apply bg-center;
  @apply overflow-auto;
}

.home-inner {
  @apply px-3;
  @apply pt-32;
  @apply pb-4;
  @apply mx-auto;
  @apply w-full;
  @apply h-full;
  @apply grid;
  @apply grid-cols-1;
  @apply gap-4;
}

@screen md {
  .home-inner {
    @apply w-5/6;
    @apply px-6;
  }
}
</style>
