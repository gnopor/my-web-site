<template>
  <div class="about-content">
    <h1>About</h1>
    <p>
      Passionate about IT and ICT, I am a full-stack web developer with
      experience in all stages of the development cycle of dynamic web projects.
      Good knowledge of many programming languages including HTML, JavaScript,
      CSS and Python, I have varied skills as well in the area of networking
      than in development, telecommunications and computer graphics.
    </p>
    <div class="competances">
      <div v-for="(competance, index) in competances" :key="index">
        <span>{{ competance.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      competances: [],
    };
  },
  async mounted() {
    await axios
      .get("/competances.json")
      .then((res) => {
        this.competances = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.about-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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