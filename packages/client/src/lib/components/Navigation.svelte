<script lang="ts">
  import { user } from "$lib/stores";
</script>

<nav class="flex gap-3 xl:gap-10">

  <!-- Public links-->
  <a href="/">Home</a>

  <!-- Authenticated links -->
  {#if $user}
    <a href="/favorites">Favorites</a>
  {/if}
</nav>
