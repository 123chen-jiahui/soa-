<template>
  <div>
    <div class="blog_details" v-for="(item, index) in Notices" :key="index">
      <div class="quote-wrapper">
        <div class="quotes">{{item.content}}</div>
      </div>
      <ul class="blog-info-link">
        {{item.createTime}}
      </ul>
      <router-link :to="item.subjectId" class="browse-btn" style="text-decoration: none;">{{item.projectName}}</router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Notice',
  props: ['Notices'],
}
</script>


<!-- <style scoped>
@import "../assets/css/style.css"
</style> -->

<style scoped src="../assets/css/style.css">
</style>