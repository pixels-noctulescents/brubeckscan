<script lang="ts">
  import type { Favorite } from "@brubeckscan/common/types";
  import FavoriteService from "$lib/services/favorite";
  import Button from "$lib/components/common/Button.svelte";
  import MdRemoveCircleOutline from "svelte-icons/md/MdRemoveCircleOutline.svelte";

  export let favorite: Favorite;

  async function removeFavorite() {
    try {
      const response = await FavoriteService.remove(favorite.id);

      return response;
    } catch (e) {
      console.log(e);
    }
  }
</script>

<div>
  <Button Icon={MdRemoveCircleOutline} action={removeFavorite} type="alert" />
</div>

<style lang="scss"></style>
