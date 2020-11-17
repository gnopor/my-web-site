<template>
  <div class="navbar">
    <div class="profil">
      <img src="/images/profil.png" alt="tayou blaise" />
    </div>

    <div class="menu">
      <nuxt-link v-for="(link, index) in links" :key="index" :to="link.to">
        <div>
          <span>{{ link.title }}</span>
        </div>
      </nuxt-link>
    </div>

    <div class="side-menu-loader">
      <img src="/images/menu.png" alt="tayou blaise" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "home", to: "#", icon: "" },
        { title: "about", to: "#about", icon: "" },
        { title: "portfolio", to: "#portfolio", icon: "" },
        { title: "contact", to: "#contact", icon: "" },
      ],
    };
  },
};
</script>

<style scoped>
/* navbar */
.navbar {
  background: var(--midtone);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 90px;
  padding: 0 50px 0 10px;
}

/* profile  */
.profil img {
  height: 70px;
  border-radius: 50%;
}

.profil:hover img {
  position: absolute;
  top: 200px;
  height: 400px;
}

/* menu */
.menu {
  height: 100%;
  display: flex;
}

.menu a {
  text-decoration: none;
}

.menu div {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  color: white;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
.menu div:hover {
  border-bottom: 4px solid var(--accent);
}

.menu div:active {
  color: var(--accent);
}

/* .side-menu-loader */

.side-menu-loader {
  display: none;
}
</style>