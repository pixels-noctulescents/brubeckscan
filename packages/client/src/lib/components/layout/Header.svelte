<script lang="ts">
  import Navigation from "./Navigation.svelte";
  import Connect from "./Connect.svelte";
  import logo from "$lib/assets/streamr/logo.svg";
</script>

<header>
  <img src={logo} alt="The streamr Logo" />
  <Navigation />
  <Connect />
</header>

<style lang="scss">
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    backdrop-filter: saturate(180%) blur(5px);
    background: hsla(0, 0%, 100%, 0.8);
    z-index: 3000;
    min-height: 65px;
    border-bottom: 1px solid lightgray;
    padding: 10px 50px;
  }

  img {
    width: 40px;
  }
</style>
