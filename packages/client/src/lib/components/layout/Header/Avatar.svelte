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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition-duration: 0.3s;
    border-radius: 5px;
    filter: grayscale(1);
    &:hover {
      cursor: pointer;
      filter: grayscale(0);
    }
  }
</style>
