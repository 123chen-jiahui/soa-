<template>
  <div class="properties pb-30">
    <div class="properties__card">

      <!-- 走马灯 -->
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(img, index) in ImgUrls" :key="index">
          <div class="properties__img">
            <img :src=img alt="">
          </div>
        </el-carousel-item>
      </el-carousel>

      <div class="properties__caption">
        <h3><router-link to="/index" style="text-decoration: none;">{{ ProjectName }}</router-link></h3>
        <p>{{ Describe }}</p>
      </div>
      <div class="properties__footer d-flex flex-wrap justify-content-between align-items-center">
        <div class="class-day">
          <span>{{ Organization }}</span>
        </div>
        <div class="class-day">
          <div>
            <router-link :to=Id class="btn_01" style="text-decoration: none;">LearnMore</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramPreview',
  props: ['Id', 'ImgUrls', 'ProjectName', 'Describe', 'Organization'],
  methods: {
    sayhello() {
      console.log('hello wold')
    }
  },
}
</script>

<!-- <style scoped>
@import '../assets/css/style.css';
</style> -->

<style scoped src="../assets/css/style.css">
</style>
