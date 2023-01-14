<script lang="ts">
    import { overview } from "$lib/stores";
    import type { ActionData } from "./$types";
    import FavoriteTotals from "$lib/components/FavoriteTotals.svelte";
    import FavoriteNode from "$lib/components/FavoriteNode.svelte";
    import FavoriteAdd from "$lib/components/FavoriteAdd.svelte";

    export let form: ActionData;
</script>

<div class="flex-wrap p-8 flex w-full flex-col gap-10 max-w-screen-lg lg:p-0 lg:pt-20 lg:pb-40">
    <FavoriteAdd result={form}></FavoriteAdd>
    <FavoriteTotals></FavoriteTotals>
    {#if $overview}
        <div class="nodeContainer flex w-full flex-wrap start items-stretch gap-4">
            {#each $overview.favorites as node (node.db.id) }
                    <div class="w-full node flex">
                        <FavoriteNode {node}/>
                    </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .node {
        max-width: calc(50% - 8px);
    }
    @media (max-width: 1025px)  {
        .node {
            max-width: unset;
        }
    }
</style>