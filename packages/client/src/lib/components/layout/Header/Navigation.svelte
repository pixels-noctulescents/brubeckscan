<script lang="ts">
  import { isConnected } from "$lib/stores/user";
</script>

<nav>
  <a href="/">Home</a>
  {#if $isConnected}
    <a href={`/favorites`}>Favorites</a>
    <a href={`/profile`}>Profile</a>
  {/if}
</nav>

<style lang="scss">
  nav {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
</style>
