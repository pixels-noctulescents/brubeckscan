<script lang="ts">
  import type { Favorite } from "@brubeckscan/common/types";
  import Button from "../common/Button.svelte";
  import MdRemoveCircleOutline from "svelte-icons/md/MdRemoveCircleOutline.svelte";
  import { userService } from "$lib/services/user";
  import { nodeService } from "$lib/services/node";
  import { scale, slide } from "svelte/transition";
  import { Pulse } from "svelte-loading-spinners";
  import { network } from "$lib/stores/network";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import { user } from "$lib/stores/user";
  import { theme } from "$lib/stores/theme";

  export let favorite: Favorite;

  async function removeFavorite() {
    const response = await userService.deleteFavorite(favorite.id);
  }

  async function getStats() {
    const stats = await nodeService.fetchStats(favorite.address);
    return stats;
  }

  function getStatus(codes: any) {
    // Network code
    const latestCode = $network.lastRewards[0].code;

    if (codes.length > 0) {
      // Node codes
      const code1 = codes[0].id;
      const code2 = codes[1].id;

      if (latestCode === code1 || latestCode === code2) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  function formatDate(date: string) {
    dayjs.extend(relativeTime);
    const fromNow = dayjs(date).fromNow();
    return fromNow;
  }

  function formatAddress(address: string) {
    const start = address.slice(0, 3);
    const end = address.slice(-3);
    return `${start} ... ${end}`;
  }
</script>

<div class="container favorite" in:scale>
  <img
    src={`https://avatars.dicebear.com/api/identicon/${favorite.address}.svg`}
    alt="A generated icon"
  />
  <p>{favorite.name}</p>
  <p>{formatAddress(favorite.address)}</p>
  <p>{favorite.createdAt}</p>
  <p>{favorite.updatedAt}</p>
  <Button Icon={MdRemoveCircleOutline} action={removeFavorite} type="alert" />
  <div class="stats">
    {#await getStats()}
      <div in:scale class="loader">
        <Pulse
          size="20"
          color={$theme === "dark" ? "white" : "black"}
          unit="px"
          duration="1s"
        />
      </div>
    {:then node}
      {#if node}
        <p in:scale class="status">
          {#if getStatus(node.claimedRewardCodes)}
            <span class="ok">OK</span>
          {:else}
            <span class="ko">KO</span>
          {/if}
        </p>
        <p in:scale>Staked : {Math.round(node?.dataStaked || 0)}</p>
        <p in:scale>
          To Be Received : {Math.round(node?.dataToBeReceived || 0)}
        </p>

        <p in:scale>
          Total rewards : {Math.round(node?.totalRewardsInData || 0)}
        </p>
        <p in:scale>Total Sent : {Math.round(node?.dataSent || 0)}</p>
        {#if node?.claimedRewardCodes[0]?.claimTime}
          <p in:scale>
            Latest claim : {formatDate(node.claimedRewardCodes[0].claimTime)}
          </p>
        {/if}
      {/if}
    {/await}
  </div>
</div>

<style lang="scss">
  .status {
    padding: 8px;
    border-radius: 8px;
    font-size: 10px;
  }
  .ok {
    color: rgb(50, 219, 50);
    text-shadow: 1px 1px 10px rgb(50, 219, 50);
  }
  .ko {
    color: red;
    text-shadow: 1px 1px 10px red;
  }
  .loader {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .container {
    transition-duration: 0.3s;
    padding: 40px;
    width: 100%;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;
    font-size: 14px;
    .stats {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 20px;
    }
    p {
      display: flex;
      align-items: center;
    }
    img {
      width: 20px;
    }
  }
</style>
