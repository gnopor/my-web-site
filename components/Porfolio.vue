<template>
  <div class="portfolio-content">
    <h1>Portfolio</h1>

    <div class="portfolios">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";
import axios from "axios";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: {},
    };
  },
  async mounted() {
    await axios
      .get("/portfolios.json")
      .then((res) => {
        const data = res.data;
        this.projects = {
          ...data.personnalProject,
          ...data.otherProjects,
        };
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.portfolio-content {
  background: rgba(14, 55, 71, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 50px 0;
}

h1 {
  color: var(--midtone);
  padding: 0 0 50px 0;
}

.portfolios {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>