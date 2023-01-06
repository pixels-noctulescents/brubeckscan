<script lang="ts"></script>

<svelte:head>
  <title>BrubeckScan | Documentation</title>
</svelte:head>

<div>
  <!-- Title -->
  <h1>Documentation</h1>

  <!-- Bundle process-->
  <h2>Bundle process</h2>
  <p>
    Bundle process is executed everytime a new client is served in the browser.
  </p>
  <br />
  <ul>
    <li>1. Check if user has MetaMask</li>
    <li>2. Check if user has active connection. If "yes", log user.</li>
    <li>3. Subscribe to websockets.</li>
    <li>4. Fetch network data & update "network" store</li>
  </ul>

  <!-- Login process -->
  <h3 id="login">Login process</h3>
  <ul>
    <li>3. Fetch user data & update "user" store</li>
  </ul>
</div>

<style lang="scss">
  div {
    width: 100%;
  }
</style>
