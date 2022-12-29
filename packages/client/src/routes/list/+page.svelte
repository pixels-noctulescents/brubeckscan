<script lang="ts">
  import { onMount } from "svelte";
  import type { ActionData } from "./$types";
  import { PUBLIC_API_BASE_URL } from "$env/static/public";
  import type { Node, DatabaseNode } from "@brubeckscan/common/types";
  import Table from "$lib/components/nodesTable/Table.svelte";
  import AddNodeForm from "$lib/components/nodesTable/AddNodeForm.svelte";
  import { user } from "$lib/stores/user";

  export let form: ActionData;

  let test: any[] = [];

  onMount(async () => {
    async function getNodeStats(node: DatabaseNode) {
      const response = await fetch(
        `${PUBLIC_API_BASE_URL}/api/nodes/stats/${node.address}`
      );

      const data = await response.json();

      const nodeData: any = data.data.node;

      nodeData.db = node;

      return nodeData;
    }

    const requests = $user.nodes.map((node) => {
      return getNodeStats(node);
    });

    const data = await Promise.all(requests);

    test = data;
  });
</script>

<div>
  <AddNodeForm {form} />
  <Table />
</div>

<style lang="scss">
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
</style>
