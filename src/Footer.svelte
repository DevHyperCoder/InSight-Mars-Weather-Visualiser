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
  .fl-r {
    float: right;
  }
  .fl-l {
    float: left;
  }
</style>

<template>
  <footer>
    <div id="link">
      <a class='fl-l'
        href="https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0">
        Data taken from NASA API
      </a>
      <a class='fl-r'
        href="https://github.com/DevHyperCoder/InSight-Mars-Weather-Visualiser">Want
        to see the code? (GitHub)</a>
    </div>
    <div style="clear: both;" />
    <div id="copy">
      <a class='fl-l' href="https://github.com/DevHyperCoder">DevHyperCoder</a>
      <small class='fl-r'>Copyright (c) 2020 DevHyperCoder</small>
    </div>
  </footer>
</template>
