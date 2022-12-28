<script lang="ts">
  import type { PageData, ActionData } from "./$types";
  import { enhance } from "$app/forms";
  import { user, nodesData } from "$lib/stores/user";
  import { PUBLIC_API_BASE_URL } from "$env/static/public";

  export let form: ActionData;

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

<div>
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

  <!-- Add server to list -->
  <form method="POST" action="?/add" use:enhance>
    {#if form?.success}<p class="success">Node added to your list.</p>{/if}
    {#if form?.missing}<p class="error">Ethereum address required.</p>{/if}
    {#if form?.incorrect}<p class="error">
        Please enter a valid ethereum address.
      </p>{/if}
    <label>
      Address
      <input name="address" type="text" />
    </label>
    <input type="hidden" bind:value={$user.address} name="userAddress" />
    <button type="submit">Submit</button>
  </form>
</div>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    padding: 20px;
    input {
      background-color: beige;
      border: 1px solid lightblue;
      padding: 10px;
    }
    .error {
      color: red;
    }
    .success {
      color: lightgreen;
    }
  }
</style>
