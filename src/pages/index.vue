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
                                        <router-link to="/index" style="text-decoration: none;"><img
                                                src="../assets/img/logo/logo.png" alt=""></router-link>
                                    </div>
                                    <!-- Main-menu -->
                                    <div class="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><router-link to="/index"
                                                        style="text-decoration: none;">Home</router-link></li>
                                                <li><router-link to="/feedbacks"
                                                        style="text-decoration: none;">FeedBacks</router-link></li>
                                                <li><router-link to="/projects"
                                                        style="text-decoration: none;">Programs</router-link></li>
                                                <li><router-link to="/index"
                                                        style="text-decoration: none;">About</router-link></li>
                                                <li><router-link to="/index"
                                                        style="text-decoration: none;">Blog</router-link>
                                                    <ul class="submenu">
                                                        <li><router-link to="/index"
                                                                style="text-decoration: none;">Blog</router-link></li>
                                                        <li><router-link to="/index" style="text-decoration: none;">Blog
                                                                Details</router-link></li>
                                                        <li><router-link to="/index"
                                                                style="text-decoration: none;">Elements</router-link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><router-link to="/index" style="text-decoration: none;">Contact
                                                        Us</router-link></li>
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
            <div class="slider-area position-relative">
                <div class="slider-active">
                    <!-- Single Slider -->
                    <div class="single-slider slider-height slider-bg1 d-flex align-items-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-sm-10">
                                    <div class="hero-caption">
                                        <h1 class="animate__animated animate__fadeInUp animate__fast">Give a hand to
                                            those who are in danger!</h1>
                                        <P class="animate__animated animate__fadeInUp animate__slow">When an animal gets
                                            access to survive, it can change just about everything.</P>
                                        <router-link to="/index" style="text-decoration: none;"
                                            class="btn_1 hero-btn animate__animated animate__fadeInUp animate__slower">Ongoing
                                            Programs</router-link>
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
                                <ProgramPreview :Id=item.id :ImgUrls=item.picPaths :Describe=item.describe
                                    :ProjectName=item.projectName :Organization=item.organization />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="our-services-area section-img-bg section-padding xx">
                <div class="container">
                    <div class="row justify-content-center mb-25">
                        <div class="col-xl-12">
                            <!-- Section Tittle -->
                            <div class="section-tittle section-tittle2 text-center">
                                <span>Helping today</span>
                                <h2>How we help wild animals</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                            <div class="single-services1 text-center">
                                <div class="services-ion">
                                    <img src="../assets/img/icon/services1.svg" alt="">
                                </div>
                                <div class="services-cap">
                                    <h5><a>Pure Food & Water</a></h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                            <div class="single-services1 text-center">
                                <div class="services-ion">
                                    <img src="../assets/img/icon/services2.svg" alt="">
                                </div>
                                <div class="services-cap">
                                    <h5><a>Health & Medicine</a></h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                            <div class="single-services1 text-center">
                                <div class="services-ion">
                                    <img src="../assets/img/icon/services3.svg" alt="">
                                </div>
                                <div class="services-cap">
                                    <h5><a>Professional Maintenance</a></h5>
                                </div>
                            </div>
                        </div>
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
            url: 'http://121.5.128.97:9009/v1.0/sponsor-microservice/projects/RPInfo',
            params: {
                size: 3
            }
            // url: '/test/project-microservice/project/random'
        }).then(function (response) {
            console.log(response.data)
            outerthis.Projects = response.data
            for (var i = 0; i < outerthis.Projects.length; i++) {
                outerthis.Projects[i].id = '/projects/' + outerthis.Projects[i].id
            }
        }).catch(function (error) {
            console.log(error)
        })
    }
}
</script>
<style scoped>
@import '../assets/css/style.css';
@import '../assets/css/mycss.css';
@import '../assets/css/fontawesome-all.min.css';
</style>