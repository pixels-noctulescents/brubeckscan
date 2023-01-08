<script lang="ts">
  import { user } from "$lib/stores/user";

  export let title: string = "Title";

  $: mainColor = $user?.mainColor;
</script>

<div>
  <div
    class="background"
    style:background={`linear-gradient(30deg, #10d44100, ${
      mainColor || "rgb(32,32,32)"
    })`}
  />
  <h1 class="mainTitle">{title}</h1>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    transition-duration: 0.3s;
  }
  h1 {
    width: 50%;
    padding: 20px 40px;
    font-size: 26px;
    border-bottom-right-radius: 8px;
  }
  .background {
    width: 50%;
  }
</style>
