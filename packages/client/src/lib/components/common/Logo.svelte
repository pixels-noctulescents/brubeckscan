<script lang="ts">
  import logo from "$lib/assets/streamr/logo.svg";

  const LOGO_ALT = "The Streamr Logo";
  const STREAMR_URL = "https://streamr.network";
</script>

<div>
  <a href={STREAMR_URL} target="_blank" rel="noreferrer">
    <img src={logo} alt={LOGO_ALT} />
  </a>
  <p>BRUBECKSCAN</p>
</div>

<style lang="scss">
  div {
    display: flex;
    gap: 20px;
  }
  p {
    font-weight: 400;
    color: rgb(66, 66, 66);
    letter-spacing: -5px;
    font-size: 22px;
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
