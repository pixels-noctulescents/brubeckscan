<script lang="ts">
  import type { ActionData } from "./$types";
  import Table from "$lib/components/nodesTable/Table.svelte";
  import AddNodeForm from "$lib/components/nodesTable/AddNodeForm.svelte";
  export let form: ActionData;
</script>

<svelte:head>
  <title>BrubeckScan | List</title>
</svelte:head>

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
