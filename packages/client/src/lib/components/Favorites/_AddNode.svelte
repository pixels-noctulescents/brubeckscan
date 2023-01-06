<script lang="ts">
  import Button from "../common/Button.svelte";
  import MdAdd from "svelte-icons/md/MdAdd.svelte";

  let address: string = "";

  async function addNode() {
    try {
      console.log(address.toLowerCase().trim());
    } catch (e) {
      console.log(e);
    }
  }
</script>

<div>
  <input bind:value={address} placeholder="Enter a node address to save it" />
  <Button Icon={MdAdd} action={addNode} width="30px" title={"Save node"} />
</div>

<style>
  div {
    position: sticky;
    top: 105px;
    left: 0;
    display: flex;
    width: 100%;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 1px 1px 32px rgba(160, 160, 160, 0.185);
  }
  input {
    width: 100%;
  }
</style>
