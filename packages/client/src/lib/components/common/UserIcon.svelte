<script lang="ts">
  import { user } from "$lib/stores/user";
  const iconUrl = `https://avatars.dicebear.com/api/identicon/${$user.address}.svg`;
</script>

<div>
  <img src={iconUrl} alt="A generated icon" />
</div>

<style lang="scss">
  img {
    width: 40px;
    height: 40px;
  }
  div {
    cursor: pointer;
    user-select: none;
  }
</style>
