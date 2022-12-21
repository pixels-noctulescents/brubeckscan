<script lang="ts">
  import { hasMetamask } from "$lib/stores/ethereumBrowserEnv";
  import { user, isConnected } from "$lib/stores/user";

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
  {#if $hasMetamask}
    <button on:click={connect}>Connect</button>
  {:else}
    <button rel="noreferrer">Get Metamask</button>
  {/if}

  {#if $isConnected}
    <div>{$user.address}</div>
    <div>{$user.nodes.length}</div>
  {/if}
</div>

<style></style>
