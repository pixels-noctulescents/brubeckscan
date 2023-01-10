<script lang="ts">
  import { user } from "$lib/stores";
  import ThemeSelector from "../common/ThemeSelector.svelte";
</script>

{#if $user}
  <div class="responsive">
    <div class="container module">
      <div class="stats">
        <div class="stat">
          <div class="label">Address</div>
          <div class="value">{$user.address}</div>
        </div>
        <div class="stat">
          <div class="label">Created At</div>
          <div class="value">
            {new Date($user.createdAt).toLocaleDateString()}
          </div>
        </div>
        <div class="stat">
          <div class="label">Updated at</div>
          <div class="value">
            {new Date($user.updatedAt).toLocaleDateString()}
          </div>
        </div>
        <div class="stat">
          <div class="label">Theme</div>
          <div class="value">
            <ThemeSelector />
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .container {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 20px;
  }

  .container .stats {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    padding: 10px;
  }
  .container .stats .stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
