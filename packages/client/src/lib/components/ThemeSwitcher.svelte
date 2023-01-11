<script lang="ts">
  import Button from "./Button.svelte";
  import UserService from "$lib/services/User";
  import { user, currentTheme } from "$lib/stores";

  async function select() {
    if ($currentTheme === "dark") {
      currentTheme.set("light");
      if ($user) {
        const update = await UserService.update(`${$user.address}`, {
          theme: "light",
        });
      }
    } else {
      currentTheme.set("dark");
      if ($user) {
        const update = await UserService.update(`${$user.address}`, {
          theme: "dark",
        });
      }
    }
  }
</script>

<div>
  <Button handle={select}>
    <p>{$currentTheme === "dark" ? "light" : "dark"}</p>
  </Button>
</div>
