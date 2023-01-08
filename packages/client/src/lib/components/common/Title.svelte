<script lang="ts">
  export let title: string = "Title";
</script>

<div class="title">
  <h1>{title}</h1>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    transition-duration: 0.3s;
  }
  h1 {
    padding: 20px;
    border-bottom-right-radius: 8px;
  }
  .title {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
