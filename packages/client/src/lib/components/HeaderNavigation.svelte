<script lang="ts">
  import { user } from "$lib/stores";
</script>

<nav class="flex items-center gap-2 xl:gap-10">
  <!-- Public links-->
  <div class="flex tracking-tighter">
    <p class="mr-6 text-lg lg:text-2xl"><a href="/">BrubeckScan</a></p>
  </div>
  <a class="hidden sm:flex transition ease-in duration-150 text-sm lg:text-md text-slate-500 hover:text-slate-800"href="/network">Network</a>
  
  <!-- Authenticated links -->
  {#if $user}
  <a class="hidden sm:flex transition ease-in duration-150 text-sm lg:text-md text-slate-500 hover:text-slate-800" href="/favorites">Favorites</a>
  {/if}
  <a class="hidden sm:flex transition ease-in duration-150 text-sm lg:text-md text-slate-500 hover:text-slate-800"href="/api">API</a>
</nav>
