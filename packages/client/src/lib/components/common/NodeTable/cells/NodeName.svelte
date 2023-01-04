<script lang="ts">
  import MdEdit from "svelte-icons/md/MdEdit.svelte";
  import MdSave from "svelte-icons/md/MdSave.svelte";
  import { nodeService } from "$lib/services/node";
  import type { DatabaseNode } from "@brubeckscan/common/types";

  export let node: DatabaseNode;

  let isEditing = false;
  let newName = node.name;

  async function handleChangeName() {
    try {
      const edited = await nodeService.updateNodeName(node.id, newName);
      node.name = newName;
      isEditing = !isEditing;
    } catch (e) {
      console.log(e);
    }
  }

  function toggleIsEditing() {
    isEditing = !isEditing;
    console.log(isEditing);
  }
</script>

<td>
  {#if isEditing}
    <div>
      <input bind:value={newName} />
      <div
        on:click={handleChangeName}
        on:keydown={handleChangeName}
        class="icon"
      >
        <MdSave />
      </div>
    </div>
  {:else}
    <div>
      <p>{node.name}</p>
      <div class="icon" on:click={toggleIsEditing} on:keydown={toggleIsEditing}>
        <MdEdit />
      </div>
    </div>
  {/if}
</td>

<style lang="scss">
  div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    width: 20px;
    color: lightgrey;
    transition-duration: 0.3s;
    &:hover {
      color: rgb(32, 32, 32);
      cursor: pointer;
    }
  }
</style>
