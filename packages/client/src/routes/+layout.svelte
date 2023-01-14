<script lang="ts">
  import "../app.css";
  import Title from "$lib/components/Title.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import AppInfo from "$lib/components/AppInfo.svelte";
  import type { LayoutData } from "./$types";
  import { page } from "$app/stores";

  export let data: LayoutData;
</script>

<div class="bg-neutral-100">
  <div class="flex flex-col justify-between items-center min-h-screen">
    {#if data.network}
      <Header network={data.network}/>
    {/if}
    <main class="flex flex-col grow w-full items-center min-h-[600px]">
      {#if $page.route.id != "/"}
      <div class="w-full flex justify-center">
        <Title/>
      </div>
      {/if}
      <div class="flex flex-col w-full xl:px-0 items-center">
        <slot />
      </div>
    </main>
    <Footer/>
  </div>
  {#if data.latestRelease}
    <AppInfo latestRelease={data.latestRelease}/>
  {/if}
</div>