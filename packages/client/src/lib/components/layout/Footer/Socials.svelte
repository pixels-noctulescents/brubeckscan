<script lang="ts">
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
  import FaDiscord from "svelte-icons/fa/FaDiscord.svelte";
  import FaTwitter from "svelte-icons/fa/FaTwitter.svelte";
  import FaRedditSquare from "svelte-icons/fa/FaRedditSquare.svelte";
  import FaTrello from "svelte-icons/fa/FaTrello.svelte";
  import FaYoutube from "svelte-icons/fa/FaYoutube.svelte";
  import FaMedium from "svelte-icons/fa/FaMedium.svelte";
  import FaLinkedinIn from "svelte-icons/fa/FaLinkedinIn.svelte";
</script>

<div class="container">
  <a href="https://github.com/streamr-dev" target="_blank" rel="noreferrer">
    <div class="icon">
      <FaGithub />
    </div>
  </a>
  <a
    href="https://discord.com/invite/gZAm8P7hK8"
    target="_blank"
    rel="noreferrer"
  >
    <div class="icon">
      <FaDiscord />
    </div>
  </a>
  <a href="https://twitter.com/streamr" target="_blank" rel="noreferrer">
    <div class="icon">
      <FaTwitter />
    </div>
  </a>
  <a href="https://www.reddit.com/r/streamr" target="_blank" rel="noreferrer">
    <div class="icon">
      <FaRedditSquare />
    </div>
  </a>
  <a
    href="https://trello.com/b/nQQ9Zwvj/streamr-milestone-2"
    target="_blank"
    rel="noreferrer"
  >
    <div class="icon">
      <FaTrello />
    </div>
  </a>
  <a
    href="https://www.youtube.com/channel/UCGWEA61RueG-9DV53s-ZyJQ"
    target="_blank"
    rel="noreferrer"
  >
    <div class="icon">
      <FaYoutube />
    </div>
  </a>
  <a href="https://medium.com/streamrblog" target="_blank" rel="noreferrer">
    <div class="icon">
      <FaMedium />
    </div>
  </a>
  <a
    href="https://www.linkedin.com/company/streamr-network/"
    target="_blank"
    rel="noreferrer"
  >
    <div class="icon">
      <FaLinkedinIn />
    </div>
  </a>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    padding-top: 20px;
  }
  .icon {
    width: 25px;
  }
</style>
