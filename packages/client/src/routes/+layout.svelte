<script lang="ts">
  import "the-new-css-reset/css/reset.css";
  import "$lib/assets/styles/styles.scss";
  import detectEthereumProvider from "@metamask/detect-provider";
  import Header from "$lib/components/layout/Header.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import { onMount } from "svelte";

  onMount(async () => {
    const provider = await detectEthereumProvider();
    console.log(provider);
  });
</script>

<div>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 120vh;
  }

  main {
    display: flex;
    flex-grow: 1;
  }
</style>
