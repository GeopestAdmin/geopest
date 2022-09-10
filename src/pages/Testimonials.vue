<template>
  <div class="home-landing">
    <div class="home-inner">
      <div class="p-2 mb-2 w-full bg-white bg-opacity-95 rounded-lg md:p-4">
        <a class="test-card" href="./../../static/henties.pdf" target="_blank">
          <blockquote class="m-8">
            <p class= "font-semibold"> "I haven’t been this happy with a service provider in ages and I’m very glad that I made the decision to move my business." </p>
          </blockquote>
          <div class= "test-card-bottom">
            <img src="@/assets/testimonials/henties.webp" alt="" class="h-24 rounded-full border-4 border-white md:mr-4">
            <div>
              <p class= "font-bold">Natasha Geyer</p>
              <p>Food Hygiene & Safety Manager</p>
            </div>
          </div>
          <p class="test-click"><i>Click to view full letter</i></p>
        </a>
        <a class="test-card" href="./../../static/freshfoodsacademy.pdf" target="_blank">
          <blockquote class="m-8">
            <p class= "font-semibold"> "This knowledge and attention to detail have aided in keeping our premises free of pests and our auditing documents are neat and up to date" </p>
          </blockquote>
          <div class= "test-card-bottom">
            <img src="@/assets/testimonials/FreshFoodsAcademy.webp" alt="" class="h-24 rounded-full border-4 border-white md:mr-4">
            <div>
              <p class= "font-bold">Nikki Pike</p>
              <p>Director</p>
            </div>
          </div>
          <p class="test-click"><i>Click to view full letter</i></p>
        </a>
        <a class="test-card" href="./../../static/namibbiltong.pdf" target="_blank">
          <blockquote class="m-8">
            <p class= "font-semibold"> "I am delighted to recommend the services of Geo Pest. They have delivered exemplary service to our company..." </p>
          </blockquote>
          <div class= "test-card-bottom">
            <img src="@/assets/testimonials/NamibBiltong.webp" alt="" class="h-24 rounded-lg border-4 border-white md:mr-4">
            <div>
              <p class= "font-bold">Elizabeth Hanekom</p>
              <p>Food Safety Manager</p>
            </div>
          </div>
          <p class="test-click"><i>Click to view full letter</i></p>
        </a>
        <a class="test-card" href="./../../static/mrmarketing.pdf" target="_blank">
          <blockquote class="m-8">
            <p class= "font-semibold"> "I’ve been using Geo Pest to keep our premises pest free, since October 2020, and have always been completely satisfied with their performance." </p>
          </blockquote>
          <div class= "test-card-bottom">
            <img src="@/assets/testimonials/mrmarketing.webp" alt="" class="h-24 rounded-lg border-4 border-white md:mr-4">
            <div>
              <p class= "font-bold">Paul Lawson</p>
              <p>Food Safety and Health & Safety</p>
            </div>
          </div>
          <p class="test-click"><i>Click to view full letter</i></p>
        </a>
        <!--NEW-->
        <a class="test-card" href="./../../static/nutripick.pdf" target="_blank">
          <blockquote class="m-8">
            <p class= "font-semibold"> "They do an excellent job, are always punctual and offer the most competitive rates in town." </p>
          </blockquote>
          <div class= "test-card-bottom">
            <img src="@/assets/testimonials/nutripick.webp" alt="" class="h-24 rounded-lg border-4 border-white md:mr-4">
            <div>
              <p class= "font-bold">Paul Lawson</p>
              <p>Food Safety and Health & Safety</p>
            </div>
          </div>
          <p class="test-click"><i>Click to view full letter</i></p>
        </a>
        <a class="test-card" href="./../../static/freshnessfirst.pdf" target="_blank">
          <blockquote class="m-8">
            <p class= "font-semibold"> "The change from our previous pest control company to Geo Pest, was for sure a very good change." </p>
          </blockquote>
          <div class= "test-card-bottom">
            <img src="@/assets/testimonials/freshnessfirst.webp" alt="" class="h-24 rounded-lg border-4 border-white md:mr-4">
            <div>
              <p class= "font-bold">ST de Wet</p>
              <p>Audit Manager</p>
            </div>
          </div>
          <p class="test-click"><i>Click to view full letter</i></p>
        </a>
        <a class="test-card" href="./../../static/capenatural.pdf" target="_blank">
          <blockquote class="m-8">
            <p class= "font-semibold"> "They provide a professional service, are always punctual, reliable and attend to every detail." </p>
          </blockquote>
          <div class= "test-card-bottom">
            <img src="@/assets/testimonials/capenatural.webp" alt="" class="h-24 rounded-lg border-4 border-white md:mr-4">
            <div>
              <p class= "font-bold">Michelle Brown</p>
              <p>Quality Assurance Manager</p>
            </div>
          </div>
          <p class="test-click"><i>Click to view full letter</i></p>
        </a>
        <a class="test-card" href="./../../static/aqunion.pdf" target="_blank">
          <blockquote class="m-8">
            <p class= "font-semibold"> "I plan to always work with them and can recommend their services and products without reservation" </p>
          </blockquote>
          <div class= "test-card-bottom">
            <img src="@/assets/testimonials/aqunion.webp" alt="" class="h-24 rounded-lg border-4 border-white md:mr-4">
            <div>
              <p class= "font-bold">Ashraf Daniels</p>
              <p>Quality Assurance Manager</p>
            </div>
          </div>
          <p class="test-click"><i>Click to view full letter</i></p>
        </a>
      </div>
    </div>
    <a class="made-by" href="https://www.gatiepslist.co.za/#/managesocials" target="_blank">
      <img src="@/assets/madeby.png" class="made-by-img" />
    </a>
  </div>
</template>
<script>
export default {
  components: {

  },
  name: "Testimonials",
  data() {
    
  }
}
</script>
<style scoped>
.home-landing {
  background-image: url('../assets/testimonial-background.png')
}

.test-card {
  @apply bg-white;
  @apply rounded-xl;
  @apply shadow;
  @apply w-full;
  @apply float-left;
  @apply p-4;
}

.test-card-bottom {
  @apply text-white;
  @apply bg-indigo-600;
  @apply p-8;
  @apply rounded-b-xl;
}

.test-click {
  @apply text-sm;
  @apply float-right;
}

@screen md {
  .test-card {
    @apply w-1/2;
  }

  .test-card-bottom {
    @apply flex;
    @apply items-center;
  }
}
</style>
