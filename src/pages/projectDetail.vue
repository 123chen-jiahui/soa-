<template>
  <div>
    <header>
      <div class="header-area header-transparent">
        <div class="main-header ">
          <div class="header-bottom  header-sticky">
            <div class="container-fluid">
              <div class="d-flex align-items-center justify-content-between flex-wrap position-relative">
                <!-- Logo -->
                <div class="left-side d-flex align-items-center">
                  <div class="logo">
                    <router-link to="/index" style="text-decoration: none;"><img src="../assets/img/logo/logo.png"
                        alt=""></router-link>
                  </div>
                  <!-- Main-menu -->
                  <div class="main-menu d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li><router-link to="/index" style="text-decoration: none;">Home</router-link></li>
                        <li><router-link to="/feedbacks" style="text-decoration: none;">FeedBacks</router-link></li>
                        <li><router-link to="/projects" style="text-decoration: none;">Programs</router-link></li>
                        <li><router-link to="/follows" style="text-decoration: none;">Follows</router-link></li>
                        <li><router-link to="/notices" style="text-decoration: none;">Notices</router-link>
                        </li>
                        <li><router-link to="/index" style="text-decoration: none;">Contact Us</router-link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div class="header-right-btn f-right  ml-15">
                  <router-link to="/index" style="text-decoration: none;" class="btn_1 header-btn"><i
                      class="fas fa-heart"></i>Make a Donation</router-link>
                </div>
                <!-- Mobile Menu -->
                <div class="col-12">
                  <div class="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>

      <div class="slider-area">
        <div class="slider-height2 slider-bg2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-5 col-lg-6 col-md-8">
                <div class="hero-caption hero-caption2">
                  <h2 class="animate__animated animate__fadeInUp animate__fast">Programs</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="about-area1 section-padding">
        <div class="container">
          <div class="row align-items-center">
            <div class="offset-xl-1 col-xxl-5 col-xl-5 col-lg-6 col-md-6">

              <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(img, index) in Detail.picPaths" :key="index">
                  <div class="about-img about-img1">
                    <router-link to="/index" style="text-decoration: none;"><img :src=img alt=""></router-link>
                  </div>
                </el-carousel-item>
              </el-carousel>

              <el-dialog :visible.sync="centerDialogVisible" width="35%" center>
                <Donate ref="total" :monthFee=Detail.monthFee />
                <span slot="footer" class="dialog-footer">
                  <el-button @click="centerDialogVisible = false">Cancle</el-button>
                  <el-button type="primary" @click="sponsor()">Donate</el-button>
                </span>
              </el-dialog>

            </div>
            <div class="offset-xl-1 col-xxl-5 col-xl-5 col-lg-6 col-md-6">
              <div class="about-caption about-caption1">
                <!-- Section Tittle -->
                <div class="section-tittle m-0">
                  <span>{{ Detail.organization }}</span>
                  <h2>{{ Detail.projectName }}</h2>
                  <p class="mb-30">{{ Detail.describe }}</p>
                  <div class="double-btn d-flex flex-wrap">
                    <div class="btn_01 mr-15" @click="centerDialogVisible = true">Donate
                      Now</div>
                    <div class="border-btn" @click="follow()">follow</div>
                    <!-- <router-link to="/index" style="text-decoration: none;" class="border-btn">Follow</router-link> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2>Announcements</h2>
          <Announcement :Announcements=Announcements />

        </div>
      </section>
    </main>
    <footer>
            <div class="footer-wrapper">
                <div class="footer-bottom-area">
                    <div class="container">
                        <div class="footer-border">
                            <div class="row">
                                <div class="col-xl-12 ">
                                    <div class="footer-copy-right text-center">
                                        <p>Copyright &copy;2022 All rights reserved | This template is made with <i
                                                class="fa fa-heart color-danger" aria-hidden="true"></i> by <a
                                                href="https://colorlib.com" target="_blank"
                                                rel="nofollow noopener">Colorlib</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  </div>
</template>


<script>
import axios from 'axios'
import ProgramPreview from '../components/programPreview.vue'
import Announcement from '../components/announcement.vue'
import Donate from '../components/donate.vue'
export default {
  name: 'ProjectDetail',
  components: {
    'ProgramPreview': ProgramPreview,
    'Announcement': Announcement,
    'Donate': Donate
  },
  data() {
    return {
      id: '',
      Detail: {},
      Announcements: [],

      data: {},
      centerDialogVisible: false,
    }
  },
  methods: {
    follow: function() {
      axios({
        method: 'post',
        url: 'http://121.5.128.97:9009/v2.0/sponsor-microservice/follow/add',
        params: {
          subjectId: this.id,
          followerId: '1' // 这里不应该写死，等身份验证出来以后再改
        }
      }).then(function() {
        alert('关注成功')
      }).catch(function(error) {
        alert(error)
      })
    },
    sponsor: function() {
      // 待定，等后端

      // 获取子组件的参数
      var total = this.$refs.total.total
      var monthChosen = this.$refs.total.monthChosen
      var day
      if (monthChosen == 12) {
        day = 365
      } else if (monthChosen == 6) {
        day = 183
      } else {
        day = 31
      }
      console.log(total, monthChosen, day)
      this.centerDialogVisible = false
    }
  },
  mounted() {
    this.id = this.$route.params.id
    // 根据项目Id获取项目所有信息
    // 根据项目Id获取项目所有公告

    const outerthis = this
    axios({
      method: 'get',
      url: 'http://121.5.128.97:9009/v2.0/sponsor-microservice/projects/projectAndNotice',
      params: {
        id: this.id
      }
    }).then(function(response) {
      console.log(response)
      outerthis.Detail = response.data
      outerthis.Announcements = response.data.notice
    }).catch(function(error) {
      alert(error)
    })
  }
}
</script>


<style scoped>
@import '../assets/css/style2.css';
@import '../assets/css/style.css';
</style>