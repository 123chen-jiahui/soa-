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
        <div class="slider-height2 xxxxx d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-5 col-lg-6 col-md-8">
                <div class="hero-caption hero-caption2">
                  <h2 class="animate__animated animate__fadeInUp animate__fast">Notices</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="class-offer-area section-padding">
        <div class="container">
          <div class="row justify-content-center mb-25">
            <div class="col-xl-12">
              <!-- Section Tittle -->
              <div class="section-tittle text-center">
                <span>Notices</span>
                <h2>Notices Received</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <Notice :Notices=Notices />
          </div>
          <el-pagination background @current-change="pageChange" :page-size="5" :pager-count="9"
            layout="prev, pager, next" :total=total>
          </el-pagination>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
import axios from 'axios'
import Notice from '../components/notice.vue'
export default {
  name: 'Notices',
  components: {
    'Notice': Notice
  },
  data() {
    return {
      Notices: [],
      total: 0
    }
  },
  methods: {
    pageChange: function (val) {
      const outerthis = this
      axios({
        method: 'get',
        url: 'http://121.5.128.97:9009/v2.0/sponsor-microservice/notice/followerId',
        params: {
          index: val,
          pageSize: 5,
          followerId: 1
        }
      }).then(function (response) {
        outerthis.Notices = response.data.List
        for (var i = 0; i < outerthis.Notices.length; i++) {
          outerthis.Notices[i].subjectId = '/projects/' + outerthis.Notices[i].subjectId
        }
        outerthis.total = response.data.Total
      }).catch(function (error) {
        alert(error)
      })
    }
  },
  mounted() {
    const outerthis = this
    var followerId = localStorage.getItem('id')
    axios({
      method: 'get',
      url: 'http://121.5.128.97:9009/v2.0/sponsor-microservice/notice/followerId',
      params: {
        index: 1,
        pageSize: 5,
        // followerId: 1
        followerId: followerId
      }
    }).then(function (response) {
      outerthis.Notices = response.data.List
      for (var i = 0; i < outerthis.Notices.length; i++) {
        outerthis.Notices[i].subjectId = '/projects/' + outerthis.Notices[i].subjectId
      }
      outerthis.total = response.data.Total
    }).catch(function (error) {
      alert(error)
    })
  }
}
</script>


<!-- <style scoped>
@import '../assets/css/style.css';
</style> -->

<style scoped src="../assets/css/style.css">
</style>
<style scoped src="../assets/css/mycss.css">
</style>