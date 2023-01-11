<script lang="ts">
    import { enhance } from "$app/forms";
    import { format } from "$lib/utils/format";
    import Module from "./Module.svelte";
    import type { Favorite } from "@brubeckscan/common/types/overview";
    import { scale } from "svelte/transition";

    export let node: Favorite;
</script>


<div class="sm:w-full max-w-xs flex flex-col" in:scale>
    <Module>
        <div class="flex flex-col w-72 h-max">
            <div class="flex justify-between w-full h-max">
                <p>Status</p>
                    {#if node.stats.status}
                        <p class="text-green-400">Ok</p>
                    {:else}
                        <p class="text-red-500">Ko</p>
                    {/if}
            </div>

            <form class="flex justify-between w-full" method="POST" use:enhance>
                <input class="w-4/6" value={node.db.name} type="hidden" name="baseName">               
                <input class="w-4/6" value={node.db.name} type="text" name="newName">
                <input value={node.db.id} type="hidden" name="id">
                <button formaction="?/updateFavorite">Save</button>
            </form>

            <div class="flex justify-between w-full">
                <p>Adress</p>
                <p>{format.ethAddress(node.stats.address)}</p>
            </div>
            <div class="flex justify-between w-full">
                <p>To be received</p>
                <p>{node.stats.toBeReceived}</p>
            </div>
            {#if node?.stats?.lastClaim?.id}             
            <div class="flex justify-between w-full">
                <p>Last claim</p>
                <p>{format.getFromNow(node.stats.lastClaim.claimTime)}</p>
            </div>
            {/if}
            <div class="flex justify-between w-full">
                <p>Staked</p>
                <p>{node.stats.staked}</p>
            </div>
            <div class="flex justify-between w-full">
                <p>Sent</p>
                <p>{node.stats.sent}</p>
            </div>
            <div class="flex justify-between w-full">
                <p>Claim count</p>
                <p>{node.stats.claimCount}</p>
            </div>
            <div class="flex justify-between w-full">
                <p>Claim percentage</p>
                <p>{Math.round(node.stats.claimPercentage * 100)}%</p>
            </div>
            <div class="flex justify-between w-full">
                <p>Payouts</p>
                <p>{node.stats.payouts.length}</p>
            </div>
            <div class="flex justify-between w-full">
                <p>PolygonScan</p>
                <a href="{node.stats.polygonScanURL}" target="_blank" rel="noreferrer">Go</a>
            </div>
            <form class="flex justify-between w-full" method="POST" use:enhance>               
                <input value={node.db.id} type="hidden" name="id">
                <button formaction="?/deleteFavorite">Delete</button>
            </form>
        </div>
    </Module>
</div>