<template>
  <div class="home bg-gradient" id="home">
    <div class="welcome bg-gradient">
      <div class="title-group">
        <p class="welcome__pre-title">
          Добро пожаловать в игру
        </p>
        <h1 class="welcome__title">
          Помоги <span>Фармацевту</span>
        </h1>
      </div>
      <a href="javascript:void(0);"
         @click="$emit('changeState', 'Game')"
         class="btn welcome__btn">
            Начать
      </a>
<!--      <router-link to="/game" class="btn welcome__btn">Начать</router-link>-->
    </div>
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

.app {
  .home {
    height: 100%;
    width: 100%;
    background-image: url("../assets/imgs/home-bg.jpg");
    background-position: center;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: cover;

    &:before {
      z-index: 1 !important;
      opacity: 0.35;
    }
    .welcome {
      z-index: 5;
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
}

@media screen and (max-width: 1200px) {
  .app {
    .home {
      .welcome {
        padding-top: 280px;
        margin-left: -90px;
      }
    }
  }
}
</style>
