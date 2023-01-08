<script lang="ts">
  export let title: string = "Title";
  export let subTitle: string = "";
  import { slide } from "svelte/transition";
</script>

<div class="title" in:slide>
  <h1>{title}</h1>
  <h4>{subTitle}</h4>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    transition-duration: 0.3s;
    gap: 10px;
    transition-duration: 0.3s;
  }
  h1 {
    border-bottom-right-radius: 8px;
    letter-spacing: -7px;
    box-shadow: none;
    backdrop-filter: saturate(180%) blur(5px);
    z-index: 1;
    transition-duration: 0.3s;
  }

  h4 {
    backdrop-filter: saturate(180%) blur(5px);
    transition-duration: 0.3s;
    z-index: 1;
  }
  .title {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    margin-bottom: 20px;
    background-size: cover;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='400' preserveAspectRatio='none' viewBox='0 0 1440 400'%3e%3cg mask='url(%26quot%3b%23SvgjsMask27700%26quot%3b)' fill='none'%3e%3ccircle r='33.333333333333336' cx='1074.13' cy='201.86' fill='%23e73635'%3e%3c/circle%3e%3ccircle r='33.333333333333336' cx='1310.73' cy='132.33' stroke='%23e73635' stroke-width='1.85' stroke-dasharray='3%2c 2'%3e%3c/circle%3e%3ccircle r='33.333333333333336' cx='80.36' cy='260.42' stroke='%23e73635' stroke-width='1.6'%3e%3c/circle%3e%3crect width='86' height='86' clip-path='url(%26quot%3b%23SvgjsClipPath27701%26quot%3b)' x='13.92' y='62.71' fill='url(%23SvgjsPattern27702)' transform='rotate(9.37%2c 56.92%2c 105.71)'%3e%3c/rect%3e%3cpath d='M1364.4499999999998 366.71 L1295.1399999999999 272.19L1373.5048052350587 275.74019476494107z' fill='rgba(23%2c 92%2c 169%2c 1)'%3e%3c/path%3e%3crect width='108' height='108' clip-path='url(%26quot%3b%23SvgjsClipPath27703%26quot%3b)' x='1089.23' y='107.82' fill='url(%23SvgjsPattern27704)' transform='rotate(83.99%2c 1143.23%2c 161.82)'%3e%3c/rect%3e%3crect width='217.92000000000002' height='217.92000000000002' clip-path='url(%26quot%3b%23SvgjsClipPath27705%26quot%3b)' x='910.01' y='-32.16' fill='url(%23SvgjsPattern27706)' transform='rotate(136.23%2c 1018.97%2c 76.8)'%3e%3c/rect%3e%3cpath d='M349.27 157.11a5.6 5.6 0 1 0-9.8-5.41 5.6 5.6 0 1 0 9.8 5.41zM335.26 149.39a5.6 5.6 0 1 0-9.8-5.41 5.6 5.6 0 1 0 9.8 5.41zM321.25 141.66a5.6 5.6 0 1 0-9.81-5.41 5.6 5.6 0 1 0 9.81 5.41zM307.24 133.94a5.6 5.6 0 1 0-9.81-5.41 5.6 5.6 0 1 0 9.81 5.41z' fill='rgba(23%2c 92%2c 169%2c 1)'%3e%3c/path%3e%3cpath d='M1077.95 108.27a5.6 5.6 0 1 0 9.87-5.3 5.6 5.6 0 1 0-9.87 5.3zM1092.04 100.7a5.6 5.6 0 1 0 9.87-5.3 5.6 5.6 0 1 0-9.87 5.3zM1106.14 93.12a5.6 5.6 0 1 0 9.86-5.3 5.6 5.6 0 1 0-9.86 5.3zM1120.23 85.55a5.6 5.6 0 1 0 9.87-5.3 5.6 5.6 0 1 0-9.87 5.3zM1057.34 137.52a5.6 5.6 0 1 0 9.87-5.3 5.6 5.6 0 1 0-9.87 5.3zM1071.43 129.94a5.6 5.6 0 1 0 9.87-5.3 5.6 5.6 0 1 0-9.87 5.3zM1085.53 122.37a5.6 5.6 0 1 0 9.86-5.31 5.6 5.6 0 1 0-9.86 5.31zM1099.62 114.79a5.6 5.6 0 1 0 9.86-5.3 5.6 5.6 0 1 0-9.86 5.3zM1036.73 166.76a5.6 5.6 0 1 0 9.87-5.3 5.6 5.6 0 1 0-9.87 5.3zM1050.82 159.19a5.6 5.6 0 1 0 9.87-5.31 5.6 5.6 0 1 0-9.87 5.31zM1064.92 151.61a5.6 5.6 0 1 0 9.86-5.3 5.6 5.6 0 1 0-9.86 5.3zM1079.01 144.04a5.6 5.6 0 1 0 9.86-5.31 5.6 5.6 0 1 0-9.86 5.31z' fill='rgba(23%2c 92%2c 169%2c 1)'%3e%3c/path%3e%3crect width='216' height='216' clip-path='url(%26quot%3b%23SvgjsClipPath27707%26quot%3b)' x='826.9' y='90.27' fill='url(%23SvgjsPattern27708)' transform='rotate(216.81%2c 934.9%2c 198.27)'%3e%3c/rect%3e%3ccircle r='47.10742185594258' cx='799' cy='214.99' stroke='rgba(23%2c 92%2c 169%2c 1)' stroke-width='2.58'%3e%3c/circle%3e%3ccircle r='47.087141096407656' cx='538.6' cy='94.57' stroke='rgba(23%2c 92%2c 169%2c 1)' stroke-width='1' stroke-dasharray='3%2c 3'%3e%3c/circle%3e%3cpath d='M1093.99 399.7a5.6 5.6 0 1 0-0.28-11.19 5.6 5.6 0 1 0 0.28 11.19zM1093.58 383.71a5.6 5.6 0 1 0-0.29-11.2 5.6 5.6 0 1 0 0.29 11.2zM1093.17 367.71a5.6 5.6 0 1 0-0.29-11.19 5.6 5.6 0 1 0 0.29 11.19zM1092.75 351.72a5.6 5.6 0 1 0-0.28-11.2 5.6 5.6 0 1 0 0.28 11.2zM1110.82 431.28a5.6 5.6 0 1 0-0.29-11.2 5.6 5.6 0 1 0 0.29 11.2zM1110.4 415.28a5.6 5.6 0 1 0-0.29-11.19 5.6 5.6 0 1 0 0.29 11.19zM1109.99 399.29a5.6 5.6 0 1 0-0.29-11.2 5.6 5.6 0 1 0 0.29 11.2zM1109.58 383.3a5.6 5.6 0 1 0-0.29-11.2 5.6 5.6 0 1 0 0.29 11.2z' stroke='rgba(23%2c 92%2c 169%2c 1)' stroke-width='1.9' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3crect width='112.64' height='112.64' clip-path='url(%26quot%3b%23SvgjsClipPath27709%26quot%3b)' x='-54.32' y='220.59' fill='url(%23SvgjsPattern27710)' transform='rotate(46.28%2c 2%2c 276.91)'%3e%3c/rect%3e%3cpath d='M22.69 43.45a5.6 5.6 0 1 0 7.05 8.7 5.6 5.6 0 1 0-7.05-8.7zM32.77 55.88a5.6 5.6 0 1 0 7.05 8.7 5.6 5.6 0 1 0-7.05-8.7zM42.85 68.31a5.6 5.6 0 1 0 7.05 8.69 5.6 5.6 0 1 0-7.05-8.69zM52.93 80.73a5.6 5.6 0 1 0 7.05 8.7 5.6 5.6 0 1 0-7.05-8.7zM-9.9 28.68a5.6 5.6 0 1 0 7.06 8.7 5.6 5.6 0 1 0-7.06-8.7zM0.18 41.11a5.6 5.6 0 1 0 7.06 8.7 5.6 5.6 0 1 0-7.06-8.7zM10.26 53.53a5.6 5.6 0 1 0 7.06 8.7 5.6 5.6 0 1 0-7.06-8.7zM20.34 65.96a5.6 5.6 0 1 0 7.06 8.7 5.6 5.6 0 1 0-7.06-8.7z' fill='rgba(255%2c 133%2c 64%2c 1)'%3e%3c/path%3e%3crect width='162.24' height='162.24' clip-path='url(%26quot%3b%23SvgjsClipPath27711%26quot%3b)' x='288.3' y='310.12' fill='url(%23SvgjsPattern27712)' transform='rotate(249.33%2c 369.42%2c 391.24)'%3e%3c/rect%3e%3cpath d='M192.88 213.31a5.6 5.6 0 1 0 5.98 9.47 5.6 5.6 0 1 0-5.98-9.47zM201.42 226.84a5.6 5.6 0 1 0 5.98 9.47 5.6 5.6 0 1 0-5.98-9.47zM209.96 240.37a5.6 5.6 0 1 0 5.98 9.47 5.6 5.6 0 1 0-5.98-9.47zM218.5 253.9a5.6 5.6 0 1 0 5.98 9.47 5.6 5.6 0 1 0-5.98-9.47zM162.27 194.79a5.6 5.6 0 1 0 5.98 9.47 5.6 5.6 0 1 0-5.98-9.47zM170.81 208.32a5.6 5.6 0 1 0 5.98 9.47 5.6 5.6 0 1 0-5.98-9.47zM179.35 221.85a5.6 5.6 0 1 0 5.98 9.47 5.6 5.6 0 1 0-5.98-9.47zM187.89 235.38a5.6 5.6 0 1 0 5.98 9.47 5.6 5.6 0 1 0-5.98-9.47zM131.66 176.27a5.6 5.6 0 1 0 5.98 9.47 5.6 5.6 0 1 0-5.98-9.47zM140.2 189.8a5.6 5.6 0 1 0 5.98 9.47 5.6 5.6 0 1 0-5.98-9.47zM148.74 203.33a5.6 5.6 0 1 0 5.98 9.47 5.6 5.6 0 1 0-5.98-9.47zM157.28 216.86a5.6 5.6 0 1 0 5.98 9.47 5.6 5.6 0 1 0-5.98-9.47z' stroke='rgba(255%2c 133%2c 64%2c 1)' stroke-width='1' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask27700'%3e%3crect width='1440' height='400' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='8.6' height='8.6' patternUnits='userSpaceOnUse' id='SvgjsPattern27702'%3e%3cpath d='M0 8.6L4.3 0L8.6 8.6' stroke='rgba(255%2c 133%2c 64%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath27701'%3e%3ccircle r='21.5' cx='56.92' cy='105.71'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern27704'%3e%3cpath d='M0 6L3 0L6 6' stroke='%23e73635' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath27703'%3e%3ccircle r='27' cx='1143.23' cy='161.82'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='9.08' height='9.08' patternUnits='userSpaceOnUse' id='SvgjsPattern27706'%3e%3cpath d='M0 9.08L4.54 0L9.08 9.08' stroke='%23e73635' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath27705'%3e%3ccircle r='54.480000000000004' cx='1018.97' cy='76.8'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern27708'%3e%3cpath d='M0 6L3 0L6 6' stroke='%23e73635' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath27707'%3e%3ccircle r='54' cx='934.9' cy='198.27'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='7.04' height='7.04' patternUnits='userSpaceOnUse' id='SvgjsPattern27710'%3e%3cpath d='M3.52 1L3.52 6.04M1 3.52L6.04 3.52' stroke='%23e73635' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath27709'%3e%3ccircle r='28.16' cx='2' cy='276.91'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='162.24' height='6.76' patternUnits='userSpaceOnUse' id='SvgjsPattern27712'%3e%3crect width='162.24' height='3.38' x='0' y='0' fill='rgba(23%2c 92%2c 169%2c 1)'%3e%3c/rect%3e%3crect width='162.24' height='3.38' x='0' y='3.38' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath27711'%3e%3ccircle r='40.56' cx='369.42' cy='391.24'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  }
</style>
