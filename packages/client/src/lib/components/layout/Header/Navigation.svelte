<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$lib/components/common/Button.svelte";
  import { isConnected } from "$lib/stores/user";
  import MdHome from "svelte-icons/md/MdHome.svelte";
  import MdGraphicEq from "svelte-icons/md/MdGraphicEq.svelte";
  import MdSearch from "svelte-icons/md/MdSearch.svelte";
  import MdFolderSpecial from "svelte-icons/md/MdFolderSpecial.svelte";
  import MdInfoOutline from "svelte-icons/md/MdInfoOutline.svelte";
  import Avatar from "$lib/components/common/Avatar.svelte";
  import { page } from "$app/stores";
  import { add_render_callback } from "svelte/internal";

  $: current = $page.route.id;
</script>

<nav>
  <Button
    Icon={MdHome}
    action={() => goto("/")}
    title={"Go to Home"}
    active={current === "/" ? true : false}
  />
  <Button
    Icon={MdGraphicEq}
    action={() => goto("/graphs")}
    title={"Go to Graphs"}
    active={current === "/graphs" ? true : false}
  />
  <Button
    Icon={MdSearch}
    action={() => goto("/scan")}
    title={"Go to Scan"}
    active={current === "/scan" ? true : false}
  />
  <Button
    Icon={MdInfoOutline}
    action={() => goto("/infos")}
    title={"Go to Infos"}
    active={current === "/infos" ? true : false}
  />
  {#if $isConnected}
    <Button
      Icon={MdFolderSpecial}
      action={() => goto("/favorites")}
      title={"Go to Favorites"}
      active={current === "/favorites" ? true : false}
    />
    <Button
      Icon={Avatar}
      action={() => goto("/profile")}
      title={"Go to Profile"}
      active={current === "/profile" ? true : false}
    />
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
</style>
