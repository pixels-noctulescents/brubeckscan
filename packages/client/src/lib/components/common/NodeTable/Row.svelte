<script lang="ts">
  import type { DatabaseNode } from "@brubeckscan/common/types";
  import { nodeService } from "$lib/services/node";
  import Actions from "./cells/Actions.svelte";
  import NodeName from "./cells/NodeName.svelte";
  import NodeAddress from "./cells/NodeAddress.svelte";
  import NodeData from "./cells/NodeData.svelte";
  import Loader from "./cells/Loader.svelte";

  export let node: DatabaseNode;

  const promise = nodeService.getNodeStats(node.address);
</script>

<tr>
  <NodeName {node} />
  <NodeAddress {node} />
  {#await promise}
    <Loader />
  {:then nodeData}
    {#if nodeData}
      <NodeData {nodeData} />
      <!-- Actions -->
      <Actions {node} {nodeData} />
    {/if}
  {/await}
</tr>

<style lang="scss">
  tr {
    height: 100%;
    font-size: 16px;
  }

  tr:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
</style>
