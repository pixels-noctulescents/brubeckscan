<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import { generate } from "$lib/utils/generate";

  export let title: string = "Title";
  export let subTitle: string = "";
  export let color: string = "";
</script>

<div in:fade class="title responsive">
  <h1 style:color>{title}</h1>
  <h4 class="subtitle">{subTitle}</h4>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-size: cover;
    padding: 20px;
    margin-bottom: 20px;
  }
  h1 {
    backdrop-filter: blur(5px);
    z-index: 1;
    letter-spacing: -5px;
    padding: 10px;
  }

  h4 {
    backdrop-filter: blur(5px);
    z-index: 1;
    padding: 10px;
    text-align: center;
    max-width: 800px;
    padding: 20px;
    font-size: 20px;
  }
</style>
