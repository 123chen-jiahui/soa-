<template>
    <div>
        <!-- <iframe id="myIframe" src="http://118.31.108.144:8023/test/index.html" style="display: none" ></iframe> -->
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
                                                <li><router-link to="/follows"
                                                        style="text-decoration: none;">Follows</router-link></li>
                                                <li><router-link to="/notices"
                                                        style="text-decoration: none;">Notices</router-link>
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
                                        <router-link to="/projects" style="text-decoration: none;"
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
            <!-- <button @click="jump">寄了</button> -->
            <!-- <router-link to="http://118.31.108.144:8023/TJChatRoomClient/login.html">寄</router-link>
            <a href="http://118.31.108.144:8023/TJChatRoomClient/login.html">寄</a> -->
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
import qs from 'qs'
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
    methods: {
        // 无用函数
        jump() {
            var myIframe = document.getElementById('myIframe');
            console.log('寄寄')
            if (myIframe) {
                console.log('寄')
                var data = { data: 1 };
                myIframe.contentWindow.postMessage(JSON.stringify(data), 'http://118.31.108.144:8023/TJChatRoomClient/login.html');
                // alert('未登录账户，请登录！')
                window.open('http://118.31.108.144:8023/test/index.html', '_self')
            }
        },
        // 无用函数
        login() {
            axios({
                method: 'get',
                url: 'http://121.5.128.97:9009/v2.0/sponsor-microservice/login',
                params: {
                    name: `Lebron's_fans_number_9`,
                    password: 'password_'
                }
            }).then(function (response) {
                console.log(response.data)
            }).catch(function (error) {
                console.log(error.response.data)
            })
        }
    },
    mounted() {
        var aData = localStorage.getItem("iid");
        if (aData) {
            console.log('1', aData);     // 当能获取到数据时就说明是从A页面跳转过来的
            localStorage.removeItem("iid");
            localStorage.setItem('id', aData)
        } else {
            window.addEventListener("message", receiveMessage, false);
        }
        function receiveMessage(event) {
            if (event.data && typeof(event.data) == 'string' && event.data.substr(0,7) != 'webpack') {
                localStorage.setItem("id", event.data.replace(/\"/g, ""));
            }
        }

        const outerthis = this
        axios({
            method: 'get',
            url: 'http://121.5.128.97:9009/v2.0/sponsor-microservice/projects/RPInfo',
            params: {
                size: 3
            }
            // url: '/test/project-microservice/project/random'
        }).then(function (response) {
            console.log(response.data)
            outerthis.Projects = response.data
            for (var i = 0; i < outerthis.Projects.length; i++) {
                if (outerthis.Projects[i].describe.length > 50) {
                    outerthis.Projects[i].describe = outerthis.Projects[i].describe.slice(0, 50) + '......'
                }
                outerthis.Projects[i].id = '/projects/' + outerthis.Projects[i].id
            }
        }).catch(function (error) {
            console.log(error)
        })
    }
}
</script>


<!-- <style scoped>
@import '../assets/css/style.css';
@import '../assets/css/mycss.css';
@import '../assets/css/slicknav.css';
@import '../assets/css/slick.css';
@import '../assets/css/fontawesome-all.min.css';
</style> -->

<style scoped src="../assets/css/style.css">

</style>
<style scoped src="../assets/css/mycss.css">

</style>
<style scoped src="../assets/css/slicknav.css">

</style>
<style scoped src="../assets/css/slick.css">

</style>
<style scoped src="../assets/css/fontawesome-all.min.css">

</style>
<style scoped src="../assets/css/style2.css">

</style>