<template>
  <div class="sidebar">
    <div class="game-sidebar bg-gradient">
      <div class="game-sidebar__nav">
<!--        <router-link to="/" class="btn icon-btn icon-btn&#45;&#45;home"></router-link>-->
        <a href="javascript:void(0);"
           class="btn icon-btn icon-btn--home"
           @click="$emit('changeState', 'Home')">
        </a>
        <a href="javascript:void(0);"
           class="btn icon-btn icon-btn--restart"
           @click="$emit('retry');">
        </a>
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
          <strong>{{ currentCustomer + 1 }}</strong>/<span>{{ customers.length }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    drugs: Array,
    customers: Array,
    currentCustomer: Number,
  },
  computed: {
    customer: function() {
      return this.customers[this.currentCustomer];
    }
  }
}
</script>