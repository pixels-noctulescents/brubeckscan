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
    width: 15px;
    height: 15px;
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
    filter: grayscale(1);
    &:hover {
      cursor: pointer;
      border: 1px solid var(--dark);
      box-shadow: 1px 1px var(--dark);
      filter: grayscale(0);
    }
  }
</style>
