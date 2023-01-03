<script lang="ts">
  import type { DatabaseNode } from "@brubeckscan/common/types";
  import { format } from "$lib/utils/format";
  import Icon from "@iconify/svelte";

  export let node: DatabaseNode;
</script>

<td title={node.address}>
  <div>
    <p>{format.ethAddress(node.address)}</p>
    <button>
      <a
        href={`https://polygonscan.com/address/${node.address}`}
        title="Search this address on Polygonscan"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon="cryptocurrency-color:matic" width="26" />
      </a>
    </button>
  </div>
</td>

<style lang="scss">
  div {
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
</style>
