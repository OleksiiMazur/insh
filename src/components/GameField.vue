<template>
  <div class="game-field">
    <div class="game-field__card-place">
      <card></card>
    </div>
    <div class="drugs-list">
      <div class="btn drugs-list__item"
           v-for="(drug, index) in drugs"
           :key="drug.name"
           @click="drugBtnClick(index)"
           :class="[`drugs-list__item--${index + 1}`]">
              Препарат {{index + 1}}
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
    drugBtnClick: function (i) {
      let soldBefore = this.drugs[i].soldCount;

      this.drugs[i].soldCount = soldBefore + 1;

      console.log(this.drugs[i].soldCount);
    },
  },
  computed: {

  }
};
</script>