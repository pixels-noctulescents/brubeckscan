<script lang="ts">
  import Links from "$lib/components/FooterLinks.svelte";
  import Socials from "./FooterSocials.svelte";
</script>

<div class="flex justify-center items-center w-full py-10 xl:py-20">
  <footer class="flex w-full flex-col p-5 gap-20 xl:max-w-screen-xl">
    <Links />
    <Socials />
  </footer>
</div>

<style>
  div {
    background-color: rgb(13, 21, 134);
    color: whitesmoke;
  }
</style>
