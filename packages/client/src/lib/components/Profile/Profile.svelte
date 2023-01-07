<script lang="ts">
  import { user } from "$lib/stores/user";
</script>

{#if $user}
  <div class="container">
    <div class="info">
      <div>
        <img
          src={`https://avatars.dicebear.com/api/identicon/${$user.address}.svg`}
          alt="A generated icon"
        />
      </div>
      <div class="infos">
        <p>{$user.address}</p>
        <p>Created : {new Date($user.createdAt).toLocaleDateString()}</p>
        <p>Updated : {new Date($user.updatedAt).toLocaleDateString()}</p>
      </div>
    </div>
    <div class="background" />
  </div>
{/if}

<style lang="scss">
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
      width: 50%;
      background-image: linear-gradient(
        to right top,
        #d16ba5,
        #c777b9,
        #ba83ca,
        #aa8fd8,
        #9a9ae1,
        #8aa7ec,
        #79b3f4,
        #69bff8,
        #52cffe,
        #41dfff,
        #46eefa,
        #5ffbf1
      );
    }
  }

  img {
    width: 100px;
  }
</style>
