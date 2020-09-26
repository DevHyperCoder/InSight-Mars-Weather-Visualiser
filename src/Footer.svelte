<script>
</script>

<style>
  a {
    color: var(--primary);
  }
  footer {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
  }
  #copy {
    margin-top: 0.5rem;
  }
  #copy small {
    float: right;
  }
  #copy p {
    float: left;
  }
  #link p {
    float: left;
  }
  #link a {
    float: right;
  }
</style>

<template>
  <footer>
    <div id="link">
      <p>
        Data taken from <a href="https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0"> NASA
          API </a>
      </p>
      <a href="https://github.com/DevHyperCoder/InSight-Mars-Weather-Visualiser">Want to see the code? (GitHub)</a>
    </div>
    <div style="clear: both;" />
    <div id="copy">
      <p><a href="https://github.com/DevHyperCoder">DevHyperCoder</a></p>
      <small>Copyright (c) 2020 DevHyperCoder</small>
    </div>
  </footer>
</template>
