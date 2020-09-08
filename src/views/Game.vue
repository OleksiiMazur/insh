<template>
  <div class="game">
    <side-bar :drugs="drugs"
              :customers="customers"
              :currentCustomer="currentCustomer"
              v-on="$listeners" />

    <game-field :drugs="drugs"
                :state="state"
                :customers="customers"
                :currentCustomer="currentCustomer"
                v-on="$listeners" />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar"
import GameField from "@/components/GameField"

export default {
  props: {
    drugs: Array,
    customers: Array,
    currentCustomer: Number,
    state: String,
  },
  name: 'Game',
  components: {
    SideBar,
    GameField,
  },
}
</script>

<style lang="scss">
@import "../assets/css/mixin";

.app {
  .game {
    height: 100%;
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    background-color: #fff;

    &-sidebar {
      position: relative;
      z-index: 10;
      height: 100%;
      display: flex;
      flex-direction: column;

      &:before {
        opacity: .7;
      }
      &__nav {
        margin-top: 70px;
        margin-left: 50px;

        .icon-btn {
          width: 70px;
          height: 70px;
          position: relative;
          border-radius: 50%;
          background-color: #fff;

          &--home {
            margin-right: 38px;

            &:before {
              transform: translateY(-4%);
              background-image: url("data:image/svg+xml,%3Csvg width='36' height='32' viewBox='0 0 36 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19.414 0.913912C18.633 0.132864 17.3666 0.132862 16.5856 0.913911L1.41401 16.0855C0.154085 17.3454 1.04642 19.4997 2.82823 19.4997H3.00029V29.9997C3.00029 31.1043 3.89572 31.9997 5.00029 31.9997H13.001C14.1056 31.9997 15.001 31.1043 15.001 29.9997V24.0007C15.001 22.8961 15.8965 22.0007 17.001 22.0007H19.001C20.1056 22.0007 21.001 22.8961 21.001 24.0007V29.9997C21.001 31.1043 21.8965 31.9997 23.001 31.9997H31.0003C32.1049 31.9997 33.0003 31.1043 33.0003 29.9997V19.4997H33.1714C34.9532 19.4997 35.8455 17.3454 34.5856 16.0855L19.414 0.913912Z' fill='%23FF5864'/%3E%3C/svg%3E%0A");
            }
          }
          &--restart {
            &:before {
              background-image: url("data:image/svg+xml,%3Csvg width='46' height='36' viewBox='0 0 46 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d)'%3E%3Cpath d='M7 18C7 9.16344 14.0943 2 22.8456 2C29.0321 2 34.3905 5.57988 37 10.8' stroke='%23FF5864' stroke-width='4' stroke-linecap='round'/%3E%3C/g%3E%3Cg filter='url(%23filter1_d)'%3E%3Cpath d='M39 18C39 26.8366 31.6692 34 22.6262 34C16.2335 34 10.6965 30.4201 8 25.2' stroke='%23FF5864' stroke-width='4' stroke-linecap='round'/%3E%3C/g%3E%3Cg filter='url(%23filter2_d)'%3E%3Cpath d='M2 15L6.61538 19L12 15.8' stroke='%23FF5864' stroke-width='4' stroke-linecap='round'/%3E%3C/g%3E%3Cg filter='url(%23filter3_d)'%3E%3Cpath d='M44 20L39.3846 16L34 19.2' stroke='%23FF5864' stroke-width='4' stroke-linecap='round'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d' x='-75' y='-80' width='194' height='180' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='40'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 0.345098 0 0 0 0 0.392157 0 0 0 0.5 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3Cfilter id='filter1_d' x='-74' y='-64' width='195' height='180' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='40'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 0.345098 0 0 0 0 0.392157 0 0 0 0.5 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3Cfilter id='filter2_d' x='-80' y='-67' width='174' height='168.457' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='40'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 0.345098 0 0 0 0 0.392157 0 0 0 0.5 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3Cfilter id='filter3_d' x='-48' y='-66.457' width='174' height='168.457' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='40'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 0.345098 0 0 0 0 0.392157 0 0 0 0.5 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A");
            }
          }
          &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: auto;
            background-repeat: no-repeat;
            background-position: center;
            opacity: 0.5;
            transition: opacity 0.2s ease;
          }
          &:active, &:hover {
            &:before {
              opacity: 1;
            }
          }
        }
      }
      &__params {
        margin-left: 40px;
        margin-top: 28vh;

        .title {
          font-weight: 700;
          color: #fff;
          font-size: 36px;
          line-height: 44px;
          margin-bottom: 27px;
        }
        .sales {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          width: 400px;

          &__item {
            display: flex;
            line-height: 80px;
            height: 80px;
            width: calc((100% - 20px) / 2);
            box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4);
            background-color: #fff;
            border-radius: 100px;
            padding: 10px;

            &:first-child {
              margin-right: 20px;
            }
            &:not(:last-child) {
              margin-bottom: 37px;
            }
            img {
              margin-right: 10px;
            }
            span {
              width: 100%;
              font-weight: 700;
              font-size: 48px;
              text-align: center;
              line-height: 60px;
            }
          }
        }
      }
      &__turn {
        color: #fff;
        font-weight: 300;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: 0.02em;
        text-align: center;
        margin-top: auto;
        background-color: rgba(255, 255, 255, 0.15);
        padding: 20px 0;

        .title {

        }
        .nums {
          font-size: 45px;
          line-height: 55px;
        }
      }
    }
    &-field {
      display: grid;
      grid-template-rows: 1fr auto;
      grid-template-columns: 1fr;

      &__card-place {
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;

        .customer {
          width: 540px;
          height: 590px;
          max-width: 80%;
          max-height: 80%;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 0 40px rgba(127, 127, 127, 0.4),
          0 4px 4px rgba(127, 127, 127, 0.25);

          &__img {
            display: block;
            width: 100%;
            height: 350px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            &:before {
              z-index: 1;
              opacity: 0.2;
            }
          }
          &__info {
            padding: 25px 60px;
          }
          &__name {
            color: #8E9AD5;
            font-weight: 700;
            font-size: 32px;
            line-height: 39px;
            margin-bottom: 7px;
          }
          &__text {
            font-weight: 300;
            font-size: 24px;
            line-height: 29px;
            color: #424242;
          }
        }
      }
      .drugs-list {
        display: flex;
        justify-content: space-between;
        padding: 0 20px 64px 30px;

        &__item {
          font-weight: 700;
          font-size: 28px;
          color: #fff;
          width: calc((100% - 80px) / 3);
          background-color: #ccc;

          &--1 {
            @include linear-gradient(266deg, #8049C7, 0%, #CA57FD, 100%);
          }
          &--2 {
            @include linear-gradient(266deg, #169AE4, 0%, #0CC4FA, 100%);
          }
          &--3 {
            @include linear-gradient(90deg, #FFD748, 0%, #CACA19, 100%);}
        }
      }
    }
  }
}
</style>