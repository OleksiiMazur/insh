<template>
  <div class="final">
    <h2>Final page 🥐 </h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "../assets/css/mixin";

.home {
  height: 100%;
  width: 100%;
  background-image: url("../assets/imgs/home-bg.jpg");
  background-position: center;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;

  .welcome {
    z-index: 2;
    position: relative;
    height: 860px;
    width: 860px;
    border-radius: 50%;
    overflow: hidden;
    color: #fff;
    letter-spacing: 0.02em;
    padding-top: 280px;
    margin-left: 110px;
    transform: translateY(-30px);

    &__pre-title {
      font-weight: 300;
      font-size: 35px;
      line-height: 41px;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      margin-bottom: 28px;
    }
    .title-group {
      margin-left: 186px;
    }
    &__title {
      font-weight: 700;
      font-size: 60px;
      line-height: 66px;

      span {
        display: block;
        font-size: 70px;
        line-height: 77px;
        text-transform: uppercase;
      }
    }
    &__btn {
      display: block;
      width: fit-content;
      font-weight: 700;
      font-size: 36px;
      color: #8E9AD5;
      background-color: #fff;
      padding: 0 120px;
      transition: background-color 0.2s ease;
      margin: 120px auto 0;

      &:hover, &:active {
        background-color: rgba(255,255,255,0.5);
      }
    }
  }
}
</style>
