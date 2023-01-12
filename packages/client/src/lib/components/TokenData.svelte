<script lang="ts">
    import { format } from "$lib/utils/format";
    import token from "$lib/assets/img/streamr/token.svg";

    export let value:number  = 0;

    const alt = "The DATA token icon"
</script>

<div class="flex gap-2">
    <p class="font-mono text-md">{format.numberWithSpaces(value)}</p>
    <img class="w-5" src={token} alt={alt}/>
</div>