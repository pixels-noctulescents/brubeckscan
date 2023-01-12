<script lang="ts">
    import Module from "$lib/components/Module.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    const apiEndpoint = "https://brubeckscan.app/api/nodes/"
</script>

<div class="flex flex-col w-full items-center">
    <div class="w-full max-w-screen-lg">
        <Module>
            <div class="w-full flex flex-col gap-10">
                <div class="text-2xl flex flex-col gap-4">
                    <h3 class="text-3xl">Request</h3>
                    <div class="flex gap-4">
                        <p class="text-green-400">GET</p>
                        <div class="flex w-full">
                            <p>{apiEndpoint}</p>
                            <p class="text-blue-300">[nodeEthereumAddress]</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 class="text-3xl">TS Types</h4>
                </div>
                <div class="flex flex-col gap-4">
                    <h3 class="text-3xl">Response</h3>
                    <div class="w-full flex gap-4">
                        <div class="flex w-full">
                            <pre class="text-xs w-full bg-slate-700 text-white font-mono p-4 rounded-md">{@html JSON.stringify(data.response, undefined, 2)}</pre>
                        </div>
                    </div>
                </div>
            </div>  

        </Module>
    </div>
</div>

