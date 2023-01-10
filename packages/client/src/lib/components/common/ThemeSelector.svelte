<script lang="ts">
  import UserService from "$lib/services/user";
  import { user, currentTheme } from "$lib/stores";

  async function select() {
    if ($currentTheme === "dark") {
      currentTheme.set("light");
      if ($user) {
        const update = await UserService.update(`${$user.address}`, {
          theme: "light",
        });
      }
    } else {
      currentTheme.set("dark");
      if ($user) {
        const update = await UserService.update(`${$user.address}`, {
          theme: "dark",
        });
      }
    }
  }
</script>

<div>
  {#if $currentTheme === "dark"}
    <button on:click={select}>Light</button>
  {:else}
    <button on:click={select}>Dark</button>
  {/if}
</div>

<style lang="scss">
</style>
