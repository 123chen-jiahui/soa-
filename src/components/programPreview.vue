<template>
  <div class="properties pb-30">
    <div class="properties__card">
      <div class="properties__img">
        <router-link to="/index" style="text-decoration: none;"><img :src=ImgUrl alt=""></router-link>
      </div>
      <div class="properties__caption">
        <h3><router-link to="/index" style="text-decoration: none;">{{ProjectName}}</router-link></h3>
        <p>{{Describe}}</p>
      </div>
      <div class="properties__footer d-flex flex-wrap justify-content-between align-items-center">
        <div class="class-day">
          <span>Organizator: {{Organization}}</span>
        </div>
        <div class="class-day">
          <div><router-link to="/projects/123" class="btn_01" style="text-decoration: none;">Donate</router-link></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramPreview',
  props: ['ImgUrl', 'ProjectName', 'Describe', 'Organization'],
  methods: {
    sayhello() {
      console.log('hello wold')
    }
  },
  // computed: {
  //   ImgUrl: function() {
  //     return require('../assert')
  //   }
  // }
}
</script>

<style scoped>
@import '../assets/css/style.css';
</style>
