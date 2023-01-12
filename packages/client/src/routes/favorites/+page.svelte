<script lang="ts">
    import { overview } from "$lib/stores";
    import type { ActionData, PageData } from "./$types";
    import FavoriteTotals from "$lib/components/FavoriteTotals.svelte";
    import FavoriteNode from "$lib/components/FavoriteNode.svelte";
    import FavoriteAdd from "$lib/components/FavoriteAdd.svelte";

    export let form: ActionData;
</script>

<div class="flex w-full flex-col gap-10 max-w-screen-lg">
    <FavoriteAdd result={form}></FavoriteAdd>
    <FavoriteTotals></FavoriteTotals>
    {#if $overview}
        <div class="flex flex-wrap gap-8 justify-start items-stretch">
            {#each $overview.favorites as node (node.db.id) }
                    <FavoriteNode {node}/>
            {/each}
        </div>
    {/if}
</div>
