<template>
  <div class="sidebar">
    <div class="game-sidebar bg-gradient">
      <div class="game-sidebar__nav">
<!--        <router-link to="/" class="btn icon-btn icon-btn&#45;&#45;home"></router-link>-->
        <a href="#" class="btn icon-btn icon-btn--home"
           @click="$emit('changeState', 'Home')">
        </a>
        <a href="#" class="btn icon-btn icon-btn--restart"></a>
      </div>
      <div class="game-sidebar__params">
        <div class="title">
          Параметри:
        </div>
        <div class="sales">
          <div v-for="item in drugs"
               class="sales__item">
            <img :src=" require('@/assets/imgs/' + item.icon)" alt="icon">
            <span>{{item.soldCount}}</span>
          </div>
        </div>
      </div>
      <div class="game-sidebar__turn">
        <div class="title">
          Осталось в очереди
        </div>
        <div class="nums">
          <strong>14</strong>/<span>15</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    drugs: Array,
  },
  components: {
  }
}
</script>