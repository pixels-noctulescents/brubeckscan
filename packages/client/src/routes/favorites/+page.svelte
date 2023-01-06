<script lang="ts">
  import type { ActionData } from "./$types";
  import Table from "$lib/components/common/NodeTable/Table.svelte";
  import AddNodeForm from "$lib/components/common/NodeTable/AddNodeForm.svelte";
  export let form: ActionData;
</script>

<svelte:head>
  <title>BrubeckScan | List</title>
</svelte:head>

<div>
  <h1>Favorites</h1>
  <AddNodeForm {form} />
  <Table />
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    max-width: 1200px;
  }
</style>
