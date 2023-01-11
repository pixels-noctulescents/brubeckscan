<script lang="ts">
    import { overview } from "$lib/stores";
    import Module from "./Module.svelte";
    import Data from "./Data.svelte";
</script>

{#if $overview}
    <div class="w-full">
        <Module>
            <div class="w-full flex justify-between items-center">
                <div class="flex flex-col items-center">
                    <p>Nodes</p>
                    <Data>{$overview.totals.nodes}</Data>
                </div>
                <div class="flex flex-col items-center">
                    <p>To be received</p>
                    <Data>{$overview.totals.toBeReceived}</Data>
                </div>
                <div class="flex flex-col items-center">
                    <p>Sent</p>
                    <Data>{$overview.totals.sent}</Data>
                </div>
                <div class="flex flex-col items-center">
                    <p>Staked</p>
                    <Data>{$overview.totals.staked}</Data>
                </div>
                <div class="flex flex-col items-center">
                    <p>OK %</p>
                    <Data>{$overview.totals.statuses} %</Data>
                </div>
            </div>
        </Module>
    </div>
{/if}