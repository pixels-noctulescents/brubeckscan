<script lang="ts">
  import { user } from "$lib/stores/user";
</script>

<img
  src={`https://avatars.dicebear.com/api/identicon/${$user.address}.svg`}
  alt="A generated icon"
/>

<style lang="scss">
  img {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    filter: grayscale(1);
    transition-duration: 0.3s;
    &:hover {
      filter: grayscale(0);
    }
  }
</style>
