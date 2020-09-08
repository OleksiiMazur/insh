<template>
  <div class="customer appear">
    <div class="customer__img bg-gradient">
      <img :src="require('@/assets/imgs/' + customer.photo)"
           :alt="customer.name">
    </div>
    <div class="customer__info">
      <div class="customer__name">
        {{customer.name}}, {{customer.age}} років
      </div>
      <div class="customer__text">
        {{customer.text}}
      </div>
    </div>
    <div class="customer__stamp"
         :style="{borderColor: chosenDrug.color,
                  color: chosenDrug.color}">
            Препарат {{chosenDrug.num}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    drugs: Array,
    customers: Array,
    chosenDrug: Object,
    currentCustomer: Number,
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    customer: function() {
      return this.customers[this.currentCustomer];
    },
  }
};
</script>

<style lang="scss">
.swipe {
  &-left {
    opacity: 0;
    transform: translateX(-100%) rotate(-15deg);
    transition: transform 0.8s ease-in-out, opacity 0.2s 0.8s;
  }
  &-top {
    opacity: 0;
    transform: translateY(-100%) rotate(-15deg);
    transition: transform 0.8s ease-in-out, opacity 0.2s 0.8s;
  }
  &-right {
    opacity: 0;
    transform: translateX(100%) rotate(15deg);
    transition: transform 0.8s ease-in-out, opacity 0.2s 0.8s;
  }
}

.customer {
  user-select: none;
  position: relative;
  transition: transform 0.8s ease-in-out, opacity 0.8s;

  &.appear {
    opacity: 0;
    transform: translateY(100%);
    transition: none;
  }

  &.swipe-left,
  &.swipe-top,
  &.swipe-right {
    transition: transform 0.8s 0.2s ease-in-out, opacity 0.6s 0.4s;

    .customer__stamp {
      opacity: 1;
      transform: translateX(-50%) rotate(-15deg);
    }
  }

  &__stamp {
    user-select: none;
    font-weight: 700;
    font-size: 52px;
    line-height: 118px;
    border-width: 8px;
    border-style: solid;
    border-color: red;
    color: red;
    position: absolute;
    top: 43%;
    left: 50%;
    opacity: 0;
    width: fit-content;
    padding: 0 33px;
    transform: translateX(-50%) rotate(-15deg) scale(1.2);
    transition: transform 0.4s ease-in, opacity 0.2s ease;
  }
}
</style>