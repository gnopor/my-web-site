<template>
  <div class="footer-content">
    <span>© {{ new Date().getFullYear() }} T-Blaise</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-content {
  background: var(--midtone);
  color: white;
  display: flex;
  padding: 30px 40px 10px 40px;
  font-size: 10px;
}
</style>