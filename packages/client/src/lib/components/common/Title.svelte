<script lang="ts">
  export let title: string = "Title";
</script>

<div>
  <div class="background" />
  <h1>{title}</h1>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
  }
  h1 {
    width: 50%;
    background-color: white;
    padding: 20px 40px;
    color: var(--dark);
    font-size: 26px;
    border-bottom-right-radius: 8px;
  }
  .background {
    width: 50%;
    background: linear-gradient(to right, #10d44100, var(--main));
  }
</style>
