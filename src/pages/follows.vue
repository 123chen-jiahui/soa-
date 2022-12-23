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
        <div class="slider-height2 xxxx d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-5 col-lg-6 col-md-8">
                <div class="hero-caption hero-caption2">
                  <h2 class="animate__animated animate__fadeInUp animate__fast">Follows</h2>
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
                <span>Follows</span>
                <h2>Projects I Follow</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6" v-for="(item, index) in Projects" :key="index">
              <FollowedProgramPrev :Id=item.id :ImgUrls=item.picPaths :Describe=item.describe
                :ProjectName=item.projectName :Organization=item.organization />
            </div>
            <el-pagination background @current-change="pageChange" :page-size="4" :pager-count="9"
              layout="prev, pager, next" :total=total>
            </el-pagination>
          </div>
        </div>
      </div>
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
                        class="fa fa-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com"
                        target="_blank" rel="nofollow noopener">Colorlib</a></p>
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
import FollowedProgramPrev from '../components/followedProgramPrev.vue'
export default {
  name: 'Follows',
  components: {
    'ProgramPreview': ProgramPreview,
    'FollowedProgramPrev': FollowedProgramPrev,
  },
  data() {
    return {
      Projects: [],
      total: 0,
    }
  },
  methods: {
    pageChange: function (val) {
      const outerthis = this
      axios({
        method: 'get',
        url: 'http://121.5.128.97:9009/v2.0/sponsor-microservice/projects/page',
        params: {
          index: val,
          pageSize: 4
        }
      }).then(function (response) {
        outerthis.Projects = response.data.List
        // 修改id，便于页面跳转
        for (var i = 0; i < outerthis.Projects.length; i++) {
          if (outerthis.Projects[i].describe.length > 50) {
            outerthis.Projects[i].describe = outerthis.Projects[i].describe.slice(0, 50) + '......'
          }
          outerthis.Projects[i].id = '/projects/' + outerthis.Projects[i].id
        }
      }).catch(function (error) {
        alert(error)
      })
    }
  },
  mounted() {
    console.log('寄')
    const outerthis = this
    axios({
      method: 'get',
      url: 'http://121.5.128.97:9009/v2.0/sponsor-microservice/projects/followerId',
      params: {
        index: 1,
        pageSize: 4,
        followerId: '1'
      }
    }).then(function (response) {
      console.log(response)
      outerthis.Projects = response.data.List
      for (var i = 0; i < outerthis.Projects.length; i++) {
        if (outerthis.Projects[i].describe.length > 50) {
          outerthis.Projects[i].describe = outerthis.Projects[i].describe.slice(0, 50) + '......'
        }
        outerthis.Projects[i].id = '/projects/' + outerthis.Projects[i].id
      }
      outerthis.total = parseInt(response.data.Total)
    }).catch(function (error) {
      alert(error)
    })
  }
}
</script>


<style scoped>
@import '../assets/css/style.css';
</style>