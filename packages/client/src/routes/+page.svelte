<script lang="ts">
  import type { PageData } from "./$types";
  import { count } from "../lib/stores/networkStats";
  export let data: PageData;
</script>

<div>{data.title}</div>
<div>{$count}</div>
<button on:click={() => $count++}>+1</button>
<button on:click={() => ($count = 0)}>reset</button>
<button on:click={() => $count--}>-1</button>
