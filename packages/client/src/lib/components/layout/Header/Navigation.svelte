<script lang="ts">
  import { user } from "$lib/stores";
</script>

<nav>
  <a href="/">Home</a>
  {#if $user}
    <a href={`/favorites`}>Favorites</a>
    <a href={`/profile`}>Profile</a>
  {/if}
</nav>

<style>
  nav {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
</style>
