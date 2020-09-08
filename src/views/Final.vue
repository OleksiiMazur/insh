<template>
  <div class="final">
    <div class="final__content">
      <a href="javascript:void(0)" class="btn home-btn bg-gradient"
         @click="$emit('retry'); $emit('changeState', 'Home');">
      </a>

      <div class="result">
        <div class="result__nums">
          <div v-for="(item, index) in drugs" class="result__item"
               :key="item.name">
            <span class="result__rate">
              {{ rate(index) }}%
            </span>
            <div class="result__name">
              Препарат {{ index + 1 }}
            </div>
          </div>
        </div>

        <div class="result__text">
          <h2 class="result__title">
            Ваш результат:
            <strong>«Что я здесь делаю?»</strong>
          </h2>
          <div class="result__subtitle">
            Это тестовое задание, так что не будем углубляться в глубины проблем фармацевтов.
          </div>
        </div>
      </div>

      <a href="javascript:void(0)" class="btn try-again-btn"
         @click="$emit('changeState', 'Game'); $emit('retry');">
            Попробовать еще
      </a>
    </div>
    <div class="final__img bg-gradient"></div>
  </div>
</template>

<script>
export default {
  props: {
    drugs: Array,
    customers: Array,
    state: String,
  },
  name: 'Final',
  components: {
  },
  data() {
    return {}
  },
  methods: {
    rate: function (index) {
      let length = this.customers.length;
      let sold = this.drugs[index].soldCount;

      return Math.round((sold / length) * 100);
    }
  },
  computed: {
  }
}
</script>

<style lang="scss">
@import "../assets/css/mixin";

.app {
  .final {
    position: relative;
    display: flex;
    height: 100%;
    overflow: hidden;
    background-color: #fff;

    &__content {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto 1fr;
      height: 100%;
      max-width: 50%;

      .home-btn {
        margin-top: 70px;
        margin-left: 50px;
        width: 70px;
        height: 70px;
        position: relative;
        border-radius: 50%;
        background-color: transparent;

        &:active {
          &:before {
            opacity: 0.7;
          }
        }
        &:before {
          transition: opacity 0.2s ease;
        }
        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: auto;
          background-repeat: no-repeat;
          background-position: center;
          transform: translateY(-4%);
          background-image: url("data:image/svg+xml,%3Csvg width='36' height='32' viewBox='0 0 36 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19.414 0.913912C18.633 0.132864 17.3666 0.132862 16.5856 0.913911L1.41401 16.0855C0.154085 17.3454 1.04642 19.4997 2.82823 19.4997H3.00029V29.9997C3.00029 31.1043 3.89572 31.9997 5.00029 31.9997H13.001C14.1056 31.9997 15.001 31.1043 15.001 29.9997V24.0007C15.001 22.8961 15.8965 22.0007 17.001 22.0007H19.001C20.1056 22.0007 21.001 22.8961 21.001 24.0007V29.9997C21.001 31.1043 21.8965 31.9997 23.001 31.9997H31.0003C32.1049 31.9997 33.0003 31.1043 33.0003 29.9997V19.4997H33.1714C34.9532 19.4997 35.8455 17.3454 34.5856 16.0855L19.414 0.913912Z' fill='%23ffffff'/%3E%3C/svg%3E%0A");
        }
      }
      .result {
        margin-top: 120px;
        margin-left: 130px;

        &__nums {
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: center;
          color: #424242;
          margin-bottom: 40px;
          padding-bottom: 50px;
          border-bottom: 2px solid #D9D9D9;
        }
        &__item {
          width: calc((100% - 40px) / 3);
        }
        &__rate {
          font-size: 48px;
          line-height: 70px;
        }
        &__name {
          font-size: 16px;
          line-height: 40px;
        }
        &__text {}
        &__title {
          font-size: 32px;
          line-height: 35px;
          color: #8E9AD5;
          letter-spacing: 0.02em;

          strong {
            display: block;
            font-size: 40px;
            line-height: 44px;
            font-weight: 700;
          }
        }
        &__subtitle {
          font-size: 24px;
          line-height: 29px;
          color: #424242;
          margin-top: 20px;
        }
      }
      .try-again-btn {
        font-weight: 700;
        font-size: 24px;
        display: inline-block;
        color: #fff;
        width: fit-content;
        height: 60px;
        line-height: 60px;
        padding: 0 23px;
        margin: auto 0 84px 130px;
        @include linear-gradient(90deg, #D9D9D9, 0%, #A1A1A1, 100%);
      }
    }

    &__img {
      position: absolute;
      height: 820px;
      width: 820px;
      max-width: 57vw;
      max-height: 57vw;
      top: -7vw;
      right: -10vw;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 0 40px #C4C4C4;
      background: no-repeat left -40px bottom url('../assets/imgs/final.jpg');
      background-size: auto calc(100% - 7vw);

      &:before {
        z-index: 1;
        opacity: 0.25;
      }
    }
  }
}
</style>
