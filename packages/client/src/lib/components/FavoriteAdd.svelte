<script lang="ts">
    import Module from "./Module.svelte";
    import { overview, user } from "$lib/stores";
    import { enhance } from "$app/forms";
    import Icon from "@iconify/svelte";
    import Button from "./Button.svelte";

    export let result: any;

    let address = result?.add?.address || "";
</script>

<div class="transition duration-150 ease-in sticky w-full z-40">
    <Module>
        <div class="flex flex-col gap-4 w-full">
            <form class="flex w-full items-center justify-between gap-10" method="POST" use:enhance>
                <input name="user" type="hidden" value={$user?.address}>
                <input name="name" type="hidden" value="Node {$overview?.totals.nodes || 0 + 1}">
                <input class="focus:border-0 focus:bg-slate-50 w-full bg-transparent p-2" name="address" type="text" required bind:value={address} placeholder="Enter a node address">
                {#if result?.add}
                <div class="flex w-full">
                    <p class="text-gray-400">{result.message}</p>
                </div>
                {/if}
                <Button formaction="?/addFavorite">
                    <div class="transition duration-100 ease-in w-10 text-gray-400 hover:text-slate-900">
                        <Icon icon="material-symbols:add" width="40" />
                    </div>
                </Button>
            </form>
        </div>
    </Module>
</div>

<style>
    .sticky {
        top: 100px;
        backdrop-filter: blur(10px);
    }
</style>