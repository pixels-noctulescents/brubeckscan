<script lang="ts">
  import { nodeService } from "$lib/services/node";
  import type { DatabaseNode } from "@brubeckscan/common/types";

  export let node: DatabaseNode;
</script>

<td>
  <div>
    <p>{node.name}</p>
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
</style>
