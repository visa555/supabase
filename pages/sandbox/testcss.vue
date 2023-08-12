<template>
  <div>
    <div class="box">
      <div class="outer-circle">
        <v-icon>settings</v-icon>
        <v-icon>settings</v-icon>
        <v-icon>settings</v-icon>
        <v-icon>settings</v-icon>
      </div>
      <div class="inner-circle">
        <v-img src="/woman.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  .outer-circle {
    width: 26rem;
    height: 26rem;
    border-radius: 50%;
    border: 1px solid #ff9090;
    background: #ffffff;
    position: relative;
    animation: move 30s linear infinite;
    i {
      display: block;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      position: absolute;
      background: #ffffff;
      // box-shadow: 0 0 1rem #e8d2d2;
      color: rgb(255, 42, 0);
      display: flex;
      justify-content: center;
      align-items: center;
      &:nth-child(1) {
        left: calc(50% - 2rem);
        top: -2rem;
      }
      &:nth-child(2) {
        top: calc(50% - 2rem);
        right: -2rem;
      }
      &:nth-child(3) {
        top: calc(50% - 2rem);
        left: -2rem;
      }
      &:nth-child(4) {
        left: calc(50% - 2rem);
        bottom: -2rem;
      }
    }
  }
  .inner-circle {
    position: absolute;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    overflow: hidden;
  }
  @keyframes move {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
