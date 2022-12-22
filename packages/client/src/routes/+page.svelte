<div class="landing">
  <div class="left">Left</div>
  <div class="right">Right</div>
</div>

<style lang="scss">
  .landing {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 65px);
    width: 100%;
  }

  .left {
    background-color: rgb(18, 22, 34);
    color: white;
    flex-grow: 1;
  }

  .right {
    background-color: whitesmoke;
    flex-grow: 1;
  }
</style>
