<script lang="ts">
  import { enhance } from "$app/forms";
  import { user } from "$lib/stores/user";
  import MdAdd from "svelte-icons/md/MdAdd.svelte";
  import Button from "$lib/components/common/Button.svelte";

  export let form: any;
</script>

<form method="POST" action="?/add" use:enhance>
  <!-- Links variables -->
  <input type="hidden" bind:value={$user.address} name="userAddress" />
  <!-- Messages -->
  {#if form?.success || form?.missing || form?.incorrect || form?.error}
    <div>
      {#if form?.success}<p class="success message">
          Node added to your list.
        </p>{/if}
      {#if form?.missing}<p class="error message">
          Ethereum address required.
        </p>{/if}
      {#if form?.incorrect}<p class="error message">
          Please enter a valid ethereum address.
        </p>{/if}
      {#if form?.error}
        <p>{form?.error}</p>
        <p>{form?.error.message}</p>
      {/if}
    </div>
  {/if}
  <!-- Input -->
  <h4>Save a node</h4>
  <div class="input">
    <input name="address" type="text" placeholder="Ethereum address ..." />
    <button type="submit">
      <Button Icon={MdAdd} action={() => {}} width="35px" />
    </button>
  </div>
</form>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 10px;
  }
  .input {
    display: flex;
    gap: 50px;
    justify-content: space-between;
  }
  .message {
    display: flex;
    background-color: white;
    border-radius: 8px;
    &.success {
      color: lightgreen;
    }
    &.error {
      color: lightcoral;
    }
  }

  input {
    width: 100%;
  }

  h4 {
    margin-bottom: 15px;
  }
</style>
