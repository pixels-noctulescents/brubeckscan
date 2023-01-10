<script lang="ts">
  import Title from "$lib/components/common/Title.svelte";

  const title = "BrubeckScan";
</script>

<svelte:head>
  <title>BrubeckScan | Home</title>
</svelte:head>

<div class="page container">
  <Title {title} />
</div>

<style>
  .container {
    width: 100%;
    min-height: calc(100vh - 89px);
  }
</style>
