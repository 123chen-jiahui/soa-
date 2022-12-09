<template>
  <div>
    <div class="blog_details" v-for="(item, index) in Announcements" :key="index">
        <h2 class="blog-head" style="color: #2d2d2d;">{{item.title}}</h2>
      <div class="quote-wrapper">
        <div class="quotes">{{item.content}}
        </div>
      </div>
      <ul class="blog-info-link">
        <li>{{item.createTime}}</li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Announcement',
  props: ['Announcements'],
  mounted() {
    console.log(this.Announcements)
  }
}
</script>


<style scoped>
@import "../assets/css/style.css"
</style>