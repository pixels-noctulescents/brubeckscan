<script lang="ts">
    import { format } from "$lib/utils/format";
    import Module from "./Module.svelte";
    import type { Favorite } from "@brubeckscan/common/types/overview";
    import { enhance } from "$app/forms";

    export let node: Favorite;
    let isEditing: boolean = false;
    let newName = node.db.name;
</script>


<div class="sm:w-full max-w-xs flex flex-col">
    <Module>
        <div class="flex flex-col w-72 h-max">
            <div class="flex justify-between w-full h-max">
                <p>Status</p>
                    {#if node.stats.status}
                        <p class="ok">Ok</p>
                    {:else}
                        <p class="ko">Ko</p>
                    {/if}
            </div>
            <div class="flex justify-between w-full">
                <p>Name</p>
                <p>{node.db.name}</p>
            </div>
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
            <div class="flex justify-between w-full">
                {#if isEditing}
                <form method="POST" use:enhance>
                    <input value={node.db.id} type="hidden" name="newName">
                    <input value={node.db.id} type="hidden" name="id">
                    <button formaction="?/saveFavorite">Save</button>
                </form>
                {:else}
                    <button on:click={() => isEditing = !isEditing}>Edit</button>
                {/if}

                <!-- Delete -->
                <form method="POST" use:enhance>
                    <input value={node.db.id} type="hidden" name="id">
                    <button formaction="?/deleteFavorite">Delete</button>
                </form>
            </div>
        </div>
    </Module>
</div>

<style>
    .ok {
        color: green;
    }
    .ko {
        color: red;
    }
</style>