<script lang="ts">
  import logo from "$lib/assets/streamr/logo.svg";

  const LOGO_ALT = "The Streamr Logo";
  const STREAMR_URL = "https://streamr.network";
</script>

<div>
  <a href={STREAMR_URL} target="_blank" rel="noreferrer">
    <img src={logo} alt={LOGO_ALT} />
  </a>
  <p class="logoText">BRUBECKSCAN</p>
</div>

<style lang="scss">
  div {
    display: flex;
    gap: 20px;
  }
  p {
    font-weight: 400;
    letter-spacing: -5px;
    font-size: 22px;
    transition-duration: 0.3s;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 25px;
  }
</style>
