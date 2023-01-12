<script lang="ts">
    import { overview } from "$lib/stores";
    import Module from "./Module.svelte";
    import FavoritesDoughnut from "$lib/components/FavoritesDoughnut.svelte";
</script>

{#if $overview}
<div class="flex items-stretch gap-8 max-w-screen-lg">
    <div class="w-full">
        <Module>
            <div class="flex grow flex-col justify-between">
                <h2 class="text-5xl mb-10">Total</h2>
                <div class="flex flex-row justify-between">
                    <p class="text-gray-600 text-lg">Nodes</p>
                    <p class="text-lg">{$overview.totals.nodes}</p>
                </div>
                <div class="flex flex-row justify-between">
                    <p class="text-gray-600 text-lg">To be received</p>
                    <p class="text-lg">{$overview.totals.toBeReceived}</p>
                </div>
                <div class="flex flex-row justify-between">
                    <p class="text-gray-600 text-lg">Sent</p>
                    <p class="text-lg">{$overview.totals.sent}</p>
                </div>
                <div class="flex flex-row justify-between">
                    <p class="text-gray-600 text-lg">Staked</p>
                    <p class="text-lg">{$overview.totals.staked}</p>
                </div>
            </div>
        </Module>
    </div>
    <div class="flex w-52">
        <FavoritesDoughnut/>
    </div>
</div>
{/if}