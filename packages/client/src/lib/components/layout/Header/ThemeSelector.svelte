<script lang="ts">
  import { theme } from "$lib/stores/theme";
  import FaMoon from "svelte-icons/fa/FaMoon.svelte";
  import FaRegSun from "svelte-icons/fa/FaRegSun.svelte";
  import MdWbSunny from "svelte-icons/md/MdWbSunny.svelte";
</script>

<div>
  {#if $theme === "dark"}
    <button on:click={() => theme.set("light")} on:keydown={() => {}}>
      <MdWbSunny />
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
      width: 20px;
      display: flex;
      transition-duration: 0.3s;
      &:hover {
        cursor: pointer;
        color: white;
        border: 1px solid white;
        padding: 5px;
        border-radius: 2px;
      }
    }
  }
</style>
