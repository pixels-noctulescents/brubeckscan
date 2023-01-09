<script lang="ts">
  import "the-new-css-reset/css/reset.css";
  import "$lib/assets/styles/styles.scss";
  import Header from "$lib/components/layout/Header/Header.svelte";
  import Footer from "$lib/components/layout/Footer/Footer.svelte";
  import { theme } from "$lib/stores/theme";
</script>

<div class={`${$theme} page`}>
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
