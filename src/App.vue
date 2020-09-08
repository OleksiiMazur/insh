<template>
  <div id="app" class="app bg-gradient">
<!--    <router-view/>-->
    <transition name="state-transition" mode="out-in">
      <home v-if="state === 'Home'"
            :drugs="drugs"
            @changeState="changeState" />

      <game v-else-if="state === 'Game'"
            :drugs="drugs"
            :state="state"
            :customers="customers"
            :currentCustomer="currentCustomer"
            @changeState="changeState"
            @nextCustomer="nextCustomer"
            @retry="restartGame"
            @lastCustomer="changeState" />

      <final v-else-if="state = 'Final'"
             :drugs="drugs"
             :state="state"
             :customers="customers"
             @retry="restartGame"
             @changeState="changeState" />
    </transition>
  </div>
</template>

<script>
import Home from "@/views/Home";
import Game from "@/views/Game";
import Final from "@/views/Final";

export default {
  name: 'App',
  components: {
    Game,
    Home,
    Final,
  },
  data() {
    return {
      state: 'Home',
      currentCustomer: 0,
      drugs: [
        {
          name: "cheap",
          color: "#8049C7",
          soldCount: 0,
          icon: 'sad.svg',
        },
        {
          name: "brand",
          color: "#169AE4",
          soldCount: 0,
          icon: 'happy.svg',
        },
        {
          name: "brand-2",
          color: "#FFD748",
          soldCount: 0,
          icon: 'heart.svg',
        },
      ],
      customers: [
        {
          name: "Марія",
          age: 19,
          text: 'Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.',
          photo: 'cust-1.jpg',
        },
        {
          name: "Степан",
          age: 61,
          text: 'Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?',
          photo: 'cust-2.jpg',
        },
        {
          name: "Любов",
          age: 58,
          text: 'Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною',
          photo: 'cust-3.jpg',
        },
        {
          name: "Олександр",
          age: 20,
          text: 'Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.',
          photo: 'cust-4.jpg',
        },
        {
          name: "Ірина",
          age: 55,
          text: 'У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною.',
          photo: 'cust-5.jpg',
        },
      ],
    }
  },
  methods: {
    changeState: function (newState) {
      this.$data.state = newState;
    },
    nextCustomer: function () {
      this.$data.currentCustomer = this.$data.currentCustomer + 1;

      if(this.$data.currentCustomer >= this.$data.customers.length ) {
        this.$data.currentCustomer = 0;
      }
    },
    restartGame: function () {
      this.$data.state = 'Game';

      this.$data.drugs.forEach(function (drug) {
        drug.soldCount = 0;
      });
      this.$data.currentCustomer = 0;
    },
  },
}
</script>

<style lang="scss">
@import "assets/css/reset";
@import "assets/css/mixin";

@font-face {
  font-family: "AvenirNextCyr";
  src: url("./assets/fonts/AvenirNextCyr-Bold.eot");
  src: url("./assets/fonts/AvenirNextCyr-Bold.eot?#iefix")format("embedded-opentype"),
  url("./assets/fonts/AvenirNextCyr-Bold.woff") format("woff"),
  url("./assets/fonts/AvenirNextCyr-Bold.woff2") format("woff2"),
  url("./assets/fonts/AvenirNextCyr-Bold.ttf") format("truetype");
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: "AvenirNextCyr";
  src: url("./assets/fonts/AvenirNextCyr-Regular.eot");
  src: url("./assets/fonts/AvenirNextCyr-Regular.eot?#iefix")format("embedded-opentype"),
  url("./assets/fonts/AvenirNextCyr-Regular.woff") format("woff"),
  url("./assets/fonts/AvenirNextCyr-Regular.woff2") format("woff2"),
  url("./assets/fonts/AvenirNextCyr-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "AvenirNextCyr";
  src: url("./assets/fonts/AvenirNextCyr-Light.eot");
  src: url("./assets/fonts/AvenirNextCyr-Light.eot?#iefix")format("embedded-opentype"),
  url("./assets/fonts/AvenirNextCyr-Light.woff") format("woff"),
  url("./assets/fonts/AvenirNextCyr-Light.woff2") format("woff2"),
  url("./assets/fonts/AvenirNextCyr-Light.ttf") format("truetype");
  font-style: normal;
  font-weight: 300;
  font-display: swap;
}

.state-transition-enter-active {
  transition: opacity 1.2s ease-in;
}
.state-transition-leave-active {
  transition: opacity 0.7s ease-out;
}
.state-transition-enter,
.state-transition-leave-to {
  opacity: 0;
}

body, html {
  font-family: "AvenirNextCyr";
  font-size: 28px;
  line-height: 1em;
  height: 100%;
}
body {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr;

  &:before {
    z-index: -20;
  }
}

.disabled {
  pointer-events: none;
  user-select: none;
}
.app {
  height: inherit;
  overflow: hidden;

  & > div {
    position: relative;
    z-index: 5;
  }
}

strong, b {
  font-weight: 700;
}

.btn {
  display: inline-block;
  border-radius: 100px;
  overflow: hidden;
  text-align: center;
  height: 90px;
  line-height: 90px;
  text-decoration: none;
  color: inherit;
}

.bg-gradient {
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    @include linear-gradient(53deg, #2D8550, 17%, #5E6EC2, 83%);
  }
}
</style>
