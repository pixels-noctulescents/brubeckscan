<script lang="ts">
  import { user } from "$lib/stores/user";
  $: iconUrl = `https://avatars.dicebear.com/api/identicon/${$user.address}.svg`;
</script>

<div>
  <img src={iconUrl} alt="A generated icon" />
</div>

<style lang="scss">
  img {
    width: 25px;
    height: 25px;
  }
  div {
    cursor: pointer;
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
