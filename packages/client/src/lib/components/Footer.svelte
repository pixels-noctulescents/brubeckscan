<script lang="ts">
  import Links from "$lib/components/FooterLinks.svelte";
  import Socials from "./FooterSocials.svelte";
</script>

<div class="flex justify-center items-center w-full py-10 xl:py-20 bg-midnight text-white">
  <footer class="flex w-full flex-col gap-20 xl:max-w-screen-lg">
    <Links />
    <Socials />
  </footer>
</div>
