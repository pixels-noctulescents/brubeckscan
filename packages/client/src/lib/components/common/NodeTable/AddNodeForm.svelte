<script lang="ts">
  import { enhance } from "$app/forms";
  import { user } from "$lib/stores/user";
  import MdAdd from "svelte-icons/md/MdAdd.svelte";
  export let form: any;

  const placeholder =
    "Enter a node ethereum address to save it in your favourites.";
</script>

<div class="container">
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
  <form method="POST" action="?/add" use:enhance>
    <input name="address" type="text" {placeholder} />
    <input type="hidden" bind:value={$user.address} name="userAddress" />
    <button type="submit">
      <div class="icon">
        <MdAdd />
      </div>
    </button>
  </form>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 1px 1px 32px rgb(228, 228, 228);
  }
  .message {
    display: flex;
    background-color: white;
    border-radius: 8px;
    padding: 10px;
    &.success {
      color: lightgreen;
    }
    &.error {
      color: lightcoral;
    }
  }
  form {
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: white;
    padding: 10px 20px;
    input {
      width: 100%;
    }
    border-radius: 8px;
    .icon {
      width: 40px;
      color: lightgray;
      transition: 0.3s;
      &:hover {
        color: black;
        cursor: pointer;
      }
    }
  }
</style>
