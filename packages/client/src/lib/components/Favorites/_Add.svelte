<script lang="ts">
  import Button from "../common/Button.svelte";
  import MdAdd from "svelte-icons/md/MdAdd.svelte";
  import { userService } from "$lib/services/user";
  import { user } from "$lib/stores/user";
  import { favorites } from "$lib/stores/favorites";

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
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 1px 1px 32px rgba(160, 160, 160, 0.185);
    backdrop-filter: saturate(180%) blur(5px);
    background: hsla(0, 0%, 100%, 0.8);
    z-index: 3000;
  }
  input {
    width: 100%;
  }
</style>
