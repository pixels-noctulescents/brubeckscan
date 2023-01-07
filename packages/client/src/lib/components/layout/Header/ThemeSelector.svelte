<script lang="ts">
  import { theme } from "$lib/stores/theme";
  import FaMoon from "svelte-icons/fa/FaMoon.svelte";
  import FaRegSun from "svelte-icons/fa/FaRegSun.svelte";
</script>

<div>
  {#if $theme === "dark"}
    <button on:click={() => theme.set("light")} on:keydown={() => {}}>
      <FaRegSun />
    </button>
  {:else}
    <button on:click={() => theme.set("dark")} on:keydown={() => {}}>
      <FaMoon />
    </button>
  {/if}
</div>

<style lang="scss">
  div {
    display: flex;
    button {
      width: 15px;
      display: flex;
      transition-duration: 0.3s;
      &:hover {
        cursor: pointer;
        color: white;
        border: 1px solid white;
        padding: 2px;
        border-radius: 2px;
      }
    }
  }
</style>
