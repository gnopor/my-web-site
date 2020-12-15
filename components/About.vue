<template>
  <div class="about-content">
    <h1>About</h1>
    <p>
      Passionate about ICT, I am a full-stack web developer with experience in
      all stages of the development cycle of dynamic web projects. Good
      knowledge of many programming languages, including HTML5, JavaScript, CSS
      and Python, I have a variety of skills in networking as well as in
      development, telecommunications and computer graphics.
    </p>
    <div class="competances">
      <div v-for="(competance, index) in competances" :key="index">
        <span>{{ competance.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import porfolio from "@/static/porfolio.js";
export default {
  data() {
    return {
      competances: porfolio.competances,
    };
  },
};
</script>

<style scoped>
.about-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1 {
  color: var(--midtone);
  padding: 50px 0;
}

p {
  color: var(--shadow);
  line-height: 2em;
  text-align: center;
  max-width: 700px;
  margin: 0 10px;
}

.competances {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto 0;
  padding: 50px;
}

.competances div {
  margin: 10px;
}
.competances span {
  background: var(--shadow);
  border-radius: 8px;
  color: white;
  margin: 10px;
  padding: 2px 15px;
}
</style>