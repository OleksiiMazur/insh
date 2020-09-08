<template>
  <div class="game-field">
    <div class="game-field__card-place">
      <transition name="card-change">
        <card :customers="customers"
              :drugs="drugs"
              :currentCustomer="currentCustomer"
              v-touch:swipe.left="swipeLeft"
              v-touch:swipe.top="swipeTop"
              v-touch:swipe.right="swipeRight"
        />
      </transition>
    </div>
    <div class="drugs-list">
      <div class="btn drugs-list__item"
           v-for="(drug, index) in drugs"
           :key="drug.name"
           @click="drugBtnClick(index); $emit('nextCustomer')"
           :class="[`drugs-list__item--${index + 1}`]">
              Препарат {{index + 1}}
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/CustomerCard";

export default {
  props: {
    drugs: Array,
    customers: Array,
    currentCustomer: Number,
    state: String,
  },
  components: {
    Card,
  },
  methods: {
    drugBtnClick: function (i) {
      let customersLength = this.customers.length;

      if (this.currentCustomer <= customersLength - 1) {
        this.drugs[i].soldCount = this.drugs[i].soldCount + 1;
      }
      if (this.currentCustomer === customersLength - 1) {
        this.$emit('lastCustomer', 'Final');
      }
    },
    swipeLeft: function () {
      console.log('swipeLeft');
    },
    swipeTop: function () {
      console.log('swipeTop');
    },
    swipeRight: function () {
      console.log('swipeRight');
    },
  },
};
</script>

<style lang="scss">
.card-change-enter-active {
  transition: opacity 1.2s ease-in;
}
.card-change-leave-active {
  transition: opacity 0.7s ease-out;
}
.card-change-enter,
.card-change-leave-to {
  opacity: 0;
}
</style>