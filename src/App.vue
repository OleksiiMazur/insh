<template>
  <div id="app" class="app">
<!--    <router-view/>-->
    <home v-if="state === 'Home'"
          :drugs="$data.drugs"
          @changeState="changeState" />

    <game v-else-if="state === 'Game'"
          :drugs="drugs"
          @changeState="changeState" />

    <final v-else-if="$data.state = 'Final'"
           @changeState="changeState" />
  </div>
</template>

<script>
import Home from "@/views/Home";
import Game from "@/views/Game";
import Final from "@/views/Final";

export default {
  components: {
    Game,
    Home,
    Final,
  },
  data() {
    return {
      state: 'Home',
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
    }
  },
  methods: {
    changeState: function (newState) {
      console.log(newState);
      this.$data.state = newState;
    }
  }
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
}

.app {
  height: inherit;
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
