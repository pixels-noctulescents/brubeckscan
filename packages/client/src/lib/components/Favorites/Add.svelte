<script lang="ts">
  import Button from "../common/Button.svelte";
  import MdAdd from "svelte-icons/md/MdAdd.svelte";
  import FavoriteService from "$lib/services/favorite";
  import { user } from "$lib/stores/user";
  import { favorites } from "$lib/stores/favorites";
  import { fade, slide } from "svelte/transition";

  let address: string = "";

  async function addNode() {
    try {
      const favorite = await FavoriteService.save(
        $user.address,
        address.toLowerCase().trim(),
        `Node ${$favorites.length + 1}`
      );
    } catch (e) {
      console.log(e);
    }
  }
</script>

<div
  class="module"
  on:keydown={async (e) => {
    if (e.key === "Enter") {
      await addNode();
    }
  }}
>
  <input
    bind:value={address}
    placeholder="Enter a node address to save it"
    required={true}
  />
  <Button
    Icon={MdAdd}
    action={addNode}
    width="40px"
    title={"Save node"}
    type="action"
  />
</div>

<style>
  div {
    position: sticky;
    top: 105px;
    left: 0;
    display: flex;
    width: 100%;
    z-index: 2;
  }
  input {
    width: 100%;
    font-size: 22px;
    letter-spacing: -1px;
  }
</style>
