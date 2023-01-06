<script lang="ts">
  export let action: any;
  export let Icon: any;
  export let width: string = "30px";
  export let title: string = "Button";

  async function main() {
    await action();
  }
</script>

<button on:click={main} on:keydown={action} style:width {title}>
  <Icon />
</button>

<style lang="scss">
  button {
    display: flex;
    padding: 3px;
    color: lightgray;
    transition-duration: 0.3s;
    border: 1px solid transparent;
    border-radius: 5px;
    box-shadow: 1px 1px var transparent;
    &:hover {
      cursor: pointer;
      color: var(--dark);
      border-color: var(--dark);
      box-shadow: 1px 1px var(--dark);
    }
  }
</style>
