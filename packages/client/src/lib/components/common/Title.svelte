<script lang="ts">
  export let title: string = "Title";
  export let subTitle: string = "";
  import { slide } from "svelte/transition";
</script>

<div class="title" in:slide>
  <h1>{title}</h1>
  {#if subTitle}
    <h4>{subTitle}</h4>
  {/if}
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    transition-duration: 0.3s;
    gap: 10px;
  }
  h1 {
    border-bottom-right-radius: 8px;
    letter-spacing: -7px;
  }
  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    margin-bottom: 20px;
  }
</style>
