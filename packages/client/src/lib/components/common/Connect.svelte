<script lang="ts">
  import { user, hasEthereumProvider } from "$lib/stores";
  import Icon from "@iconify/svelte";

  async function handleConnect() {
    try {
      const request = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
    } catch (e) {
      console.log(e);
    }
  }
</script>

<div>
  {#if $user}
    <p />
  {:else if $hasEthereumProvider}
    <button on:click={handleConnect}
      ><p>Connect</p>
      <Icon icon="logos:metamask-icon" width="15" /></button
    >
  {:else}
    <button
      ><p>Get Metamask</p>
      <Icon icon="logos:metamask-icon" width="15" /></button
    >
  {/if}
</div>

<style lang="scss">
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid transparent;
    padding: 7px 10px;
    border-radius: 8px;
    transition: 0.3s;
    gap: 10px;
    font-size: 10px;
    border: 1px solid lightgray;
    &:hover {
      cursor: pointer;
      user-select: none;
      border: 1px solid rgb(32, 32, 32);
      box-shadow: 1px 1px black;
    }
  }
</style>
