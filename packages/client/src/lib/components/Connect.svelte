<script lang="ts">
  import { user, hasEthereumProvider } from "$lib/stores";
  import Icon from "@iconify/svelte";
  import Button from "$lib/components/Button.svelte";

  const metamaskURL = "https://metamask.io/download/"

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

{#if !$user}
<div>
    {#if $hasEthereumProvider}
    <Button handle={handleConnect}>
      <p>Connect</p>
      <Icon icon="logos:metamask-icon" width="15" />
    </Button>
    {:else}
    <div class="px-2 py-1">
      <a href={metamaskURL} target="_blank" rel="noreferrer">Get Metamask</a>
    </div>
    {/if}
  </div>
{:else}
  <div class="py-1">
    <p>Connected</p>
  </div>
{/if}
