<template>
  <div class="project-card">
    <div class="project-img">
      <img :src="`/images/${project.imgUrl}`" alt="TAYOU Blaise" />
    </div>

    <!-- title -->
    <div class="title">
      <span>{{ project.title }} - {{ project.enterprise }}</span>
    </div>

    <!-- discription -->
    <div class="description">
      <p>{{ project.description }}</p>
    </div>

    <!-- TaskList -->
    <div class="task-list">
      <span v-for="(task, index) in project.taskList" :key="index">
        ⚡ {{ task }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.project-card {
  background: white;
  border-radius: 20px;
  color: var(--shadow);
  width: 350px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  transition: all 1s ease;
}

/* project-img  */
.project-img {
  position: relative;
  left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  max-height: 250px;
  overflow: hidden;
}

img {
  width: 100%;
  transition: all 0.25s ease;
}

.project-card:hover img {
  transform: scale(1.2);
}

/* title  */

.title {
  margin: 20px 0;
  color: var(--midtone);
  font-size: 25px;
  font-weight: bold;
}

/* description  */
.description {
  margin: 10px 0;
  text-align: center;
  font-weight: lighter;
}

/* .task-list  */
.task-list {
  display: flex;
  flex-direction: column;
}
.task-list * {
  margin: 5px 0;
  font-size: 14px;
}
</style>