<script lang="ts">
  import { user, userOnNetwork, hasEthereumProvider } from "$lib/stores";
  import Icon from "@iconify/svelte";
  import Button from "$lib/components/Button.svelte";
  import Identicon from "$lib/components/Identicon.svelte";
  import TokenData from "$lib/components/TokenData.svelte";

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

{#if $hasEthereumProvider != undefined}
  {#if !$user && $hasEthereumProvider}
  <div>
      <Button handle={handleConnect}>
        <p>Connect</p>
        <Icon icon="logos:metamask-icon" width="15" />
      </Button>
    </div>
  {:else if !$user && !$hasEthereumProvider}
    <div class="px-2 py-1">
      <a href={metamaskURL} target="_blank" rel="noreferrer">Get Metamask</a>
    </div>
  {:else if $user}
    <div class="py-1 flex items-center gap-4 text-blue-200">
      <TokenData value={$userOnNetwork?.staked}/>
      <p class="text-slate-300">|</p>
      <Identicon address={$user.address}/>
    </div>
  {/if}
{/if}
