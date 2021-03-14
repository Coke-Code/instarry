<template>
  <div class="wrap">
    <div class="trace-animate">
      <svg class="trace" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 374 374">
      <title>trace</title>
      <circle  cx="187" cy="187" r="84.5" style="fill:none;stroke:currentColor;stroke-miterlimitstroke:currentColor;:10;opacity:0.8"/>
      <circle  cx="187" cy="187" r="59.5" style="fill:none;stroke:currentColor;stroke-miterlimit:10;opacity:0.85"/>
      <ellipse  cx="320" cy="240" rx="50.49" ry="50.11" transform="translate(-158.08 -15.28) rotate(-6.49)" style="fill:none;stroke:currentColor;stroke-miterlimit:10;opacity:0.95"/>
      <g class="fifth"><circle  cx="187" cy="187" r="126.5" style="fill:none;stroke:currentColor;stroke-miterlimit:10;opacity:0.5"/><circle cx="268" cy="163" r="5"  style="fill:currentColor"/></g>
      <g class="outer"><circle  cx="187" cy="187" r="186.5" style="fill:none;stroke:currentColor;stroke-miterlimit:10;opacity:0.4"/><circle cx="314" cy="50" r="4"  style="fill:currentColor"/>
      </g><g class="third"><circle  cx="187" cy="187" r="111.5" style="fill:none;stroke:currentColor;stroke-miterlimit:10;opacity:0.6"/><circle cx="189" cy="76" r="6"  style="fill:currentColor"/></g>
      <g class="fourth"><circle  cx="187" cy="187" r="142.5" style="fill:none;stroke:currentColor;stroke-miterlimit:10;opacity:0.51"/><circle cx="127.59" cy="317.88" r="7.02" style="fill:currentColor"/></g>
      <g class="sec"><circle  cx="187" cy="187" r="95.5" style="fill:none;stroke:currentColor;stroke-miterlimit:10;opacity:0.7"/><circle cx="170.25" cy="280.89" r="3.36" style="fill:currentColor"/>
      </g><g class="inner"><circle  cx="187" cy="187" r="68.5" style="fill:none;stroke:currentColor;stroke-miterlimit:10;opacity:0.85"/><circle cx="158.89" cy="249.89" r="2" style="fill:currentColor"/></g>
      </svg>
      <div class="text">银河有迹可循</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.wrap{
  background: #000;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
  min-height: calc(100vh - 108px);
}
.trace-animate{
  position: relative;
  width: 500px;
  height: auto;
  margin: auto;
  .trace{
    color: #fff;
  }
  .text{
    font-size: 12px;
    color: #fff;
    position: absolute;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 50%;
    margin-top: -50%;
    margin-left: -50%;
  }
  .fifth,.outer,.inner,.sec,.fourth,.third{
    animation-name: trace;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    transform-origin: center center;
  }
  .inner{
    animation-duration: 8s;
  }
  .sec{
     animation-duration: 10s;
  }
  .third{
    animation-duration: 15s;
  }
  .fifth{
     animation-duration: 18s;
  }
  .fourth{
    animation-duration: 25s;
  }
  .outer{
    animation-duration: 35s;
  }
}
@keyframes trace {
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
}
@media screen and (max-width: 768px){
  .wrap{
    padding: 10px;
    min-height: calc(100vh - 68px);
  }
}
</style>