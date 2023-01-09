<script lang="ts">
  import Title from "$lib/components/common/Title.svelte";

  const title = "Home";
  const subTitle = "Welcome";
</script>

<svelte:head>
  <title>BrubeckScan | Home</title>
</svelte:head>

<div class="page container">
  <!-- <Title {title} {subTitle} /> -->
</div>

<style lang="scss">
  .container {
    width: 100%;
    background-color: rgb(26, 224, 115);
    min-height: calc(100vh - 89px);
  }
</style>
