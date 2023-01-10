<script lang="ts">
  import Navigation from "./Navigation.svelte";
  import Logo from "./Logo.svelte";
  import TopBar from "./TopBar.svelte";
  import ThemeSelector from "$lib/components/common/ThemeSelector.svelte";
</script>

<header class="transparent">
  <div class="topbar">
    <TopBar />
  </div>
  <div class="header">
    <Logo />
    <Navigation />
    <ThemeSelector />
  </div>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 3;
  }

  .header {
    z-index: 10000;
    padding: 10px 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>
