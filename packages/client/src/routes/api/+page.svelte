<script lang="ts">
    import Module from "$lib/components/Module.svelte";
    import type { PageData } from "./$types";
    import Icon from '@iconify/svelte';

    export let data: PageData;

    const apiEndpoint = "https://brubeckscan.app/api/nodes/"
</script>

<div class="px-8 lg:px-0 flex flex-col w-full items-center pt-20 pb-40">
    <div class="w-full max-w-screen-lg">
        <Module>
            <div class="w-full flex flex-col gap-4">
                <div class="text-2xl flex flex-col gap-4">
                    <h3 class="text-3xl">Format</h3>
                    <a class="text-md" href="https://github.com/omniti-labs/jsend">JSend</a>
                    <h3 class="text-3xl">Request</h3>
                    <div class="text-sm flex gap-4 bg-slate-700 p-4 rounded-md text-white font-mono items-center">
                        <p class="text-green-400">GET</p>
                        <div class="flex w-full">
                            <p class="text-blue-300">{apiEndpoint}<span>[nodeEthereumAddress]</span></p>
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <div class="flex flex-col gap-4">
                    <h3 class="text-3xl flex items-center gap-2">Response   
                        <div>
                        <a href="https://github.com/adamphivo/brubeckAPI/blob/main/packages/common/types/node/index.d.ts">
                            <Icon icon="logos:typescript-icon" width="26" />
                        </a>
                        </div>
                    </h3>
                    <div class="w-full flex gap-4">
                        <div class="flex w-full">
                            <pre class="text-[10px] w-full bg-slate-700 text-white font-mono p-4 rounded-md">{@html JSON.stringify(data.response, undefined, 2)}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </Module>
    </div>
</div>

