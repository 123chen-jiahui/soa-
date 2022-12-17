<template>
  <div>
    <form action="#" class="bg-white p-5 rounded donation-form" data-aos="fade-up">
      <h3>Quick Donation Form</h3>
      ￥{{ monthFee }} per month
      <div class="form-field mb-3">
        <label for="amount-1" class="amount js-amount" @click="setMonth(1)">
          <input type="radio" id="amount-1" name="radio-amount" checked="true">
          <span>1 month<br>(0% off)</span>
        </label>

        <label for="amount-2" class="amount js-amount" @click="setMonth(6)">
          <input type="radio" id="amount-2" name="radio-amount">
          <span>6 months<br>(5% off)</span>
        </label>
        <label for="amount-3" class="amount js-amount" @click="setMonth(12)">
          <input type="radio" id="amount-3" name="radio-amount">
          <span>12 months<br>(10% off)</span>
        </label>

      </div>
      <div class="field-icon">
        <span>￥</span>
        <input type="text" placeholder="0.00" class="form-control px-4" name="donate-value" :value=total>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Donate',
  props: ['monthFee'],
  data() {
    return {
      monthChosen: 1,

      total: this.monthFee
    }
  },
  watch: {
    monthChosen(val) {
      if (val == 1) {
        this.total = this.monthFee
      } else if (val == 6) {
        this.total = this.monthFee * 6 * 0.95
      } else {
        this.total = this.monthFee * 12 * 0.9
      }
    }
  },
  methods: {
    setMonth(i) {
      this.monthChosen = i
    }
  }
}
</script>


<style scoped>
@import '../assets/css/style.css';
@import '../assets/css/style2.css';
</style>