<script lang="ts">
  import { user } from "$lib/stores/user";
  import { userService } from "$lib/services/user";
  import { scale } from "svelte/transition";
  import ThemeSelector from "../layout/Header/ThemeSelector.svelte";

  $: data = $user;
  $: iconUrl = `https://avatars.dicebear.com/api/identicon/${$user.address}.svg`;

  async function handleChange(e: any) {
    try {
      const selectedValue = e.target.value;
      const user = await userService.update(data.address, {
        mainColor: selectedValue,
      });
    } catch (e) {
      console.log(e);
    }
  }
</script>

{#if $user}
  <div class="responsive">
    <div class="container module" in:scale>
      <div class="background">
        <img src={iconUrl} alt="A generated icon" />
      </div>
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
        <div class="stat">
          <div class="label">Main Color</div>
          <div class="value">
            <input
              type="color"
              value={$user.mainColor}
              on:change={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  input {
    width: 20px;
    height: 20px;
  }
  .container {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 20px;
    .stats {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;
      padding: 10px;
      .stat {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .background {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;
    }
  }

  img {
    width: 50px;
  }
</style>
