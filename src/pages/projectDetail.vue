<template>
  <div>
    寄
  </div>
</template>


<script>

export default {
  name: 'ProjectDetail',
  data() {
    return {
      id: '',
      Detail: {},
      notices: []
    }
  },
  mounted() {
    this.num = this.$route.params.id
    // 根据项目Id获取项目所有信息
    // 根据项目Id获取项目所有公告
    // 根据项目Id获取该项目发给改用户的所有反馈
  }
}
</script>


<style scoped>

</style>