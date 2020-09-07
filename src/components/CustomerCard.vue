<template>
  <div class="customer">
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
  </div>
</template>

<script>
export default {
  props: {
    drugs: Array,
    customers: Array,
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
    }
  }
};
</script>