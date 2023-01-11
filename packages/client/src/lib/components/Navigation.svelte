<script lang="ts">
  import { user } from "$lib/stores";
</script>

<nav class="flex gap-3 xl:gap-10">

  <!-- Public links-->
  <a class="text-lg"href="/">Home</a>

  <!-- Authenticated links -->
  {#if $user}
    <a class="text-lg" href="/favorites">Favorites</a>
  {/if}
</nav>
