<script lang="ts">
  import Title from "$lib/components/common/Title.svelte";
  import Favorites from "$lib/components/Favorites/Favorites.svelte";

  const title = "Favorites";
  const subTitle = "Manage your nodes and keep track of your rewards";
</script>

<svelte:head>
  <title>BrubeckScan | Favorites</title>
</svelte:head>

<div class="page">
  <Title {title} {subTitle} />
  <Favorites />
</div>

<style lang="scss">
</style>
