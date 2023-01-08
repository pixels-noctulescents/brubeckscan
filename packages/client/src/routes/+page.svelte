<script lang="ts">
  import Title from "$lib/components/common/Title.svelte";

  const title = "Home";
  const subTitle = "Welcome";
</script>

<svelte:head>
  <title>BrubeckScan | Home</title>
</svelte:head>

<div class="page">
  <Title {title} {subTitle} />
</div>

<style lang="scss">
</style>
