<script lang="ts">
    import { scale } from "svelte/transition";
    import { enhance } from "$app/forms";
    import { format } from "$lib/utils/format";
    import Module from "./Module.svelte";
    import MdSearch from 'svelte-icons/md/MdSearch.svelte'
    import MdDeleteForever from 'svelte-icons/md/MdDeleteForever.svelte'
    import MdSave from 'svelte-icons/md/MdSave.svelte'
    import MdContentCopy from 'svelte-icons/md/MdContentCopy.svelte'
    import type { FavoritesOverviewNode } from "@brubeckscan/common/types/favoritesOverview";
    import TokenData from "./TokenData.svelte";

    export let node: FavoritesOverviewNode;
</script>


<div class="w-full flex flex-col" in:scale>
    <Module>
        <div class="w-full flex flex-col gap-1">
            <div class="flex w-full justify-between">
                <div class="transition duration-100 ease-in w-6 text-gray-300 hover:text-blue-500">
                    <a href={`/nodes/${node.db.address}`}>
                        <div class="w-8">
                            <MdSearch/>
                        </div>
                    </a>
                </div>
                <form class="flex justify-end" method="POST" use:enhance>               
                    <input value={node.db.id} type="hidden" name="id">
                    <button formaction="?/deleteFavorite">
                        <div class="transition duration-100 ease-in w-6 text-gray-300 hover:text-red-500">
                            <div class="w-8">
                                <MdDeleteForever/>
                            </div>
                        </div>
                    </button>
                </form>
            </div>


            <form class="flex justify-between w-full mb-4 gap-10" method="POST" use:enhance>
                <input class="w-4/6" value={node.db.name} type="hidden" name="baseName">               
                <input class="w-full text-xl bg-slate-100 text-slate-900 p-2" value={node.db.name} type="text" name="newName">
                <input value={node.db.id} type="hidden" name="id">
                <button formaction="?/updateFavorite">
                    <div class="transition duration-100 ease-in w-6 text-gray-300 hover:text-blue-500">
                        <MdSave/>
                    </div>
                </button>
            </form>

            <div class="flex justify-between w-full items-center">
                <p class="text-gray-600">Adress</p>
                <p class="flex items-center gap-4">
                    <span>{format.ethAddress(node.stats.address)}</span>
                    <button class="transition duration-100 ease-in w-6 text-gray-300 hover:text-blue-500" on:click={async () => {await navigator.clipboard.writeText(node.stats.address)}}>
                        <MdContentCopy/>
                    </button>
                </p>
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
        </div>
    </Module>
</div>