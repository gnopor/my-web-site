<template>
  <div class="contact-content">
    <h1>Contact</h1>
    <div class="contacts">
      <a
        v-for="(contact, index) in contacts"
        :key="index"
        :href="
          contact.contact.includes('@')
            ? `mailto:${contact.contact}`
            : contact.contact
        "
        target="_blank"
      >
        <img :src="`/images/${contact.logo}`" alt="tayou blaise"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          contact: "https://cm.linkedin.com/in/tayou-blaise-9b3a4b191",
          logo: "linkedIn-logo.png",
        },
        { contact: "tayoukengne@gmail.com", logo: "mail-logo.png" },
        {
          contact: "https://www.facebook.com/blaise.tayou.58",
          logo: "facebook-logo.jpg",
        },
        {
          contact: "https://www.instagram.com/tayoublaise/",
          logo: "instagram-logo.png",
        },
        {
          contact: "https://www.youtube.com/channel/UC40UC7mW5Bj3qgdO9XS5ggw",
          logo: "youtube-logo.png",
        },
        {
          contact: "https://github.com/gnopor",
          logo: "git-logo.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* cotact wrapper  */
.contact-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

/* contact title */
h1 {
  color: var(--midtone);
  padding: 50px 0;
}

/* contact list  */

.contacts {
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.contacts img {
  margin: 10px 30px;
  height: 150px;
  width: 150px;
  transition: 0.5s ease;
}

.contacts img:hover {
  transform: scale(1.2);
}

/* for tablet and smartphone */
@media screen and (max-width: 768px) {
  .contacts img {
    height: 100px;
    width: 100px;
  }
}
</style>