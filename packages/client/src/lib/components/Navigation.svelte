<script lang="ts">
  import { user } from "$lib/stores";
  import Logo from "./Logo.svelte";
</script>

<nav class="flex items-center gap-3 xl:gap-10">

  <Logo/>
  <!-- Public links-->
  <a class="transition ease-in duration-150 text-md text-slate-500 hover:text-slate-800"href="/">Home</a>
  <a class="transition ease-in duration-150 text-md text-slate-500 hover:text-slate-800"href="/network">Network</a>
  
  <!-- Authenticated links -->
  {#if $user}
  <a class="transition ease-in duration-150 text-md text-slate-500 hover:text-slate-800" href="/favorites">Favorites</a>
  {/if}
  <a class="transition ease-in duration-150 text-md text-slate-500 hover:text-slate-800"href="/api">API</a>
</nav>
