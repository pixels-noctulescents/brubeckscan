<script lang="ts">
  import "../app.css";
  import Header from "$lib/components/layout/Header/Header.svelte";
  import Footer from "$lib/components/layout/Footer/Footer.svelte";
  import { currentTheme } from "$lib/stores";
  import { authService } from "$lib/services/auth";
  import { onMount } from "svelte";

  onMount(async () => {
    await authService.init();
  });
</script>

<div class={`${$currentTheme} page`}>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  main {
    display: flex;
    width: 100%;
    flex-grow: 1;
    justify-content: center;
    min-height: calc(100vh - 88px);
    padding: 0px;
  }
</style>
