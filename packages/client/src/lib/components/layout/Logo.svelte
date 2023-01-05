<script lang="ts">
  import logo from "$lib/assets/streamr/logo.svg";

  const LOGO_ALT = "The Streamr Logo";
  const STREAMR_URL = "https://streamr.network";
</script>

<a href={STREAMR_URL} target="_blank" rel="noreferrer">
  <img src={logo} alt={LOGO_ALT} />
</a>

<style lang="scss">
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 25px;
  }
</style>
