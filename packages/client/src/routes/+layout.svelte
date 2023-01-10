<script lang="ts">
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Title from "$lib/components/Title.svelte";
</script>

<div class="flex flex-col justify-between items-center min-h-screen">
  <Header />
  <Title/>
  <main class="flex flex-col grow w-full items-center bg-slate-200 min-h-[600px]">
    <div class="flex w-full p-5 xl:max-w-screen-xl xl:px-0 py-10">
      <slot />
    </div>
  </main>
  <Footer />
</div>