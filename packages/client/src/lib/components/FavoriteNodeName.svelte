<script lang="ts">
    import { enhance } from "$app/forms";
    import Icon from '@iconify/svelte';
    import type { FavoritesOverviewNode } from "@brubeckscan/common/types/favoritesOverview";

    export let node: FavoritesOverviewNode;

    let isEditing = false;
    let newName = node.db.name;
</script>

<form class="flex justify-between w-full mb-4" method="POST" use:enhance={() => {
    isEditing = false;
}}>
    <input class="w-4/6" value={node.db.name} type="hidden" name="baseName">
    <input value={node.db.id} type="hidden" name="id">
    
    <div class="w-full flex gap-2">
        {#if !isEditing}
            <p class="flex w-full text-xl">{node.db.name}</p>
        {:else}
            <input class="w-full bg-neutral-200 p-2 font-mono"  bind:value={newName} type="text" name="newName">
        {/if}
    
        {#if !isEditing}
            <button  on:click={() => isEditing = !isEditing}>
                <div class="transition duration-100 ease-in w-6 text-gray-300 hover:text-blue-500">
                    <Icon icon="material-symbols:edit" width="26" />
                </div>
            </button>
        {:else}
            <button formaction="?/updateFavorite">
                <div class="transition duration-100 ease-in w-6 text-gray-300 hover:text-blue-500">
                    <Icon icon="material-symbols:save" width="26" />
                </div>
            </button>
        {/if}
    </div>
</form>