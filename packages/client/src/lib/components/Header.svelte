<script lang="ts">
  import Prices from "$lib/components/Prices.svelte";
  import Connect from "$lib/components/Connect.svelte";
  import HeaderNavigation from "./HeaderNavigation.svelte";
  import NetworkStats from "./HeaderNetworkStats.svelte";
  import type { BrubeckNetworkStats } from "@brubeckscan/common/types/networkStats";
  import { navigating } from "$app/stores";
  import {fade} from "svelte/transition";

  export let network: BrubeckNetworkStats;
</script>

<div class="flex items-center justify-center w-full sticky top-0 z-50">
  <header class="flex flex-col items-center w-full z-50 bg-slate-100 text-neutral-900 bg-opacity-90">
    <div class="w-full flex justify-between px-5 py-2 xl:px-32 bg-neutral-200">
      <Prices/>
      <NetworkStats {network}/>
    </div>
    <div class="w-full flex justify-between items-center px-5 py-2 xl:px-32">
      <HeaderNavigation />
      <Connect/>
    </div>
    {#if $navigating != null}
      <div in:fade class="w-full bg-orange-500 h-1 bg-opacity-50"></div>
    {:else}
      <div in:fade class="w-full bg-orange-500 h-1 bg-opacity-0"></div>
    {/if}
  </header>
</div>

<style>
  header {
    backdrop-filter: blur(10px);
  }
</style>