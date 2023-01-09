<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#if data.overview}
  <div>
    {data.userAddress}
    {data.overview.totals.nodes}
  </div>
{/if}

<style lang="scss"></style>
