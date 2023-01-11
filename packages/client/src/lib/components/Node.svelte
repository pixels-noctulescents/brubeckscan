<script lang="ts">
    import { scale } from "svelte/transition";
    import { enhance } from "$app/forms";
    import { format } from "$lib/utils/format";
    import Module from "./Module.svelte";
    import MdRemoveCircleOutline from 'svelte-icons/md/MdRemoveCircleOutline.svelte'
    import MdSave from 'svelte-icons/md/MdSave.svelte'
    import MdContentCopy from 'svelte-icons/md/MdContentCopy.svelte'
    import type { Favorite } from "@brubeckscan/common/types/overview";

    export let node: Favorite;
</script>


<div class="sm:w-full max-w-xs flex flex-col" in:scale>
    <Module>
        <div class="flex flex-col w-72 h-max gap-1">
            <form class="flex justify-end w-full mb-4" method="POST" use:enhance>               
                <input value={node.db.id} type="hidden" name="id">
                <button formaction="?/deleteFavorite">
                    <div class="transition duration-100 ease-in w-6 text-gray-300 hover:text-red-500">
                        <MdRemoveCircleOutline/>
                    </div>
                </button>
            </form>

            <form class="flex justify-between w-full" method="POST" use:enhance>
                <input class="w-4/6" value={node.db.name} type="hidden" name="baseName">               
                <input class="w-4/6 text-2xl" value={node.db.name} type="text" name="newName">
                <input value={node.db.id} type="hidden" name="id">
                <button formaction="?/updateFavorite">
                    <div class="transition duration-100 ease-in w-6 text-gray-300 hover:text-blue-500">
                        <MdSave/>
                    </div>
                </button>
            </form>

            <div class="flex justify-between w-full h-max items-center">
                <p>Status</p>
                    {#if node.stats.status}
                        <p class="text-green-400 text-lg">OK</p>
                    {:else}
                        <p class="text-red-500 text-lg">KO</p>
                    {/if}
            </div>

            <div class="flex justify-between w-full items-center">
                <p>Adress</p>
                <p class="flex items-center gap-4">
                    <span>{format.ethAddress(node.stats.address)}</span>
                    <button class="transition duration-100 ease-in w-6 text-gray-300 hover:text-blue-500" on:click={async () => {await navigator.clipboard.writeText(node.stats.address)}}>
                        <MdContentCopy/>
                    </button>
                </p>
            </div>
            <div class="flex justify-between w-full items-center">
                <p>To be received</p>
                <p>{node.stats.toBeReceived}</p>
            </div>
            {#if node?.stats?.lastClaim?.id}             
            <div class="flex justify-between w-full items-center">
                <p>Last claim</p>
                <p>{format.getFromNow(node.stats.lastClaim.claimTime)}</p>
            </div>
            {/if}
            <div class="flex justify-between w-full items-center">
                <p>Staked</p>
                <p>{node.stats.staked}</p>
            </div>
            <div class="flex justify-between w-full items-center">
                <p>Sent</p>
                <p>{node.stats.sent}</p>
            </div>
            <div class="flex justify-between w-full items-center">
                <p>Claim count</p>
                <p>{node.stats.claimCount}</p>
            </div>
            <div class="flex justify-between w-full items-center">
                <p>Claim percentage</p>
                <p>{Math.round(node.stats.claimPercentage * 100)}%</p>
            </div>
            <div class="flex justify-between w-full items-center">
                <p>Payouts</p>
                <p>{node.stats.payouts.length}</p>
            </div>
            <div class="flex justify-between w-full items-center">
                <p>PolygonScan</p>
                <a href="{node.stats.polygonScanURL}" target="_blank" rel="noreferrer">Go</a>
            </div>
        </div>
    </Module>
</div>