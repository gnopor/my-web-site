<template>
  <div class="home">
    <Alert />

    <!-- name  -->
    <div class="name"><Name /></div>
    <!-- navbar  -->
    <div class="navbar">
      <Navbar />
    </div>
    <!-- about  -->
    <div id="about">
      <About />
    </div>
    <!-- porfolio  -->
    <div id="portfolio">
      <Porfolio />
    </div>
    <!-- contact  -->
    <div id="contact">
      <Contact />
    </div>
  </div>
</template>

<script>
import About from "@/components/About";
import Alert from "@/components/Alert";
import Contact from "@/components/Contact";
import Navbar from "@/components/Header/Navbar";
import Name from "@/components/Name";
import Porfolio from "@/components/Porfolio";

export default {
  components: {
    About,
    Alert,
    Contact,
    Navbar,
    Name,
    Porfolio,
  },
};
</script>

<style scoped>
.navbar {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
