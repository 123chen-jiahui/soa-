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
                        <li><router-link to="/index" style="text-decoration: none;">Who we are?</router-link></li>
                        <li><router-link to="/projects" style="text-decoration: none;">Programs</router-link></li>
                        <li><router-link to="/index" style="text-decoration: none;">About</router-link></li>
                        <li><router-link to="/index" style="text-decoration: none;">Blog</router-link>
                          <ul class="submenu">
                            <li><router-link to="/index" style="text-decoration: none;">Blog</router-link></li>
                            <li><router-link to="/index" style="text-decoration: none;">Blog Details</router-link></li>
                            <li><router-link to="/index" style="text-decoration: none;">Elements</router-link></li>
                          </ul>
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
                <el-carousel-item v-for="(img, index) in Detail.imgUrls" :key="index">
                  <div class="about-img about-img1">
                    <router-link to="/index" style="text-decoration: none;"><img :src=img alt=""></router-link>
                  </div>
                </el-carousel-item>
              </el-carousel>

            </div>
            <div class="offset-xl-1 col-xxl-5 col-xl-5 col-lg-6 col-md-6">
              <div class="about-caption about-caption1">
                <!-- Section Tittle -->
                <div class="section-tittle m-0">
                  <span>{{ Detail.organization }}</span>
                  <h2>{{ Detail.projectName }}</h2>
                  <p class="mb-30">{{ Detail.describe }}</p>
                  <div class="double-btn d-flex flex-wrap">
                    <router-link to="/index" style="text-decoration: none;" class="btn_01 mr-15">Donate
                      Now</router-link>
                    <router-link to="/index" style="text-decoration: none;" class="border-btn">Follow</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2>Announcements</h2>
          <Announcement :Announcements=Announcements />

          <div class="col-lg-5">
            <form action="#" class="bg-white p-5 rounded donation-form animate__animated animate__fadeInUp">
              <h3>Quick Donation Form</h3>
              <div class="form-field mb-3">
                <label for="amount-1" class="amount js-amount" data-value="1.00">
                  <input type="radio" id="amount-1" name="radio-amount" checked="true">
                  <span>￥1</span>
                </label>

                <label for="amount-2" class="amount js-amount" data-value="5.00">
                  <input type="radio" id="amount-2" name="radio-amount">
                  <span>￥5</span>
                </label>
                <label for="amount-3" class="amount js-amount" data-value="25.00">
                  <input type="radio" id="amount-3" name="radio-amount">
                  <span>￥25</span>
                </label>
                <label for="amount-4" class="amount js-amount" data-value="100.00">
                  <input type="radio" id="amount-4" name="radio-amount">
                  <span>￥100</span>
                </label>
              </div>

              <input type="submit" value="Donate now" class="btn-secondary w-100">
            </form>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>


<script>
import axios from 'axios'
import ProgramPreview from '../components/programPreview.vue'
import Announcement from '../components/announcement.vue'
export default {
  name: 'ProjectDetail',
  components: {
    'ProgramPreview': ProgramPreview,
    'Announcement': Announcement
  },
  data() {
    return {
      id: '',
      Detail: {},
      Announcements: []
    }
  },
  mounted() {
    this.id = this.$route.params.id
    // 根据项目Id获取项目所有信息
    // 根据项目Id获取项目所有公告
    // 根据项目Id获取该项目发给改用户的所有反馈
    const outerthis = this
    axios({
      method: 'get',
      url: '/test/project-microservice/project',
      params: {
        id: this.id // 该id是父组件通过参数传进来的
      }
    }).then(function (response) {
      console.log(response.data)
      outerthis.Detail = response.data
    }).catch(function (error) {
      console.log(error)
    })

    console.log('寄')
    axios({
      method: 'get',
      url: '/test/follow-microservice/notice/SB',
      params: {
        subjectId: this.id
      }
    }).then(function (response) {
      console.log(response)
      outerthis.Announcements = response.data
      console.log(outerthis.Announcements)
    }).catch(function (error) {
      alert(error)
    })
  }
}
</script>


<style scoped>
@import '../assets/css/style2.css';
</style>