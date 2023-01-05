<script lang="ts">
  import { Shadow } from "svelte-loading-spinners";
</script>

<td colspan="7">
  <div class="loader">
    <Shadow size="15" color="#FF3E00" unit="px" duration="2s" />
  </div>
</td>

<style lang="scss">
  td {
    height: 100%;
  }

  .loader {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
