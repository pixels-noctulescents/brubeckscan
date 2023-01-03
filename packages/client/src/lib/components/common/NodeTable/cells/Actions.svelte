<script lang="ts">
  import MdDelete from "svelte-icons/md/MdDelete.svelte";
  import { nodeService } from "$lib/services/node";
  import { user } from "$lib/stores/user";
  import type { DatabaseNode } from "@brubeckscan/common/types";

  export let node: DatabaseNode;

  async function handleDelete() {
    try {
      const unwatchNode = await nodeService.unwatchNode(node.id);

      if (unwatchNode.status === "success") {
        // Update user store
        user.update((user) => {
          user.nodes = user.nodes.filter((item) => item.id !== node.id);
          return user;
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
</script>

<td>
  <div>
    <p style:visibility="hidden">.</p>
    <button on:click={handleDelete} class="icon">
      <MdDelete />
    </button>
  </div>
</td>

<style lang="scss">
  div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    color: lightgrey;
    transition-duration: 0.3s;
    width: 25px;
    &:hover {
      color: rgb(32, 32, 32);
      cursor: pointer;
    }
  }
</style>
