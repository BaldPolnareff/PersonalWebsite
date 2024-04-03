<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<template>
  <main>
    <Header class="header"></Header>
    <div class="about">
      <br>
      <h1>About me</h1>
      <p>I'm a self taught Junior Software Developer from Italy, now living in Zürich.
        I have a Master degree in aerospace engineering, from the Polytechnic University of Turin. 
      </p>
      <p>I grew up surrounded by software engineers, who initiated me to Linux about 10 years ago. 
        The aerospace industry has always been only marginally interesting to me, but it forged my problem solving skills, 
        my basic understanding of physics and mathematics, and a well structured way of thinking.</p>
      <p>Using Linux as a daily driver for many years, I naturally gravitated towards the idea of becoming a Software Engineer
        and immediately after my graduation I started learning programming languages and tools. I knew my career had 
        to shift towards software development, I just love programming and the endless possibilities it offers.
      </p>
      <p>My main interests are in web development, but I'm also interested in game development, machine learning and artificial intelligence.
        I'm always looking for new challenges and opportunities to learn new things.
      </p>

      <p>
        During my free time and as a freelance job when I was a student, I've been avidly using Blender to create 3D models and animations.
        The main reason why I love 3D art is that it's substantially more technical than other forms of digital art (as long as you dive into the cool stuff). 
        It's a perfect mix of art and science, and it's a great way to express creativity and problem solving skills.
        Nothing makes me happier than creating procedural textures and shaders with math nodes in Blender.
      </p>
      <p>
        You can see a small part of what I've done with Blender <RouterLink to="/blender-artwork">here</RouterLink>. 
        Don't forget that <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer">Blender</a> is a free and open source software, I encourage everyone to try it out, and to 
        donate to the Blender Foundation if you can.
      </p>
    </div>
  </main>
</template>

<style scoped>
a {
  color: #d186ff;
}
br {
  margin-top: 30px;
}

p {
  text-align: justify;
  font-size: larger;
  margin: 0 20%;
}
.about {
  display: flex;
  margin-top: 30px;
  padding: 30px;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
}

@media screen and (max-width: 1024px){
  .about {
    padding: 0;
    padding-top: 30px;
    padding-bottom: 50px;
    margin: 0;
    gap: 0;
    height: auto;
  }
  p {
    margin: 0 10%;
  }

  h1 {
    margin-top: 30px;
  }

  .header {
    margin-bottom: 30px;
  }
}
</style>
