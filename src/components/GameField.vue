<template>
  <div class="game-field">
    <div class="game-field__card-place">
      <card :customers="customers" :currentCustomer="currentCustomer"></card>
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
  props: {
    drugs: Array,
  },
  components: {
    Card,
  },
  data() {
    return {
      currentCustomer: 1,
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
    drugBtnClick: function (i) {
      let soldBefore = this.drugs[i].soldCount;

      this.drugs[i].soldCount = soldBefore + 1;

      // console.log(this.drugs[i].soldCount);
    },
  },
  computed: {}
};
</script>