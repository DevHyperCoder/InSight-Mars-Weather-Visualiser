<script lang="ts">
  import getData from "./getNasaData";
  let data = getData();
</script>

<style>
  

  div {
    margin-top: 3rem;
    height: 100%;
  }
  .card {
    max-width: 500px;
    margin-left: 100px;
    margin-top: 5rem;
    box-shadow: 5px 10px aliceblue;
    padding-bottom: 0.5rem;
  }
</style>

<template>
  <div>
    {#await data}
      <p>...waiting</p>
    {:then convertedData}
      <div class="card">
        <h1>Current Season: {convertedData.Season}</h1>
      </div>
      <div class="card">
        <h1>Winds</h1>
        <h2>Average windspeed: {convertedData.HWS.av}m/s</h2>
        <h2>Maximum windspeed: {convertedData.HWS.mx}m/s</h2>
      </div>
      <div class="card">
        <h1>Temperatures</h1>
        <h2>Minimum Temp: {convertedData.AT.mn}F</h2>
        <h2>Average Temp: {convertedData.AT.av}F</h2>
        <h2>Maximum Temp: {convertedData.AT.mx}F</h2>
      </div>
    {/await}
  </div>
</template>
