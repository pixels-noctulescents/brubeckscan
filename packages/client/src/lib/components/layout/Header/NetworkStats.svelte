<script lang="ts">
  import { network } from "$lib/stores/network";
  import { usersCount } from "$lib/stores/usersCount";
  import MdPerson from "svelte-icons/md/MdPerson.svelte";
</script>

<div class="container">
  <p>Latest reward code | {$network.lastRewards[0].code}</p>
  <div class="stats">
    <div>
      {$usersCount}
    </div>
    <div class="icon">
      <MdPerson />
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }

  .stats {
    display: flex;
    gap: 5px;
  }
  .icon {
    width: 15px;
  }
</style>
