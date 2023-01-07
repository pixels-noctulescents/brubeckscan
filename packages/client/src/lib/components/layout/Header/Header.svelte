<script lang="ts">
  import Navigation from "./Navigation.svelte";
  import Connect from "$lib/components/layout/Header/Connect.svelte";
  import Logo from "./Logo.svelte";
  import TopBar from "./TopBar.svelte";
</script>

<header>
  <div class="top">
    <TopBar />
  </div>
  <div class="low">
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

  .low {
    backdrop-filter: saturate(180%) blur(5px);
    background: hsla(0, 0%, 100%, 0.8);
    z-index: 3000;
    height: 50px;
    border-bottom: 1px solid lightgray;
    padding: 10px 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>
