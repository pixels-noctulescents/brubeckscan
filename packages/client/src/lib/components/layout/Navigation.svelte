<script lang="ts">
  import { goto } from "$app/navigation";
  import MdHome from "svelte-icons/md/MdHome.svelte";
  import MdFolderSpecial from "svelte-icons/md/MdFolderSpecial.svelte";
  import { isConnected } from "$lib/stores/user";
</script>

<nav>
  <div class="icon" on:click={() => goto("/")} on:keydown={() => goto("/")}>
    <MdHome />
  </div>
  {#if $isConnected}
    <div
      class="icon"
      on:click={() => goto("/list")}
      on:keydown={() => goto("/list")}
    >
      <MdFolderSpecial />
    </div>
  {/if}
</nav>

<style lang="scss">
  nav {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .icon {
    width: 40px;
    height: 40px;
    transition: 0.2s;
    color: rgb(172, 172, 172);
    &:hover {
      color: rgb(35, 48, 87);
      cursor: pointer;
    }
  }
</style>
