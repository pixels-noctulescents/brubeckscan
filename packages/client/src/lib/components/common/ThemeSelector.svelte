<script lang="ts">
  import UserService from "$lib/services/user";
  import { user, currentTheme } from "$lib/stores";
  import FaMoon from "svelte-icons/fa/FaMoon.svelte";
  import MdWbSunny from "svelte-icons/md/MdWbSunny.svelte";
</script>

<div class="container">
  {#if $currentTheme === "dark"}
    <div
      class="icon"
      on:click|preventDefault={async () => {
        currentTheme.set("light");
        if ($user) {
          await UserService.update($user.address, { theme: "light" });
        }
      }}
      on:keydown={() => {}}
    >
      <MdWbSunny />
    </div>
  {:else}
    <div
      class="icon"
      on:click|preventDefault={async () => {
        currentTheme.set("dark");
        if ($user) {
          await UserService.update($user.address, { theme: "dark" });
        }
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
