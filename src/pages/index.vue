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
                                  <router-link to="/index" style="text-decoration: none;"><img src="../assets/img/logo/logo.png" alt=""></router-link>
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
                                <router-link to="/index" style="text-decoration: none;" class="btn_1 header-btn"><i class="fas fa-heart"></i>Make a Donation</router-link>
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
      <div class="slider-area position-relative">
            <div class="slider-active">
                <!-- Single Slider -->
                <div class="single-slider slider-height slider-bg1 d-flex align-items-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-sm-10">
                                <div class="hero-caption">
                                    <h1 class="animate__animated animate__fadeInUp animate__fast">Give a hand to those who are in danger!</h1>
                                    <P class="animate__animated animate__fadeInUp animate__slow">When an animal gets access to survive, it can change just about everything.</P>
                                    <router-link to="/index" style="text-decoration: none;" class="btn_1 hero-btn animate__animated animate__fadeInUp animate__slower">Ongoing Programs</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="about-area1 section-padding">
        <div class="class-offer-area fix">
            <div class="container-fluid p-0">
                <div class="class-offer-active row">
                    <div class="col-lg-4 col-md-6 col-sm-6" v-for="(item, index) in Projects" :key="index">
                        <!-- Single -->
                        <ProgramPreview :Id=item._id :ImgUrls=item.imgUrls :Describe=item.describe :ProjectName=item.projectName :Organization=item.organization />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
  </div>
</template>

<script>
import "animate.css";
import ProgramPreview from '../components/programPreview.vue'
import axios from 'axios';
export default {
  name: 'Index',
  components: {
    'ProgramPreview': ProgramPreview
  },
  data() {
    return {
        Projects: []
    }
  },
  mounted() {
    const outerthis = this
    axios({
        method: 'get',
        url: '/test/project-microservice/project/random'
    }).then(function(response) {
        console.log(response.data)
        outerthis.Projects = response.data
    }).catch(function(error) {
        console.log(error)
    })
  }
}
</script>
<style scoped>
@import '../assets/css/style.css';
</style>