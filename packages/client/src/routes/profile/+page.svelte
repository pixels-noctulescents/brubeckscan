<script lang="ts">
  import Title from "$lib/components/common/Title.svelte";
  import Profile from "$lib/components/Profile/Profile.svelte";

  const title = "Profile";
  const subTitle = "Modify your user preferences";
</script>

<svelte:head>
  <title>BrubeckScan | Profile</title>
</svelte:head>

<div class="page">
  <Title {title} {subTitle} />
  <Profile />
</div>

<style>
</style>
