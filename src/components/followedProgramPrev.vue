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
          <div class="double-btn d-flex flex-wrap">
            <router-link :to=Id class="btn_01" style="text-decoration: none;">LearnMore</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="border-btn" @click="unfollow">Unfollow</div>
            <!-- <router-link to="/index" style="text-decoration: none;" class="border-btn">Follow</router-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'FollowedProgramPrev',
  props: ['Id', 'ImgUrls', 'ProjectName', 'Describe', 'Organization'],
  methods: {
    sayhello() {
      console.log('hello wold')
    },
    unfollow() {
      console.log(this.Id.substring(10))
      axios({
        method: 'delete',
        url: 'http://121.5.128.97:9009/v2.0/sponsor-microservice/follow',
        params: {
          followerId: 1,
          subjectId: this.Id.substring(10)
        }
      }).then(function(response) {
        console.log(response)
        alert('unfollow success')
      }).catch(function(error) {
        alert(error)
      })
    }
  },
}
</script>

<style scoped>
@import '../assets/css/style.css';
</style>
