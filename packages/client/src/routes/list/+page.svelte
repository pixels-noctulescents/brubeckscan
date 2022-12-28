<script lang="ts">
  import type { ActionData } from "./$types";
  import { enhance } from "$app/forms";
  import Table from "$lib/components/nodesTable/Table.svelte";
  import { user } from "$lib/stores/user";

  export let form: ActionData;
</script>

<div>
  <Table />

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
