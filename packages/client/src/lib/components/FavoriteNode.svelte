<script lang="ts">
    import { scale } from "svelte/transition";
    import { enhance } from "$app/forms";
    import { format } from "@brubeckscan/common/utils";
    import Icon from '@iconify/svelte';
    import Module from "./Module.svelte";
    import TokenData from "./TokenData.svelte";
    import FavoriteNodeName from "./FavoriteNodeName.svelte";
    import type { FavoritesOverviewNode } from "@brubeckscan/common/types/favoritesOverview";


    export let node: FavoritesOverviewNode;
</script>


<div class="w-full flex flex-col" in:scale>
    <Module>
        <div class="w-full flex flex-col gap-1">
            <FavoriteNodeName {node} />

            <div class="flex justify-between w-full items-center">
                <div class="flex items-center w-full justify-between">
                    <span><a title={node.db.address} href={`/nodes/${node.db.address}`}>{format.ethAddress(node.stats.address)}</a></span>
                    <div class="flex">
                        <button class="transition duration-100 ease-in w-6 text-gray-300 hover:text-blue-500" on:click={async () => {await navigator.clipboard.writeText(node.stats.address)}}>
                            <Icon icon="material-symbols:content-copy" width="26" />
                        </button>
                        <div class="flex justify-between">
                            <div class="transition duration-100 ease-in w-6 text-gray-300 hover:text-blue-500">
                                <a href={`/nodes/${node.db.address}`}>
                                    <div class="w-8">
                                        <Icon icon="material-symbols:search" width="26" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-between w-full h-max items-center">
                <p class="text-gray-600">Status</p>
                    {#if node.stats.status}
                        <p class="text-green-400 text-lg">OK</p>
                    {:else}
                        <p class="text-red-500 text-lg">KO</p>
                    {/if}
            </div>

            {#if node?.stats?.lastClaim?.id}             
            <div class="flex justify-between w-full items-center">
                <p class="text-gray-600">Last claim</p>
                <p>{format.getFromNow(node.stats.lastClaim.claimTime)}</p>
            </div>
            {/if}
            <div class="flex justify-between w-full items-center">
                <p class="text-gray-600">To be received</p>
                <p>
                    <TokenData value={node.stats.toBeReceived}/>
                </p>
            </div>
            <div class="flex justify-between w-full items-center">
                <p class="text-gray-600">Staked</p>
                <p>
                    <TokenData value={node.stats.staked}/>
                </p>
            </div>
            <div class="flex justify-between w-full items-center">
                <p class="text-gray-600">Sent</p>
                <p>
                    <TokenData value={node.stats.sent}/>
                </p>
            </div>
            <form class="flex" method="POST" use:enhance>               
                <input value={node.db.id} type="hidden" name="id">
                <button formaction="?/deleteFavorite" class="w-full">
                    <div class="transition duration-100 ease-in w-full text-gray-300 hover:text-red-500  flex justify-end">
                        <div class="flex items-center">
                            <p>Delete</p>
                            <Icon icon="material-symbols:delete" width="26" />
                        </div>
                    </div>
                </button>
            </form>
        </div>
    </Module>
</div>