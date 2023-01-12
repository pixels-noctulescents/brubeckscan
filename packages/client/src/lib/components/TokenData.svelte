<script lang="ts">
    import { format } from "$lib/utils/format";
    import token from "$lib/assets/img/streamr/token.svg";

    export let value:number  = 0;

    const alt = "The DATA token icon"
</script>

<div class="flex gap-2 items-center justify-center">
    <p class="flex items-center font-mono text-md text-neutral-400">{format.numberWithSpaces(value)}</p>
    <img class="w-5" src={token} alt={alt}/>
</div>