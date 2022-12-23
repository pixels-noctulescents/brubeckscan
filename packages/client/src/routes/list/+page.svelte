<script lang="ts">
  import { user, nodesData } from "$lib/stores/user";
  import { PUBLIC_API_BASE_URL } from "$env/static/public";

  let progress = 0;

  user.subscribe(async (user) => {
    nodesData.set([]);
    progress = 0;
    const requests = user.nodes.map((node: any) => {
      return fetch(`${PUBLIC_API_BASE_URL}/api/nodes/stats/${node.address}`)
        .then(async (res) => await res.json())
        .then((data) => {
          progress++;
          return data;
        });
    });

    const responses = await Promise.all(requests);

    responses.map((response) => {
      nodesData.set([...$nodesData, response.data.node]);
    });
  });

  $: percentage = (progress / $user.nodes.length) * 100;
</script>

<ul>
  {percentage}%
  {progress}/{$user.nodes.length}
  {#each $nodesData as node}
    <li>
      <div>{node.address}</div>
      <div>{node.polygonScanURL}</div>
    </li>
  {/each}
</ul>

<style lang="scss">
</style>
