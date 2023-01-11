<script lang="ts">
  import Prices from "$lib/components/Prices.svelte";
  import Connect from "$lib/components/Connect.svelte";
  import Navigation from "./Navigation.svelte";
  import Logo from "./Logo.svelte";
  import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
</script>

<div class="flex items-center justify-center w-full bg-slate-900 text-stone-100 sticky top-0">
  <header class="flex flex-col items-center w-full">
    <div class="w-full flex justify-between bg-slate-800 px-5 py-2">
      <Prices/>
      <Connect/>
    </div>
    <div class="w-full flex justify-between items-center px-5 py-2 bg-midnight">
      <Logo />
      <Navigation />
      <ThemeSwitcher />
    </div>
  </header>
</div>
