<script lang="ts">
  import type { ButtonType } from "@brubeckscan/common/types";

  export let action: any;
  export let Icon: any;
  export let width: string = "30px";
  export let title: string = "Button";
  export let type: ButtonType = "neutral";
  export let active: boolean = false;

  async function main() {
    try {
      await action();
    } catch (e) {
      console.log(e);
    }
  }
</script>

<button
  on:click={main}
  style:width
  {title}
  class={`${type} ${active ? "active" : ""}`}
>
  <svelte:component this={Icon} />
</button>

<style>
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    color: lightgray;
    transition-duration: 0.3s;
    border: 1px solid transparent;
    border-radius: 5px;
    box-shadow: 1px 1px var transparent;
  }

  button:hover {
    cursor: pointer;
    box-shadow: 1px 1px var(--dark);
  }
</style>
