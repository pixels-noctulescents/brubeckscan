<script lang="ts">
    import Module from "./Module.svelte";
    import { overview, user } from "$lib/stores";
    import { enhance } from "$app/forms";
    import MdAdd from 'svelte-icons/md/MdAdd.svelte'

    export let result: any;

    let address = result?.add?.address || "";
</script>

<div class="sticky backdrop-opacity-4 w-full">
    <Module>
        <div class="flex flex-col gap-4 w-full">
            {#if result?.add}
                <p class="text-gray-300">{result.message}</p>
            {/if}
            <form class="flex w-full justify-between gap-10" method="POST" use:enhance>
                <input name="user" type="hidden" value={$user?.address}>
                <input name="name" type="hidden" value="Node {$overview?.totals.nodes || 0 + 1}">
                <input class="w-full"name="address" type="text" bind:value={address} placeholder="Enter a node address">
                <button formaction="?/addFavorite">
                    <div class="transition duration-100 ease-in w-10 text-gray-400 hover:text-blue-500">
                        <MdAdd/>
                    </div>
                </button>
            </form>
        </div>
    </Module>
</div>

<style>
    div {
        top: 120px;
    }
</style>