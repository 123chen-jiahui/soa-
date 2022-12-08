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
      <div class="class-offer-area section-padding">
        <div class="container">
          <div class="row justify-content-center mb-25">
            <div class="col-xl-12">
              <!-- Section Tittle -->
              <div class="section-tittle text-center">
                <span>Programs</span>
                <h2>Ongoing Programs</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <ProgramPreview ImgUrl="https://meeting-nature.oss-cn-shanghai.aliyuncs.com/class-img1.jpg" Describe="describe" ProjectName="Meeting Nature" Organization="TJU" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <ProgramPreview ImgUrl="https://meeting-nature.oss-cn-shanghai.aliyuncs.com/class-img2.jpg" Describe="describe" ProjectName="Meeting Nature" Organization="TJU" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <ProgramPreview ImgUrl="https://meeting-nature.oss-cn-shanghai.aliyuncs.com/class-img3.jpg" Describe="describe" ProjectName="Meeting Nature" Organization="TJU" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <ProgramPreview ImgUrl="https://meeting-nature.oss-cn-shanghai.aliyuncs.com/class-img1.jpg" Describe="describe" ProjectName="Meeting Nature" Organization="TJU" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ProgramPreview from '../components/programPreview.vue'
export default {
  name: 'Projects',
  components: {
    'ProgramPreview': ProgramPreview
  }
}
</script>

<style scoped>

</style>