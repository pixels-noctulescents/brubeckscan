<script lang="ts">
  import { onMount } from "svelte";
  import "the-new-css-reset/css/reset.css";
  import "$lib/assets/styles/styles.scss";
  import Header from "$lib/components/layout/Header.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import { socketService } from "$lib/services/socket";

  onMount(() => {
    socketService.init();
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
    background-color: whitesmoke;
    min-height: calc(100vh - 65px);
    padding: 40px;
  }
</style>
