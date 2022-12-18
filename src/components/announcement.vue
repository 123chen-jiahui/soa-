<template>
  <div>
    <div class="blog_details" v-for="(item, index) in Announcements" :key="index">
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