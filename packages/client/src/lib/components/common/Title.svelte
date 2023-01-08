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
  }
  h1 {
    border-bottom-right-radius: 8px;
    letter-spacing: -7px;
    box-shadow: none;
    backdrop-filter: blur(5px);
    z-index: 1;
    transition-duration: 0.3s;
  }

  h4 {
    backdrop-filter: blur(5px);
    transition-duration: 0.3s;
    z-index: 1;
    padding: 10px;
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
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1200' height='300' preserveAspectRatio='none' viewBox='0 0 1200 300'%3e%3cg clip-path='url(%26quot%3b%23SvgjsClipPath1262%26quot%3b)' fill='none'%3e%3ccircle r='18.345' cx='292.74' cy='235' fill='url(%23SvgjsLinearGradient1263)'%3e%3c/circle%3e%3ccircle r='24.605' cx='920.73' cy='293.7' fill='url(%23SvgjsLinearGradient1264)'%3e%3c/circle%3e%3ccircle r='9.62' cx='251.76' cy='131.96' fill='%2343468b'%3e%3c/circle%3e%3ccircle r='21.73' cx='489.24' cy='265.85' fill='url(%23SvgjsLinearGradient1265)'%3e%3c/circle%3e%3ccircle r='14.715' cx='201.26' cy='67.07' fill='url(%23SvgjsLinearGradient1266)'%3e%3c/circle%3e%3ccircle r='10.255' cx='864.09' cy='26.4' fill='url(%23SvgjsLinearGradient1267)'%3e%3c/circle%3e%3ccircle r='27.455' cx='847.65' cy='63.74' fill='%2343468b'%3e%3c/circle%3e%3ccircle r='27.79' cx='149.69' cy='296.71' fill='url(%23SvgjsLinearGradient1268)'%3e%3c/circle%3e%3ccircle r='17.885' cx='234.96' cy='146.08' fill='url(%23SvgjsLinearGradient1269)'%3e%3c/circle%3e%3ccircle r='27.58' cx='53.53' cy='55.33' fill='url(%23SvgjsLinearGradient1270)'%3e%3c/circle%3e%3ccircle r='29.18' cx='473.08' cy='255.42' fill='url(%23SvgjsLinearGradient1271)'%3e%3c/circle%3e%3ccircle r='24.51' cx='229.3' cy='120.92' fill='url(%23SvgjsLinearGradient1272)'%3e%3c/circle%3e%3ccircle r='24.62' cx='940.99' cy='126.46' fill='url(%23SvgjsLinearGradient1273)'%3e%3c/circle%3e%3c/g%3e%3cdefs%3e%3cclipPath id='SvgjsClipPath1262'%3e%3crect width='1200' height='300' x='0' y='0'%3e%3c/rect%3e%3c/clipPath%3e%3clinearGradient x1='256.05' y1='235' x2='329.43' y2='235' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1263'%3e%3cstop stop-color='%23ab3c51' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%234f4484' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='871.52' y1='293.7' x2='969.9399999999999' y2='293.7' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1264'%3e%3cstop stop-color='%2384b6e0' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23464a8f' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='445.78000000000003' y1='265.85' x2='532.7' y2='265.85' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1265'%3e%3cstop stop-color='%2332325d' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23424488' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='171.82999999999998' y1='67.07' x2='230.69' y2='67.07' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1266'%3e%3cstop stop-color='%23f29b7c' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%237e6286' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='843.58' y1='26.4' x2='884.6' y2='26.4' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1267'%3e%3cstop stop-color='%23e298de' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23484687' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='94.11' y1='296.71' x2='205.26999999999998' y2='296.71' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1268'%3e%3cstop stop-color='%23f29b7c' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%237e6286' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='199.19' y1='146.08' x2='270.73' y2='146.08' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1269'%3e%3cstop stop-color='%23ab3c51' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%234f4484' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='-1.6299999999999955' y1='55.33' x2='108.69' y2='55.33' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1270'%3e%3cstop stop-color='%23f29b7c' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%237e6286' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='414.71999999999997' y1='255.42000000000002' x2='531.4399999999999' y2='255.42000000000002' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1271'%3e%3cstop stop-color='%23e298de' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23484687' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='180.28' y1='120.92000000000002' x2='278.32' y2='120.92000000000002' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1272'%3e%3cstop stop-color='%23e298de' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23484687' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='891.75' y1='126.46000000000001' x2='990.23' y2='126.46000000000001' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1273'%3e%3cstop stop-color='%23ab3c51' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%234f4484' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  }
</style>
