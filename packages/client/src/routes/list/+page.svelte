<script lang="ts">
  import { user, nodesData } from "$lib/stores/user";
  import { PUBLIC_API_BASE_URL } from "$env/static/public";
  user.subscribe(async (user) => {
    nodesData.set([]);
    const requests = user.nodes.map((node: any) => {
      return fetch(
        `${PUBLIC_API_BASE_URL}/api/nodes/stats/${node.address}`
      ).then(async (res) => await res.json());
    });

    const responses = await Promise.all(requests);

    responses.map((response) => {
      nodesData.set([...$nodesData, response.data.node]);
    });
  });
</script>

<ul>
  {#each $nodesData as node}
    <li>
      <div>{node.address}</div>
      <div>{node.polygonScanURL}</div>
    </li>
  {/each}
</ul>

<style lang="scss">
</style>
