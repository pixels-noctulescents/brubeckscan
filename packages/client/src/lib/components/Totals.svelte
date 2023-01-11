<script lang="ts">
    import { overview } from "$lib/stores";
    import Module from "./Module.svelte";
</script>

{#if $overview}
    <div class="w-full">
        <Module>
            <div class="w-full flex flex-col">
                <div class="flex flex-row justify-between">
                    <p>Nodes</p>
                    <p>{$overview.totals.nodes}</p>
                </div>
                <div class="flex flex-row justify-between">
                    <p>To be received</p>
                    <p>{$overview.totals.toBeReceived}</p>
                </div>
                <div class="flex flex-row justify-between">
                    <p>Sent</p>
                    <p>{$overview.totals.sent}</p>
                </div>
                <div class="flex flex-row justify-between">
                    <p>Staked</p>
                    <p>{$overview.totals.staked}</p>
                </div>
                <div class="flex flex-row justify-between">
                    <p>OK %</p>
                    <p>{$overview.totals.statuses} %</p>
                </div>
            </div>
        </Module>
    </div>
{/if}