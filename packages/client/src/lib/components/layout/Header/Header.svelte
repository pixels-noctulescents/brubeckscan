<script lang="ts">
  import Navigation from "./Navigation.svelte";
  import Connect from "$lib/components/layout/Header/Connect.svelte";
  import Logo from "./Logo.svelte";
  import TopBar from "./TopBar.svelte";
</script>

<header>
  <div class="topbar">
    <TopBar />
  </div>
  <div class="header">
    <Logo />
    <Navigation />
    <Connect />
  </div>
</header>

<style lang="scss">
  header {
    position: sticky;
    top: 0;
    width: 100%;
  }

  .header {
    backdrop-filter: saturate(180%) blur(5px);
    z-index: 3000;
    height: 50px;
    padding: 10px 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>
