<script lang="ts">
  import { fade, slide } from "svelte/transition";

  export let title: string = "Title";
  export let subTitle: string = "";
  export let color: string = "";
</script>

<div in:slide class="title responsive">
  <h1 style:color>{title}</h1>
  {#if subTitle}
    <h4 class="subtitle">{subTitle}</h4>
  {/if}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-size: cover;
    padding: 20px;
    margin-bottom: 20px;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1200' height='300' preserveAspectRatio='none' viewBox='0 0 1200 300'%3e%3cg clip-path='url(%26quot%3b%23SvgjsClipPath13720%26quot%3b)' fill='none'%3e%3ccircle r='21.425' cx='1032.97' cy='174.75' fill='url(%23SvgjsRadialGradient13721)'%3e%3c/circle%3e%3ccircle r='8.235' cx='1189.1' cy='28.98' fill='url(%23SvgjsLinearGradient13722)'%3e%3c/circle%3e%3ccircle r='26.265' cx='627.06' cy='241.74' fill='url(%23SvgjsLinearGradient13723)'%3e%3c/circle%3e%3ccircle r='23.695' cx='236.77' cy='178.43' fill='url(%23SvgjsLinearGradient13724)'%3e%3c/circle%3e%3ccircle r='25.325' cx='479.29' cy='193.75' fill='url(%23SvgjsLinearGradient13725)'%3e%3c/circle%3e%3ccircle r='27.1' cx='736.89' cy='102.3' fill='url(%23SvgjsLinearGradient13726)'%3e%3c/circle%3e%3ccircle r='8.175' cx='791.17' cy='182.45' fill='url(%23SvgjsLinearGradient13727)'%3e%3c/circle%3e%3ccircle r='16.145' cx='135.58' cy='254.89' fill='url(%23SvgjsLinearGradient13728)'%3e%3c/circle%3e%3ccircle r='21.925' cx='1176.73' cy='116.34' fill='url(%23SvgjsLinearGradient13729)'%3e%3c/circle%3e%3ccircle r='11.57' cx='633.42' cy='199.23' fill='url(%23SvgjsRadialGradient13730)'%3e%3c/circle%3e%3ccircle r='17.79' cx='14.8' cy='222.47' fill='url(%23SvgjsLinearGradient13731)'%3e%3c/circle%3e%3ccircle r='25.825' cx='758.25' cy='296.47' fill='url(%23SvgjsRadialGradient13732)'%3e%3c/circle%3e%3ccircle r='11.185' cx='790.06' cy='234.99' fill='url(%23SvgjsRadialGradient13733)'%3e%3c/circle%3e%3ccircle r='25.015' cx='638.54' cy='282.68' fill='url(%23SvgjsLinearGradient13734)'%3e%3c/circle%3e%3ccircle r='16.28' cx='1137.53' cy='150.04' fill='url(%23SvgjsLinearGradient13735)'%3e%3c/circle%3e%3c/g%3e%3cdefs%3e%3cclipPath id='SvgjsClipPath13720'%3e%3crect width='1200' height='300' x='0' y='0'%3e%3c/rect%3e%3c/clipPath%3e%3cradialGradient cx='1075.82' cy='174.75' r='95.82' gradientUnits='userSpaceOnUse' id='SvgjsRadialGradient13721'%3e%3cstop stop-color='rgba(53%2c 164%2c 167%2c 1)' offset='0.12'%3e%3c/stop%3e%3cstop stop-color='rgba(114%2c 55%2c 126%2c 1)' offset='0.97'%3e%3c/stop%3e%3c/radialGradient%3e%3clinearGradient x1='1172.6299999999999' y1='28.98' x2='1205.57' y2='28.98' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient13722'%3e%3cstop stop-color='%2332325d' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23424488' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='574.53' y1='241.74' x2='679.5899999999999' y2='241.74' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient13723'%3e%3cstop stop-color='%2384b6e0' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23464a8f' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='189.38' y1='178.43' x2='284.15999999999997' y2='178.43' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient13724'%3e%3cstop stop-color='%23ab3c51' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%234f4484' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='428.64000000000004' y1='193.75' x2='529.94' y2='193.75' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient13725'%3e%3cstop stop-color='%23e298de' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23484687' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='682.6899999999999' y1='102.3' x2='791.0899999999999' y2='102.3' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient13726'%3e%3cstop stop-color='%2384b6e0' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23464a8f' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='774.8199999999999' y1='182.45' x2='807.52' y2='182.45' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient13727'%3e%3cstop stop-color='%2384b6e0' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23464a8f' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='103.29000000000002' y1='254.89' x2='167.87' y2='254.89' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient13728'%3e%3cstop stop-color='%2384b6e0' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23464a8f' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='1132.88' y1='116.34' x2='1220.5800000000002' y2='116.34' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient13729'%3e%3cstop stop-color='%23ab3c51' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%234f4484' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3cradialGradient cx='656.56' cy='199.22999999999996' r='51.74' gradientUnits='userSpaceOnUse' id='SvgjsRadialGradient13730'%3e%3cstop stop-color='rgba(53%2c 164%2c 167%2c 1)' offset='0.12'%3e%3c/stop%3e%3cstop stop-color='rgba(114%2c 55%2c 126%2c 1)' offset='0.97'%3e%3c/stop%3e%3c/radialGradient%3e%3clinearGradient x1='-20.779999999999998' y1='222.46999999999997' x2='50.379999999999995' y2='222.46999999999997' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient13731'%3e%3cstop stop-color='%2384b6e0' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23464a8f' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3cradialGradient cx='809.9' cy='296.47' r='115.49' gradientUnits='userSpaceOnUse' id='SvgjsRadialGradient13732'%3e%3cstop stop-color='rgba(53%2c 164%2c 167%2c 1)' offset='0.12'%3e%3c/stop%3e%3cstop stop-color='rgba(114%2c 55%2c 126%2c 1)' offset='0.97'%3e%3c/stop%3e%3c/radialGradient%3e%3cradialGradient cx='812.43' cy='234.99' r='50.02' gradientUnits='userSpaceOnUse' id='SvgjsRadialGradient13733'%3e%3cstop stop-color='rgba(53%2c 164%2c 167%2c 1)' offset='0.12'%3e%3c/stop%3e%3cstop stop-color='rgba(114%2c 55%2c 126%2c 1)' offset='0.97'%3e%3c/stop%3e%3c/radialGradient%3e%3clinearGradient x1='588.51' y1='282.68' x2='688.5699999999999' y2='282.68' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient13734'%3e%3cstop stop-color='%23ab3c51' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%234f4484' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='1104.97' y1='150.04' x2='1170.0900000000001' y2='150.04' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient13735'%3e%3cstop stop-color='%23ab3c51' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%234f4484' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  }
  h1 {
    z-index: 1;
    padding: 10px;
    text-align: center;
  }

  h4 {
    z-index: 1;
    padding: 10px;
    text-align: center;
    max-width: 400px;
    padding: 20px;
  }
</style>
