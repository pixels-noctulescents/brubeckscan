<script lang="ts">
  import type { DatabaseNode } from "@brubeckscan/common/types";
  import Button from "../common/Button.svelte";
  import MdRemoveCircleOutline from "svelte-icons/md/MdRemoveCircleOutline.svelte";
  import AddNode from "./_AddNode.svelte";
  export let node: DatabaseNode;

  async function removeNode() {
    console.log(node.id);
  }
</script>

<div class="container">
  <div class="row">
    <img
      src={`https://avatars.dicebear.com/api/identicon/${node.address}.svg`}
      alt=""
    />
    <Button Icon={MdRemoveCircleOutline} action={removeNode} />
  </div>
  <div class="row">
    <p>{node.name}</p>
    <p>{node.address}</p>
    <p>{node.createdAt}</p>
    <p>{node.updatedAt}</p>
  </div>
</div>

<style lang="scss">
  .container {
    padding: 30px;
    width: 100%;
    background-color: whitesmoke;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    box-shadow: 1px 1px 32px rgba(158, 158, 158, 0.164);
    color: rgb(48, 48, 48);
    gap: 10px;
    img {
      width: 20px;
    }
  }

  .row {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
</style>
