<template>
  <div class="game-field">
    <div class="game-field__card-place">
      <card></card>
    </div>
    <div class="drugs-list">
      <div class="btn drugs-list__item"
           v-for="drug in drugs"
           :key="drug.id"
           :class="[`drugs-list__item--${drug.id}`]">
              Препарат {{drug.id}}
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/CustomerCard";

export default {
  props: ['drugs'],
  components: {
    Card,
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {

  }
};
</script>