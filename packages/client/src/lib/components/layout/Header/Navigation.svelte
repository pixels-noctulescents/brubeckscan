<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$lib/components/common/Button.svelte";
  import { isConnected } from "$lib/stores/user";
  import MdHome from "svelte-icons/md/MdHome.svelte";
  import MdSearch from "svelte-icons/md/MdSearch.svelte";
  import MdFolderSpecial from "svelte-icons/md/MdFolderSpecial.svelte";
  import MdInfoOutline from "svelte-icons/md/MdInfoOutline.svelte";
</script>

<nav>
  <Button Icon={MdHome} action={() => goto("/")} />
  <Button Icon={MdSearch} action={() => goto("/scan")} />
  {#if $isConnected}
    <Button Icon={MdFolderSpecial} action={() => goto("/favorites")} />
  {/if}
  <Button Icon={MdInfoOutline} action={() => goto("/documentation")} />
</nav>

<style lang="scss">
  nav {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
</style>
