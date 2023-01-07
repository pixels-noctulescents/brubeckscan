<script lang="ts">
  import { user } from "$lib/stores/user";
  import { goto } from "$app/navigation";
  $: iconUrl = `https://avatars.dicebear.com/api/identicon/${$user.address}.svg`;
</script>

<div
  on:click={() => goto("/profile")}
  on:keydown={() => goto("/profile")}
  title="Go to Profile"
>
  <img src={iconUrl} alt="A generated icon" />
</div>

<style lang="scss">
  img {
    width: 20px;
    height: 20px;
  }
  div {
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 7px;
    user-select: none;
    transition-duration: 0.3s;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
      background-color: rgb(247, 247, 247);
    }
  }
</style>
