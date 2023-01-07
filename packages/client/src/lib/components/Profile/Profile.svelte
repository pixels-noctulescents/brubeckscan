<script lang="ts">
  import { user } from "$lib/stores/user";
  import { userService } from "$lib/services/user";

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
  <div class="container">
    <div class="background">
      <img src={iconUrl} alt="A generated icon" />
    </div>
    <div class="info">
      <p class="colorContainer">
        <input type="color" value={$user.mainColor} on:change={handleChange} />
      </p>
      <div class="infos">
        <p>{$user.address}</p>
        <p>Created : {new Date($user.createdAt).toLocaleDateString()}</p>
        <p>Updated : {new Date($user.updatedAt).toLocaleDateString()}</p>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .colorContainer {
    display: flex;
    align-items: center;
    gap: 20px;
    border: none;
  }
  .avatar {
    width: 20px;
  }
  input {
    width: 60px;
    height: 60px;
  }
  .container {
    display: flex;
    flex-direction: row;
    background-color: white;
    width: 100%;
    max-width: 1200px;
    .infos {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .info {
      width: 50%;
      padding: 50px;
      display: flex;
      flex-direction: row;
      gap: 30px;
    }
    .background {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
    }
  }

  img {
    width: 50px;
  }
</style>
