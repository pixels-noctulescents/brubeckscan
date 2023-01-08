<script lang="ts">
  import { theme } from "$lib/stores/theme";
  import FaMoon from "svelte-icons/fa/FaMoon.svelte";
  import MdWbSunny from "svelte-icons/md/MdWbSunny.svelte";
</script>

<div class="container">
  {#if $theme === "dark"}
    <div
      class="icon"
      on:click|preventDefault={() => {
        console.log("test");
        theme.set("light");
      }}
      on:keydown={() => {}}
    >
      <MdWbSunny />
    </div>
  {:else}
    <div
      class="icon"
      on:click|preventDefault={() => {
        console.log("test");
        theme.set("dark");
      }}
      on:keydown={() => {}}
    >
      <FaMoon />
    </div>
  {/if}
</div>

<style lang="scss">
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    width: 15px;
    display: flex;
    &:hover {
      cursor: pointer;
    }
  }
</style>
