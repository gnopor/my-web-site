<template>
  <div class="app" style="overflow-x: hidden; width: 100vw; height: 100vh">
    <div class="header"></div>

    <Nuxt />

    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  components: {
    Footer,
  },
};
</script>


