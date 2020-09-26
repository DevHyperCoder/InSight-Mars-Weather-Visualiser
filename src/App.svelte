<script lang="ts">
  import Weather from "./Weather.svelte";
  import About from "./About.svelte";
  import Footer from './Footer.svelte'
</script>

<style>
  h1 {
    text-align: center;
  }
  main {
    margin-top: 1rem;
  }
  .container {
    min-height: 100vh;
  }
</style>

<main>
  <h1>Mars Weather</h1>
  <div class="container">
    <Weather />
  </div>

  <div class="container">
    <About />
  </div>
  <Footer/>
</main>
