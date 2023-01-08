<script lang="ts">
  export let title: string = "Title";
  import { slide } from "svelte/transition";
</script>

<div class="title" in:slide>
  <h1>{title}</h1>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    transition-duration: 0.3s;
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
  }
</style>
