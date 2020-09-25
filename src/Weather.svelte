<script lang="ts">
  import getData from "./getNasaData";
  let data = getData();
</script>

<style>
  div {
    margin-top: 3rem;
  }
  h1 {
    text-align: center;
  }
</style>

<template>
  <div>
    {#await data}
      <p>...waiting</p>
    {:then convertedData}
      <h1>Current Season: {convertedData.Season}</h1>
      <h1>Current windspeed: {convertedData.HWS.av}m/s</h1>
      <h1>Temp: {convertedData.AT.av}F</h1>
    {/await}
  </div>
</template>
