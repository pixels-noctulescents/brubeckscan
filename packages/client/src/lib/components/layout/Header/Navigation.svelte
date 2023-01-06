<script lang="ts">
  import { goto } from "$app/navigation";
  import MdHome from "svelte-icons/md/MdHome.svelte";
  import MdFolderSpecial from "svelte-icons/md/MdFolderSpecial.svelte";
  import MdSearch from "svelte-icons/md/MdSearch.svelte";
  import { isConnected } from "$lib/stores/user";
</script>

<nav>
  <div class="icon" on:click={() => goto("/")} on:keydown={() => goto("/")}>
    <MdHome />
  </div>
  <div
    class="icon"
    on:click={() => goto("/scan")}
    on:keydown={() => goto("/scan")}
  >
    <MdSearch />
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
    gap: 40px;
  }

  .icon {
    width: 30px;
    height: 30px;
    transition: 0.3s;
    color: rgb(172, 172, 172);
    &:hover {
      color: #333333;
      cursor: pointer;
    }
  }
</style>
