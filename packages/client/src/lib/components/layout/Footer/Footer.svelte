<script lang="ts">
  import Links from "./Links.svelte";
  import Socials from "./Socials.svelte";
</script>

<footer>
  <Links />
  <Socials />
</footer>

<style lang="scss">
  footer {
    padding: 60px;
    min-height: 200px;
    background-color: rgb(32, 32, 32);
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 60px;
  }
</style>
