<script lang="ts">
  import { enhance } from "$app/forms";

  export let id: string;
</script>

<form method="POST" use:enhance>
  <input type="hidden" value={id} name="id" />
  <button formaction="?/deleteFavorite">Delete</button>
</form>

<style></style>
