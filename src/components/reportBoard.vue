<template>
  <div>
    <form action="#" class="bg-white p-5 rounded donation-form" data-aos="fade-up">
      <h2>Reasons for reporting</h2>
      <el-input type="textarea" :rows="2" placeholder="input..." v-model="textarea">
      </el-input>
    </form>
  </div>
</template>


<script>
export default {
  name: 'ReportBoard',
  data() {
    return {
      textarea: ''
    }
  }
}
</script>


<!-- <style scoped>
@import '../assets/css/style.css';
@import '../assets/css/style2.css';
</style> -->

<style scoped src="../assets/css/style.css">
</style>
<style scoped src="../assets/css/style2.css">
</style>