<script lang="ts">
  import { user, hasEthereumProvider } from "$lib/stores";
  import Icon from "@iconify/svelte";
  import Button from "$lib/components/Button.svelte";

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
    <Button handle={() => {}}>
      <p>Get Metamask</p>
      <Icon icon="logos:metamask-icon" width="15" />
    </Button>
    {/if}
  </div>
{:else}
<Button handle={() => {}}>
  <p>Connected</p>
  <Icon icon="logos:metamask-icon" width="15" />
</Button>
{/if}
