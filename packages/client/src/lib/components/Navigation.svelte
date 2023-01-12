<script lang="ts">
  import { user } from "$lib/stores";
  import Logo from "./Logo.svelte";
</script>

<nav class="flex items-center gap-3 xl:gap-10">

  <Logo/>
  <!-- Public links-->
  <a class="text-md"href="/">Home</a>
  <a class="text-md"href="/network">Network</a>

  <!-- Authenticated links -->
  {#if $user}
    <a class="text-md" href="/favorites">Favorites</a>
  {/if}
</nav>
