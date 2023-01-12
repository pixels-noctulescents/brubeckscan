<script lang="ts">
  import Prices from "$lib/components/Prices.svelte";
  import Connect from "$lib/components/Connect.svelte";
  import Navigation from "./Navigation.svelte";
  import Logo from "./Logo.svelte";
  import NetworkStats from "./HeaderNetworkStats.svelte";
  import type { Network } from "@brubeckscan/common/types";

  export let network:Network;
</script>

<div class="flex items-center justify-center w-full sticky top-0">
  <header class="flex flex-col items-center w-full z-50 bg-slate-900 text-slate-100 bg-opacity-90">
    <div class="w-full flex justify-between px-5 py-2 xl:px-32 bg-neutral-900">
      <Prices/>
      <NetworkStats {network}/>
    </div>
    <div class="w-full flex justify-between items-center px-5 py-2 xl:px-32">
      <Navigation />
      <Connect/>
    </div>
  </header>
</div>

<style>
  header {
    backdrop-filter: blur(10px);
  }
</style>