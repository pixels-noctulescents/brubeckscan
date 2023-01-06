<script lang="ts">
  import { hasMetamask } from "$lib/stores/provider";
  import { isConnected } from "$lib/stores/user";
  import UserIcon from "./Avatar.svelte";
  import Icon from "@iconify/svelte";

  let isConnecting = false;

  async function connect() {
    try {
      if (isConnecting) return;
      isConnecting = true;
      const connect = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      isConnecting = false;
    } catch (e) {
      console.log(e);
    }
  }
</script>

<div>
  {#if $isConnected}
    <UserIcon />
  {:else if $hasMetamask}
    <button on:click={connect}
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
    &:hover {
      cursor: pointer;
      user-select: none;
      border: 1px solid rgb(32, 32, 32);
      box-shadow: 1px 1px black;
    }
  }
</style>
