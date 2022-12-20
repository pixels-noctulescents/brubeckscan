<script lang="ts">
  import Navigation from "./Navigation.svelte";
</script>

<header>
  <Navigation />
</header>

<style lang="scss">
  header {
    position: sticky;
    top: 0;
    backdrop-filter: saturate(180%) blur(5px);
    background: hsla(0, 0%, 100%, 0.8);
    z-index: 3000;
    min-height: 65px;
    border-bottom: 1px solid lightgray;
  }
</style>
