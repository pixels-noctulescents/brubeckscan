<script lang="ts">
    import { overview } from "$lib/stores";
    import Totals from "$lib/components/Totals.svelte";
    import Node from "$lib/components/Node.svelte";
    import AddFavorite from "$lib/components/AddFavorite.svelte";
</script>

<div class="flex w-full flex-col gap-10">
    <AddFavorite></AddFavorite>
    <Totals></Totals>
    {#if $overview}
        <div class="flex flex-wrap gap-8 justify-start items-stretch">
            {#each $overview.favorites as node (node.db.id) }
                    <Node {node}/>
            {/each}
        </div>
    {/if}
</div>
