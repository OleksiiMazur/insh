<template>
  <div class="game-field">
    <div class="game-field__card-place">
      <card :customers="customers"
            :drugs="drugs"
            :chosenDrug="chosenDrug"
            :currentCustomer="currentCustomer"
            v-touch:swipe="swipe"
            v-touch-options="{
              touchClass: 'swiping',
              swipeTolerance: 500,
            }"
      />
    </div>
    <div class="000">

    </div>
    <div class="drugs-list">
      <a href="javascript:void(0)" class="btn drugs-list__item"
           v-for="(drug, index) in drugs"
           :key="drug.name"
           @click="drugBtnClick(index)"
           :class="[`drugs-list__item--${index + 1}`]">
              Препарат {{index + 1}}
      </a>
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
  data() {
    return {
      cardAnimation: {
        duration: 1000,
        easing: 'ease-out',
      },
      chosenDrug: {
        num: 0,
        color: 'transparent',
      },
    }
  },
  methods: {
    drugBtnClick: function (i) {
      let customersLength = this.customers.length,
          animDur = this.cardAnimation.duration;
      let swipeDir = (i === 0) ? 'left'
                   : (i === 1) ? 'top'
                   : 'right';
      let card = document.querySelector('.customer');
      let notLastCustomer = this.currentCustomer < customersLength - 1;

      function disableBtns() {
        let drugBtn = document.querySelectorAll('.drugs-list__item');

        drugBtn.forEach(function(el) {
          el.classList.add('disabled');
          setTimeout(() => el.classList.remove('disabled'), animDur * 2);
        });
      }
      function cardAppearance () {
        card.classList.add('appear');
        setTimeout(() => card.classList.remove(`appear`), animDur / 10);
      }

      this.chosenDrug.color = this.drugs[i].color;
      this.chosenDrug.num = i + 1;

      if (this.currentCustomer < customersLength - 1) {
        setTimeout(() => this.$emit('nextCustomer'), animDur);
        setTimeout(cardAppearance,animDur);
      }
      if (notLastCustomer) {
        this.drugs[i].soldCount = this.drugs[i].soldCount + 1;
      }
      if (this.currentCustomer === customersLength - 1) {
        setTimeout(() => this.$emit('changeState', 'Final'), animDur);
      }

      card.classList.add(`swipe-${swipeDir}`);
      if(notLastCustomer) {
        setTimeout(() => card.classList.remove(`swipe-${swipeDir}`), animDur);
      }
      disableBtns();
    },
    swipe: function (direction) {
      let drugBtn  = document.querySelectorAll('.drugs-list__item');

      if (direction === 'left') {
        drugBtn[0].click();
      } else if (direction === 'top') {
        drugBtn[1].click();
      } else if (direction === 'right') {
        drugBtn[2].click();
      }
    },
  },
  mounted() {
    if (this.currentCustomer === 0) {
      setTimeout(() => document.querySelector('.customer').classList.remove(`appear`), this.cardAnimation.duration);
    }
  }
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