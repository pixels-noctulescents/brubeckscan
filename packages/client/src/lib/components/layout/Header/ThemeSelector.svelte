<script lang="ts">
  import { theme } from "$lib/stores/theme";
  import { userService } from "$lib/services/user";
  import { user } from "$lib/stores/user";
  import FaMoon from "svelte-icons/fa/FaMoon.svelte";
  import MdWbSunny from "svelte-icons/md/MdWbSunny.svelte";
</script>

<div class="container">
  {#if $theme === "dark"}
    <div
      class="icon"
      on:click|preventDefault={async () => {
        theme.set("light");
        if ($user) {
          await userService.update($user.address, { theme: "light" });
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
        theme.set("dark");
        if ($user) {
          await userService.update($user.address, { theme: "dark" });
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
