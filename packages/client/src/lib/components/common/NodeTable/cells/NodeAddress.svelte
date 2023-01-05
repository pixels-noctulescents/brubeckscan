<script lang="ts">
  import type { DatabaseNode } from "@brubeckscan/common/types";
  import { format } from "$lib/utils/format";
  import Icon from "@iconify/svelte";
  import MdContentCopy from "svelte-icons/md/MdContentCopy.svelte";

  export let node: DatabaseNode;
</script>

<td title={node.address}>
  <div class="container">
    <p>{format.ethAddress(node.address)}</p>
    <div class="actionsContainer">
      <button
        class="icon"
        title="Copy"
        on:click={() => navigator.clipboard.writeText(node.address)}
      >
        <MdContentCopy />
      </button>
      <button>
        <a
          href={`https://polygonscan.com/address/${node.address}`}
          title="Search this address on Polygonscan"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="cryptocurrency-color:matic" width="20" />
        </a>
      </button>
    </div>
  </div>
</td>

<style lang="scss">
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .actionsContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }

  .icon {
    color: lightgray;
    width: 20px;
    transition-duration: 0.3s;
    &:hover {
      color: rgb(32, 32, 32);
      cursor: pointer;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
