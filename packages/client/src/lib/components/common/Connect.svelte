<script lang="ts">
  import { hasMetamask } from "$lib/stores/ethereumBrowserEnv";
  import { user, isConnected } from "$lib/stores/user";
  import UserIcon from "./UserIcon.svelte";

  async function connect() {
    try {
      const connect = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
    } catch (e) {
      console.log(e);
    }
  }
</script>

<div>
  {#if $isConnected}
    <UserIcon />
  {:else if $hasMetamask}
    <button on:click={connect}>Connect</button>
  {:else}
    <button rel="noreferrer">Get Metamask</button>
  {/if}
</div>

<style></style>
