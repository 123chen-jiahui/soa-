<template>
  <div>
    <div class="properties pb-30">
      <div class="properties__card">

        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="(img, index) in feedback.picPaths" :key="index">
            <div class="properties__img">
              <router-link to="/index" style="text-decoration: none;"><img :src=img alt=""></router-link>
            </div>
          </el-carousel-item>
        </el-carousel>

        <div class="properties__caption">
          <h3><router-link to="/index" style="text-decoration: none;">{{ feedback.projectName }}</router-link></h3>
          <p>反馈时间：{{ feedback.createTime }}</p>
        </div>
        <div class="properties__footer d-flex flex-wrap justify-content-between align-items-center">
          <div class="class-day">
            <span>{{ feedback.organization }}</span>
          </div>
          <div class="class-day">
            <div @click="showDetail()">
              <a class="btn_01" style="text-decoration: none;">Detail</a>
            </div>
          </div>
        </div>

        <el-dialog :visible.sync="centerDialogVisible" width="70%" center>
          <div v-html="feedback.content"></div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">Cancle</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">OK</el-button>
          </span>
        </el-dialog>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackPreview',
  props: ['feedback'], // 参数feedback
  data() {
    return {
      centerDialogVisible: false
    }
  },
  methods: {
    sayhello() {
      console.log('hello')
    },
    showDetail() {
      this.centerDialogVisible = true

    }
  }
}
</script>

<style scoped>
@import '../assets/css/style.css';
</style>