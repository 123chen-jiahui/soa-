<template>
  <div>
    寄
  </div>
</template>


<script>
import axios from 'axios'
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
    const outerthis = this
    // axios({
    //   method: 'get',
    //   url: 'http://121.5.128.97:9000/project-microservice/project',
    //   params: {
    //     id: this.id
    //   }
    // }).then(function(response) {
    //   console.log(response.data)
    //   outerthis.Detail = response.data
    // }).catch(function(error) {
    //   console.log(error)
    // })
    axios({
      method: 'get',
      url: '/test/project-microservice/project',
      params: {
        id: "id_11"
      }
    }).then(function(response) {
      console.log(response.data)
    }).catch(function(error) {
      console.log(error)
    })
  }
}
</script>


<style scoped>

</style>