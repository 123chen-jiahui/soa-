<template>
  <div class="properties pb-30">
    <div class="properties__card">

      <!-- 走马灯 -->
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(img, index) in ImgUrls" :key="index">
          <div class="properties__img">
            <router-link to="/index" style="text-decoration: none;"><img :src=img alt=""></router-link>
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
  mounted() {
    // 只显示50个字符
    if (this.Describe.length > 50) {
      this.Describe = this.Describe.slice(0, 50) + '......'
    }
  }
}
</script>

<style scoped>
@import '../assets/css/style.css';
</style>
