<script lang="ts">
  import type { ButtonType } from "@brubeckscan/common/types";

  export let action: any;
  export let Icon: any;
  export let width: string = "30px";
  export let title: string = "Button";
  export let type: ButtonType = "neutral";

  async function main() {
    try {
      await action();
    } catch (e) {
      console.log(e);
    }
  }
</script>

<button on:click={main} style:width {title} class={type}>
  <svelte:component this={Icon} />
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
      box-shadow: 1px 1px var(--dark);
    }
  }

  .neutral:hover {
    color: var(--dark);
    border-color: var(--dark);
  }

  .alert:hover {
    color: var(--alert);
    border-color: var(--alert);
  }

  .action:hover {
    color: var(--main);
    border-color: var(--main);
  }
</style>
