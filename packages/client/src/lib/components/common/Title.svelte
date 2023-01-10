<script lang="ts">
  import { slide } from "svelte/transition";

  export let title: string = "Title";
  export let subTitle: string = "";
  export let color: string = "";
</script>

<div in:slide>
  <h1 style:color>{title}</h1>
  {#if subTitle}
    <h4>{subTitle}</h4>
  {/if}
</div>

<style>
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
    z-index: 1;
    padding: 10px;
    text-align: center;
  }

  h4 {
    z-index: 1;
    padding: 10px;
    text-align: center;
    max-width: 400px;
    padding: 20px;
  }
</style>
