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
import porfolio from "@/static/porfolio.js";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: {
        ...porfolio.projects.personnalProject,
        ...porfolio.projects.otherProjects,
      },
    };
  },
};
</script>

<style scoped>
.portfolio-content {
  background: rgba(14, 55, 71, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

h1 {
  color: var(--midtone);
  padding: 50px 0;
}

.portfolios {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>