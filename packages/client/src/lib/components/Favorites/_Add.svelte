<script lang="ts">
  import Button from "../common/Button.svelte";
  import MdAdd from "svelte-icons/md/MdAdd.svelte";
  import { userService } from "$lib/services/user";
  import { user } from "$lib/stores/user";
  import { favorites } from "$lib/stores/favorites";
  import { slide } from "svelte/transition";

  let address: string = "";

  async function addNode() {
    try {
      const favorite = await userService.saveFavorite(
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
  class="addNode"
  in:slide
  on:keydown={async (e) => {
    if (e.key === "Enter") {
      await addNode();
    }
  }}
>
  <input bind:value={address} placeholder="Enter a node address to save it" />
  <Button
    Icon={MdAdd}
    action={addNode}
    width="30px"
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
    padding: 30px;
    border-radius: 8px;
    backdrop-filter: saturate(180%) blur(5px);
    z-index: 3000;
  }
  input {
    width: 100%;
  }
</style>
